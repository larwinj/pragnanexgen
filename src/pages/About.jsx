import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, CheckCircle2, Award, Handshake } from 'lucide-react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { company, specialties, stats, whyChoose } from '../data/site'

const coreValues = [
  { icon: 'Lightbulb', title: 'Innovation', text: 'We turn advanced technology into practical, everyday value for our customers.' },
  { icon: 'ShieldCheck', title: 'Reliability', text: 'Our systems are engineered to run continuously in demanding environments.' },
  { icon: 'Users', title: 'Partnership', text: 'We work as an extension of your team, from consulting to deployment.' },
  { icon: 'Gem', title: 'Quality', text: 'International collaborations let us deliver proven, high-standard products.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About Pragna Nexgen"
        crumb="About Us"
        subtitle="A next-generation technology consulting company and provider of advanced monitoring products — built on the belief that there is wisdom in every byte."
      />

      {/* Company profile */}
      <section className="section">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src="/chennai-tech.png"
                  alt="Pragna Nexgen Chennai Tech Hub"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-brand-800 p-6 text-white shadow-card-hover sm:block">
                <p className="font-display text-2xl font-bold">Chennai, India</p>
                <p className="mt-1 text-sm text-brand-100">Headquartered in Tamil Nadu</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Company Profile"
              title="Wisdom in every byte"
              description={company.overview}
            />
            <Reveal delay={100}>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Industry</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-800">{company.industry}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Headquarters</dt>
                  <dd className="mt-1 text-sm font-medium text-slate-800">{company.address.full}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">Website</dt>
                  <dd className="mt-1 text-sm font-medium text-brand-700">{company.website}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand-900 py-14">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-2 text-sm text-brand-200">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                <Target className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To deliver next-generation wireless temperature and environmental monitoring solutions engineered for high-voltage and critical infrastructure — empowering industries to prevent electrical failures, enhance operational safety, and maximize asset longevity with intelligent data-driven insights.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-50 text-accent-600">
                <Eye className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                To be the premier partner for next-generation industrial monitoring and predictive safety across India and globally, setting the standard for reliable wireless sensing technology, seamless SCADA & AI integration, and zero-downtime operations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Core Values" title="The principles behind everything we build" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 70}>
                <div className="card h-full p-7 text-center hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white">
                    <Icon name={v.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties + certifications */}
      <section className="section">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Specialties"
              title="Deep expertise across our portfolio"
              description="Our specialities span the full monitoring stack — from field sensors to AI-driven detection and consulting."
            />
            <Reveal delay={100}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {specialties.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-sm font-medium text-slate-700">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Quality & Standards"
              title="Certified quality, international collaboration"
              description="We pursue international quality standards and partnerships to ensure every product we deliver is reliable, proven and professionally supported."
            />
            <Reveal delay={100}>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Award, title: 'International Quality Standards', text: 'Products sourced and validated to high international benchmarks.' },
                  { icon: Handshake, title: 'Global Technology Partners', text: 'Collaborations that bring advanced technology to your operations.' },
                  { icon: CheckCircle2, title: 'Reliable, Supported Deployments', text: 'End-to-end consulting, integration and ongoing support.' },
                ].map(({ icon: I, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-card">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <I className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose recap */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading eyebrow="Why Work With Us" title="What sets Pragna Nexgen apart" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <div className="card h-full p-7 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
