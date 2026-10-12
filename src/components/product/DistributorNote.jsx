import { BadgeCheck, ExternalLink } from 'lucide-react'
import { company } from '../../data/site'

// "Authorised distributor of VTI Corporation (Vietnam)" line with a link to the manufacturer.
export default function DistributorNote({ light = false }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm ${light ? 'text-brand-100' : 'text-slate-600'}`}>
      <BadgeCheck className={`h-4 w-4 shrink-0 ${light ? 'text-accent-400' : 'text-accent-500'}`} />
      <span>{company.vti.label}</span>
      <a
        href={company.vti.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-1 font-semibold underline-offset-4 hover:underline ${
          light ? 'text-accent-400' : 'text-brand-700'
        }`}
      >
        vti-sensors.com <ExternalLink className="h-3.5 w-3.5" />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </p>
  )
}
