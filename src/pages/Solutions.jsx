import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { solutions, industries } from '../data/site'

const process = [
  { step: '01', title: 'Consult & Assess', text: 'We understand your assets, risks and existing systems to define the right monitoring strategy.' },
  { step: '02', title: 'Design & Source', text: 'We design the solution and source proven technology through our international partners.' },
  { step: '03', title: 'Deploy & Integrate', text: 'Sensors, cameras and gateways are installed and integrated with the AI platform and SCADA.' },
  { step: '04', title: 'Monitor & Support', text: 'You get 24/7 monitoring, alerts and ongoing support to keep operations running smoothly.' },
]

export default function Solutions() {
  return (
    <>
      <PageHeader
        title="Solutions"
        crumb="Solutions"
        subtitle="Purpose-built monitoring solutions that bring our products together to solve real problems across energy, healthcare and industry."
      />

      {/* Solutions grid */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Solve"
            title="Monitoring solutions for critical operations"
            description="Each solution combines wireless sensing, thermal imaging and AI to detect problems early and keep your systems reliable."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 70}>
                <div className="card group flex h-full flex-col p-7 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Serving the sectors that can't afford downtime"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 90}>
                <div className="card h-full p-8 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{ind.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section relative overflow-hidden bg-brand-900">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div className="container-page relative">
          <SectionHeading
            light
            eyebrow="How We Work"
            title="From consultation to continuous monitoring"
            description="A clear, proven process that takes you from assessment to a fully supported, running system."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 80}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7">
                  <span className="font-display text-4xl font-bold text-accent-400/70">{p.step}</span>
                  <h3 className="mt-3 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-200">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-accent">
              Discuss Your Requirements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
