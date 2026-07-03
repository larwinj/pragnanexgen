import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Inner-page hero banner with breadcrumb.
export default function PageHeader({ title, subtitle, crumb }) {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <nav className="flex items-center gap-2 text-sm text-brand-200">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white">{crumb || title}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-100">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
