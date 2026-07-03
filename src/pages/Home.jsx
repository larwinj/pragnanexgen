import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Bell,
  Boxes,
  MonitorSmartphone,
  Settings2,
} from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import {
  company,
  stats,
  products,
  whyChoose,
  industries,
  news,
  specialties,
} from '../data/site'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const latestNews = news.slice(0, 3)

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-brand-950">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-400">
              {company.tagline}
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Next-Generation <span className="text-accent-400">AI Monitoring</span> for Critical
              Infrastructure
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100">
              Optimised remote monitoring built on wireless sensors, thermal imaging and AI —
              engineered for minimal investment and easy deployment, so you can prevent failures
              before they happen.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/products" className="btn-accent">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn border border-white/25 text-white hover:bg-white/10">
                Request a Consultation
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-brand-200">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                  alt="AI-driven technology and monitoring"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-xl bg-white p-3 shadow-card-hover sm:-left-8 animate-float">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
                  <Bell className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-900">24/7 Alerts</p>
                  <p className="text-[11px] text-slate-500">Real-time notifications</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-2 flex items-center gap-3 rounded-xl bg-white p-3 shadow-card-hover sm:-right-6 animate-float [animation-delay:-3s]">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent-50 text-accent-600">
                  <CheckCircle2 className="h-5 w-5 text-accent-600" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-900">Failure Prevention</p>
                  <p className="text-[11px] text-slate-500">Predictive insight</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialty marquee-style strip */}
        <div className="relative border-t border-white/10 bg-white/5">
          <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-xs font-medium uppercase tracking-wider text-brand-200">
            {specialties.slice(0, 6).map((s) => (
              <span key={s} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO / ABOUT SNAPSHOT ============ */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80"
                  alt="Engineers working with monitoring technology"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-800 p-6 text-white shadow-card-hover sm:block">
                <p className="font-display text-3xl font-bold">Global</p>
                <p className="mt-1 max-w-[9rem] text-sm text-brand-100">
                  International collaborations for advanced technology
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="A next-generation technology consulting company"
              description={company.overview}
            />
            <Reveal delay={100}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'AI-based platforms & solutions',
                  'Wireless sensor ecosystems',
                  'Thermal imaging & detection',
                  'Technology consulting',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-primary mt-8">
                More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT CATEGORIES ============ */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Products"
            title="Technology products built to monitor and protect"
            description="A complete, integrated portfolio — from wireless sensors and thermal cameras to data collectors and the AI platform that ties it all together."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link
                  to={`/products/${p.slug}`}
                  className="card group flex h-full flex-col p-7 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/products" className="btn-secondary">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AI PLATFORM ============ */}
      <section className="section relative overflow-hidden bg-brand-900">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              light
              eyebrow="AI Monitoring Platform"
              title="One intelligent platform for everything you monitor"
              description="The Pragna Nexgen AI platform unifies data from every sensor and camera, delivering continuous automated monitoring so equipment failures are caught early and lifespans are extended."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Bell, title: '24/7 Automated Alerts', text: 'Instant push, email and SCADA notifications.' },
                { icon: Settings2, title: 'Custom Thresholds', text: 'Flexible sampling rates and alert rules.' },
                { icon: Boxes, title: '3D / BIM Visualisation', text: 'See assets in context, not just tables.' },
                { icon: MonitorSmartphone, title: 'Multi-System Integration', text: 'Connects to SCADA and mobile.' },
              ].map(({ icon: I, title, text }) => (
                <Reveal key={title}>
                  <div className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-500/20 text-accent-400">
                      <I className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-brand-200">{text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Link to="/products/ai-monitoring-platform" className="btn-accent mt-8">
              Explore the Platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="AI monitoring dashboard"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Pragna Nexgen"
            title="Comprehensive, expert and reliable by design"
            description="We combine advanced hardware, intelligent software and consulting expertise into solutions you can depend on."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 70}>
                <div className="card h-full p-7 text-center hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-md">
                    <Icon name={w.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Trusted where reliability matters most"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 90}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-brand-900 p-8 text-white shadow-card">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl transition-all group-hover:bg-accent-500/40" />
                  <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-accent-400">
                    <Icon name={ind.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-5 text-xl font-bold text-white">{ind.name}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-brand-100">
                    {ind.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWS PREVIEW ============ */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="News & Resources"
              title="Insights from the world of AI monitoring"
            />
            <Link to="/news" className="btn-secondary shrink-0">
              All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {latestNews.map((n, i) => (
              <Reveal key={n.slug} delay={i * 90}>
                <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={n.image}
                      alt={n.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                      <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                        {n.category}
                      </span>
                      <span>{n.readTime}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 group-hover:text-brand-700">
                      {n.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
                    <Link
                      to="/news"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                    >
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
