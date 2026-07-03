import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { company } from '../data/site'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-6 py-14 text-center shadow-card-hover sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/25 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                Ready to monitor smarter with next-generation technology?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 sm:text-lg">
                Talk to our team about wireless sensors, thermal imaging and AI-driven monitoring
                tailored to your operations.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-accent w-full sm:w-auto">
                  Request a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:+${company.phoneRaw}`}
                  className="btn w-full border border-white/25 text-white hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
