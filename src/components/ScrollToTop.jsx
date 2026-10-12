import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// On route change, scrolls to the `#hash` target when present, otherwise to the top.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) {
      target.scrollIntoView({ block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}
