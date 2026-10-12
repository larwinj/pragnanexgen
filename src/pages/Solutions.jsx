import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import LinkedText from '../components/LinkedText'
import { solutionGroups, industries } from '../data/site'

const process = [
  { step: '01', title: 'Consult & Assess', text: 'We understand your assets, risks and existing systems to define the right monitoring strategy.' },
  { step: '02', title: 'Design & Source', text: 'We design the solution and source proven technology through our international partners.' },
  { step: '03', title: 'Deploy & Integrate', text: 'Sensors, sensing fibre and gateways are installed — clamp-on sensors during a planned outage — and integrated with the AI platform and SCADA.' },
  { step: '04', title: 'Monitor & Support', text: 'You get 24/7 monitoring, alerts and ongoing support to keep operations running smoothly.' },
]

export default function Solutions() {
  return (
    <>
      <PageHeader
        title="Solutions"
        crumb="Solutions"
        subtitle="Purpose-built monitoring solutions — wireless point sensors, fibre-optic distributed temperature sensing (DTS) and transmission-line sensors — for energy, oil & gas, mining, buildings and industry."
      />

      {/* Jump links to each solution group */}
      <nav aria-label="Solution groups" className="border-b border-slate-100 bg-white">
        <div className="container-page flex flex-wrap gap-3 py-5">
          {solutionGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-600 hover:bg-brand-700 hover:text-white"
            >
              {g.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Solution groups */}
      {solutionGroups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`section scroll-mt-20 ${gi % 2 === 1 ? 'bg-slate-50' : ''}`}
        >
          <div className="container-page">
            <SectionHeading eyebrow={group.eyebrow} title={group.title} description={group.description} />
            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 70}>
                  <article
                    id={s.slug}
                    className="card group flex h-full scroll-mt-28 flex-col p-7 hover:-translate-y-1 hover:shadow-card-hover"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                      <Icon name={s.icon} className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">{s.name}</h3>
                    {s.audience && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-600">
                        {s.audience}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                    {s.points && (
                      <ul className="mt-4 space-y-2">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.link && (
                      <div className="mt-auto pt-6">
                        <div className="border-t border-slate-100 pt-4">
                        <Link
                          to={s.link.to}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                        >
                          {s.link.label}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Industries */}
      <section id="industries" className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Serving the sectors that can't afford downtime"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 90}>
                <div className="card h-full p-8 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-slate-900">{ind.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <LinkedText
                      text={ind.description}
                      link={ind.link}
                      linkClassName="text-brand-700 decoration-accent-500/40 hover:text-brand-900"
                    />
                  </p>
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
