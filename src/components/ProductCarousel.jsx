import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Icon from './Icon'
import { products } from '../data/site'

// Continuous "news ticker" product carousel: cards glide right → left without
// stopping and loop seamlessly. It pauses while hovered or focused, when the tab is
// hidden, and for users who prefer reduced motion. The arrows glide one card.
const SPEED_PX_PER_SECOND = 40
const NUDGE_DURATION_MS = 450
const GAP_PX = 24 // must match the track's gap-6

const arrowClass =
  'grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-600 hover:bg-brand-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2'

const easeOutCubic = (t) => 1 - (1 - t) ** 3

function ProductCard({ product: p, clone = false }) {
  return (
    <div
      className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
      aria-hidden={clone || undefined}
    >
      <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={p.image}
            alt={p.imageAlt || p.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-700 shadow-md backdrop-blur">
            <Icon name={p.icon} className="h-6 w-6" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">{p.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
          <div className="mt-5 border-t border-slate-100 pt-3">
            <Link
              to={`/products/${p.slug}`}
              tabIndex={clone ? -1 : undefined}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
            >
              View details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default function ProductCarousel({ items = products }) {
  const trackRef = useRef(null)
  const offsetRef = useRef(0) // distance travelled in px (unbounded; wrapped when drawn)
  const stepRef = useRef(0) // one card width + gap
  const nudgeRef = useRef(null) // { from, to, start } while an arrow glide runs
  const pausedRef = useRef(false)

  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [pageHidden, setPageHidden] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  pausedRef.current = hovered || focused || pageHidden || reducedMotion

  // Respect the OS "reduce motion" setting and stop while the tab is in the background
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => setReducedMotion(motion.matches)
    const onVisibility = () => setPageHidden(document.visibilityState === 'hidden')
    onMotion()
    onVisibility()
    motion.addEventListener('change', onMotion)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      motion.removeEventListener('change', onMotion)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  // Animation loop: drift at a constant speed, wrapping after one full set of cards
  // (the second, cloned set makes the wrap invisible).
  useEffect(() => {
    const track = trackRef.current
    if (!track || items.length === 0) return

    const measure = () => {
      const first = track.firstElementChild
      stepRef.current = first ? first.getBoundingClientRect().width + GAP_PX : 0
    }
    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(track)

    let last = performance.now()
    let frame
    const tick = (now) => {
      const dt = Math.min(now - last, 100) // avoid a jump after the tab was throttled
      last = now
      const nudge = nudgeRef.current
      if (nudge) {
        const t = Math.min(1, (now - nudge.start) / NUDGE_DURATION_MS)
        offsetRef.current = nudge.from + (nudge.to - nudge.from) * easeOutCubic(t)
        if (t === 1) nudgeRef.current = null
      } else if (!pausedRef.current) {
        offsetRef.current += (SPEED_PX_PER_SECOND * dt) / 1000
      }
      const loopWidth = stepRef.current * items.length
      if (loopWidth > 0) {
        const x = ((offsetRef.current % loopWidth) + loopWidth) % loopWidth
        track.style.transform = `translate3d(${-x.toFixed(2)}px, 0, 0)`
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
    }
  }, [items.length])

  // Glide to the next / previous card edge so a card lines up with the left side.
  // If that edge is less than half a card away, go one card further, so every click
  // produces a clearly visible move.
  const nudge = useCallback((direction) => {
    const step = stepRef.current
    if (!step) return
    const from = offsetRef.current
    let to = direction > 0 ? (Math.floor(from / step) + 1) * step : (Math.ceil(from / step) - 1) * step
    if (Math.abs(to - from) < step / 2) to += direction * step
    nudgeRef.current = { from, to, start: performance.now() }
  }, [])

  if (items.length === 0) return null

  return (
    <div
      className="relative w-full py-4"
      role="region"
      aria-roledescription="carousel"
      aria-label="Products"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)
      }}
    >
      <div className="mb-6 flex items-center justify-end gap-3">
        <button type="button" onClick={() => nudge(-1)} className={arrowClass} aria-label="Previous product">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => nudge(1)} className={arrowClass} aria-label="Next product">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Track: the product set followed by a hidden clone for a seamless loop */}
      <div className="overflow-hidden rounded-2xl p-1">
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          {items.map((p) => (
            <ProductCard key={`${p.slug}-clone`} product={p} clone />
          ))}
        </div>
      </div>
    </div>
  )
}
