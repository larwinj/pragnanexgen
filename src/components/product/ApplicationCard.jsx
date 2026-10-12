import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Icon from '../Icon'
import Callout from './Callout'

// One application of a product, with its own heading and an anchor id for deep links.
export default function ApplicationCard({ app, index }) {
  return (
    <article id={app.id} className="card scroll-mt-28 p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
          <Icon name={app.icon} className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          {index !== undefined && (
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
              Application {String.fromCharCode(97 + index)})
            </span>
          )}
          <h3 className="mt-0.5 text-xl font-bold text-slate-900">{app.title}</h3>
          {app.audience && <p className="mt-1 text-sm font-medium text-slate-500">{app.audience}</p>}
        </div>
      </div>
      <p className="mt-5 leading-relaxed text-slate-700">{app.text}</p>
      {app.note && (
        <Callout tone="note" title={app.note.title} className="mt-6">
          <p>{app.note.text}</p>
          {app.note.emphasis && <p className="font-semibold text-slate-900">{app.note.emphasis}</p>}
          {app.note.link && (
            <Link
              to={app.note.link.to}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900"
            >
              {app.note.link.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </Callout>
      )}
    </article>
  )
}
