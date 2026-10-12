// Row of headline figures shown in the dark product hero.
export default function HighlightStrip({ items }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4">
      {items.map((h) => (
        <div key={h.label}>
          <dt className="sr-only">{h.label}</dt>
          <dd>
            <span className="block font-display text-xl font-bold text-white sm:text-2xl">{h.value}</span>
            <span className="mt-1 block text-xs leading-snug text-brand-200">{h.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  )
}
