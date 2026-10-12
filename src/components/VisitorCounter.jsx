import { useEffect, useState } from 'react'
import { Users } from 'lucide-react'

const VISITOR_ID_KEY = 'pragnanexgen_visitor_id'
const formatter = new Intl.NumberFormat('en-IN')

// A random, anonymous ID per browser. The server counts distinct IDs, so sending it
// on every page load is safe — only the first one ever counts. Returns null when
// storage or crypto is unavailable; that browser is then shown the count without
// being added to it, rather than being counted on every visit.
function getVisitorId() {
  try {
    let id = window.localStorage.getItem(VISITOR_ID_KEY)
    if (!id) {
      id = window.crypto.randomUUID()
      window.localStorage.setItem(VISITOR_ID_KEY, id)
    }
    return id
  } catch {
    return null
  }
}

// One request per page load, shared by every mount (StrictMode, route changes).
let countRequest

function loadVisitorCount() {
  countRequest ??= (async () => {
    // Only production builds record visits, and automated browsers only read.
    const id = import.meta.env.PROD && !navigator.webdriver ? getVisitorId() : null
    const res = await fetch(
      '/api/visitors',
      id
        ? {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
          }
        : { headers: { accept: 'application/json' } },
    )
    if (!res.ok) throw new Error(`Visitor counter responded ${res.status}`)
    const { count } = await res.json()
    if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid visitor count')
    return count
  })().catch((err) => {
    countRequest = undefined // let a later mount retry
    throw err
  })
  return countRequest
}

// Footer "unique visitors" badge backed by /api/visitors.
export default function VisitorCounter() {
  const [state, setState] = useState({ status: 'loading', count: null })

  useEffect(() => {
    let active = true
    loadVisitorCount().then(
      (count) => active && setState({ status: 'ready', count }),
      () => active && setState({ status: 'error', count: null }),
    )
    return () => {
      active = false
    }
  }, [])

  // Never show a made-up number: if the real count can't be loaded, hide the badge.
  if (state.status === 'error') return null

  return (
    <div
      className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 py-2.5 pl-2.5 pr-5"
      aria-live="polite"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent-500/15 text-accent-400">
        <Users className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="leading-tight">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Website Visitors
        </p>
        {state.status === 'loading' ? (
          <span
            className="mt-1.5 block h-5 w-16 animate-pulse rounded bg-white/10"
            aria-label="Loading visitor count"
          />
        ) : (
          <p className="mt-0.5 font-display text-lg font-bold tabular-nums text-white">
            {formatter.format(state.count)}
          </p>
        )}
      </div>
    </div>
  )
}
