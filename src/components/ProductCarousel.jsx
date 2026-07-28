import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Icon from './Icon'
import { products } from '../data/site'

// How many cards are visible at once per breakpoint — must match the
// card width classes below (w-full / sm:w-1/2 / lg:w-1/3 / xl:w-1/4).
function getItemsPerView(width) {
  if (width >= 1280) return 4
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export default function ProductCarousel({ items = products, autoPlay = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoSlide, setAutoSlide] = useState(autoPlay)
  const [itemsPerView, setItemsPerView] = useState(() =>
    typeof window === 'undefined' ? 1 : getItemsPerView(window.innerWidth)
  )
  const autoSlideTimerRef = useRef(null)

  // Track viewport width so we always know how many cards are on screen
  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView(window.innerWidth))
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Last valid scroll position: once the remaining cards fill the view, stop
  const maxIndex = Math.max(0, items.length - itemsPerView)

  // Clamp current position whenever the viewport or item count changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  // Nothing to scroll to when every card already fits on screen
  const canScroll = maxIndex > 0

  // Auto slide loop (disabled by default so it stays idle)
  useEffect(() => {
    if (!autoSlide || !canScroll) {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current)
      return
    }

    autoSlideTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3500)

    return () => {
      if (autoSlideTimerRef.current) clearInterval(autoSlideTimerRef.current)
    }
  }, [autoSlide, maxIndex, canScroll])

  const handlePrev = () => {
    setAutoSlide(false)
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setAutoSlide(false)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full py-4">
      {/* Header controls: Indicators + Arrows (hidden once every card already fits on screen) */}
      {canScroll && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setAutoSlide(false)
                  setCurrentIndex(idx)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-brand-700' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-600 hover:bg-brand-700 hover:text-white"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-brand-600 hover:bg-brand-700 hover:text-white"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* Carousel Track */}
      <div className="overflow-hidden rounded-2xl p-1">
        <div
          className="flex transition-transform duration-500 ease-out gap-6"
          style={{
            // Step by one card width + its share of the gap-6 (24px) gap, so
            // cards line up exactly at any items-per-view count.
            transform: `translateX(calc(-${currentIndex} * (100% + 24px) / ${itemsPerView}))`,
          }}
        >
          {items.map((p) => (
            <div key={p.slug} className="w-full shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-700 shadow-md backdrop-blur">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
                    {p.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {p.summary}
                  </p>
                  <div className="mt-5 pt-3 border-t border-slate-100">
                    <Link
                      to={`/products/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                    >
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
