import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  const isCenter = align === 'center'
  return (
    <Reveal className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-brand-100' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
