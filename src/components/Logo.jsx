import { Link } from 'react-router-dom'

// Self-contained SVG logo — a circuit motif in brand blue + cyan, matching
// the "Wisdom in Every Byte" identity. No external image dependency.
export default function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light'
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="PRAGNA NEXGEN home">
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
        fill="none"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="14" className="fill-brand-700" />
        <circle cx="20" cy="20" r="4" className="fill-accent-400" />
        <circle cx="20" cy="44" r="4" className="fill-accent-400" />
        <circle cx="44" cy="32" r="4" className="fill-accent-400" />
        <path
          d="M20 20h10a6 6 0 0 1 6 6a6 6 0 0 0 6 6M20 44h10a6 6 0 0 0 6-6"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="1.8" fill="white" />
        <circle cx="20" cy="44" r="1.8" fill="white" />
        <circle cx="44" cy="32" r="1.8" fill="white" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-extrabold tracking-tight ${
            isLight ? 'text-white' : 'text-brand-800'
          }`}
        >
          PRAGNA <span className="text-accent-500">NEXGEN</span>
        </span>
        <span
          className={`mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] ${
            isLight ? 'text-brand-100' : 'text-slate-500'
          }`}
        >
          Wisdom in Every Byte
        </span>
      </span>
    </Link>
  )
}
