import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="PRAGNA NEXGEN home">
      <img
        src="/pn-logo.png"
        alt="PRAGNA NEXGEN TECHNOLOGIES"
        className="h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </Link>
  )
}

