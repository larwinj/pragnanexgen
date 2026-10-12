// Specification table: label/value rows copied verbatim from the manufacturer's data.
export default function SpecTable({ title, rows }) {
  return (
    <div className="card overflow-hidden">
      {title && (
        <h3 className="border-b border-slate-100 bg-slate-50 px-6 py-4 text-base font-bold text-slate-900">
          {title}
        </h3>
      )}
      <dl className="divide-y divide-slate-100">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-6 py-3.5 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6">
            <dt className="text-sm text-slate-500">{label}</dt>
            <dd className="text-sm font-semibold leading-relaxed text-slate-800">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
