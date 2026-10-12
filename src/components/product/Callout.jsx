import { Info, ShieldCheck, Wrench } from 'lucide-react'

const tones = {
  info: { box: 'border-brand-100 bg-brand-50', icon: Info, iconClass: 'text-brand-700', title: 'text-brand-900' },
  note: { box: 'border-amber-200 bg-amber-50', icon: Wrench, iconClass: 'text-amber-600', title: 'text-amber-900' },
  safety: { box: 'border-emerald-200 bg-emerald-50', icon: ShieldCheck, iconClass: 'text-emerald-600', title: 'text-emerald-900' },
}

// Highlighted note block (engineering notes, safety statements, clarifications).
export default function Callout({ title, tone = 'info', children, className = '' }) {
  const t = tones[tone] || tones.info
  const I = t.icon
  return (
    <div className={`flex gap-3 rounded-xl border p-4 sm:p-5 ${t.box} ${className}`}>
      <I className={`mt-0.5 h-5 w-5 shrink-0 ${t.iconClass}`} />
      <div className="min-w-0 text-sm leading-relaxed text-slate-700">
        {title && <p className={`font-semibold ${t.title}`}>{title}</p>}
        <div className={title ? 'mt-1 space-y-2' : 'space-y-2'}>{children}</div>
      </div>
    </div>
  )
}
