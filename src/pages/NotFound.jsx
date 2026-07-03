import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-brand-950">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-bold text-accent-400 sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-brand-100">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link to="/" className="btn-accent">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link to="/products" className="btn border border-white/25 text-white hover:bg-white/10">
            Explore Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
