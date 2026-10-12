// Unique-visitor counter behind /api/visitors, stored in Upstash Redis (REST API).
// Shared by the Vercel function (api/visitors.js) and the local Express server
// (server/routes/visitors.js) so both behave identically.
//
// The count is the number of distinct anonymous visitor IDs ever recorded — the
// browser never writes a number back — which makes it accurate by construction:
//   - Recording is one atomic Redis script, so simultaneous visitors can never
//     overwrite each other's increment (no read → +1 → write race).
//   - Recording is idempotent per visitor ID, so reloads, retries, extra tabs and
//     React StrictMode's double effects cannot inflate it.
//   - Crawlers and headless browsers are shown the count but never added to it.
//   - Each IP may add a bounded number of *new* IDs per hour, so a script minting
//     random IDs cannot pump the number.
//
// Env (server-side only — never expose to the browser):
//   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
//   (or KV_REST_API_URL / KV_REST_API_TOKEN, as injected by Vercel's Upstash integration)
import { createHash } from "node:crypto";
import { isbot } from "isbot";

// The Upstash database is shared with other projects, so every key carries this prefix.
const VISITORS_KEY = "pragnanexgen:visitors";
const RATE_KEY_PREFIX = "pragnanexgen:visitors:rl:";

// New visitor IDs accepted per IP per window. Generous because Indian mobile carriers
// put many real users behind one CGNAT address; the goal is to stop scripted inflation.
const NEW_VISITORS_PER_IP = 60;
const RATE_WINDOW_SECONDS = 60 * 60;
const UPSTREAM_TIMEOUT_MS = 5000;

const VISITOR_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// KEYS[1] visitor set, KEYS[2] this IP's rate counter.
// ARGV[1] visitor ID, ARGV[2] limit, ARGV[3] window in seconds.
// Returning visitors never touch the rate counter, so repeat page loads from a busy
// shared IP don't crowd out genuinely new visitors.
const RECORD_SCRIPT = `
if redis.call('SISMEMBER', KEYS[1], ARGV[1]) == 0 then
  local attempts = redis.call('INCR', KEYS[2])
  if attempts == 1 then redis.call('EXPIRE', KEYS[2], ARGV[3]) end
  if attempts <= tonumber(ARGV[2]) then redis.call('SADD', KEYS[1], ARGV[1]) end
end
return redis.call('SCARD', KEYS[1])
`;

// Upstash Redis over its REST API — plain fetch, no SDK.
function createRedisStore(url, token, { key = VISITORS_KEY, ratePrefix = RATE_KEY_PREFIX } = {}) {
  const command = async (...args) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(args),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || body.error) {
      throw new Error(`Redis ${args[0]} failed: ${body.error ?? res.status}`);
    }
    return body.result;
  };

  return {
    count: async () => Number(await command("SCARD", key)),
    record: async (id, ipHash) =>
      Number(
        await command(
          "EVAL",
          RECORD_SCRIPT,
          "2",
          key,
          ratePrefix + ipHash,
          id,
          String(NEW_VISITORS_PER_IP),
          String(RATE_WINDOW_SECONDS),
        ),
      ),
    // Used by the self-test only.
    command,
  };
}

// Returns null when Upstash is not configured (the endpoint then answers 503 and the
// footer badge stays hidden rather than showing a made-up number).
export function createVisitorStore(env = process.env, options) {
  const url = env.UPSTASH_REDIS_REST_URL || env.KV_REST_API_URL;
  const token = env.UPSTASH_REDIS_REST_TOKEN || env.KV_REST_API_TOKEN;
  return url && token ? createRedisStore(url.trim().replace(/\/+$/, ""), token.trim(), options) : null;
}

// Created on first request, after the hosting platform / dotenv has populated env.
let defaultStore;
const getStore = () => (defaultStore ??= createVisitorStore(process.env));

const hashIp = (ip) => createHash("sha256").update(`pragnanexgen:${ip}`).digest("hex").slice(0, 24);

function clientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return (
    req.headers["x-real-ip"] ||
    (typeof forwarded === "string" ? forwarded.split(",")[0].trim() : "") ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return null;
}

// GET  → { count } without recording anything.
// POST { id } → records the visitor (if genuine) and returns { count }.
// Works with both Vercel's and Express's Node (req, res).
export async function handleVisitors(req, res, store = getStore()) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  if (!store) {
    console.error("[visitors] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set.");
    return res.status(503).json({ success: false, message: "Visitor counter is not configured" });
  }

  try {
    if (req.method === "GET") {
      return res.status(200).json({ success: true, count: await store.count() });
    }

    // Browsers stamp this header and pages cannot forge it, so other sites cannot make
    // their visitors' browsers inflate our count.
    const fetchSite = req.headers["sec-fetch-site"];
    if (fetchSite && fetchSite !== "same-origin") {
      return res.status(403).json({ success: false, message: "Cross-site requests are not accepted" });
    }

    const id = readBody(req)?.id;
    if (typeof id !== "string" || !VISITOR_ID.test(id)) {
      return res.status(400).json({ success: false, message: "A valid visitor id is required" });
    }

    const userAgent = req.headers["user-agent"] || "";
    if (!userAgent || isbot(userAgent)) {
      return res.status(200).json({ success: true, count: await store.count() });
    }

    const count = await store.record(id.toLowerCase(), hashIp(clientIp(req)));
    return res.status(200).json({ success: true, count });
  } catch (err) {
    // Upstream details stay in the server log, not in the public response.
    console.error("[visitors]", err.message);
    return res.status(503).json({ success: false, message: "Visitor counter is temporarily unavailable" });
  }
}
