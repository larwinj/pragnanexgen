import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react"
import Logo from './Logo'
import { company, navLinks, products } from '../data/site'

export default function Footer() {
  const year = 2026

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-slate-300">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />

      <div className="container-page relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="rounded-xl bg-white p-3 shadow-sm inline-block">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.overview}
            </p>
            <div className="mt-4 rounded-xl border border-accent-500/30 bg-accent-500/10 p-3.5 text-xs font-semibold text-accent-300">
              {company.distributorText}
            </div>
            <div className="mt-6 flex gap-3">
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-500"
              aria-label="LinkedIn"
            >
            <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-500"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-500"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noreferrer noopener"
                className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white transition-colors hover:bg-accent-500"
                aria-label="Twitter"
              >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products & Solutions
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {products.slice(0, 4).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-slate-400 transition-colors hover:text-accent-400"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <span className="text-slate-400">{company.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <a href={`tel:+${company.phoneRaw}`} className="text-slate-400 hover:text-accent-400">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                <a href={`mailto:${company.email}`} className="break-all text-slate-400 hover:text-accent-400">
                  {company.email}
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-accent-500"
            >
              Send an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
