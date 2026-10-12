// Vercel serverless function: GET/POST /api/visitors (see server/lib/visitorCounter.js).
import { handleVisitors } from "../server/lib/visitorCounter.js";

export default function visitors(req, res) {
  return handleVisitors(req, res);
}
