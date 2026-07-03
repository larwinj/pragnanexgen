import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Download, Send } from 'lucide-react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { news, resources } from '../data/site'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function News() {
  const [subscribed, setSubscribed] = useState(false)
  const featured = news[0]
  const rest = news.slice(1)

  return (
    <>
      <PageHeader
        title="News & Resources"
        crumb="News & Resources"
        subtitle="Company announcements, helpful articles and downloadable resources on wireless monitoring, thermal imaging and AI."
      />

      {/* Featured article */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="grid overflow-hidden rounded-3xl border border-slate-100 shadow-card lg:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {formatDate(featured.date)}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{featured.excerpt}</p>
                <Link to="/contact" className="btn-primary mt-6 self-start">
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article grid */}
      <section className="pb-8">
        <div className="container-page">
          <SectionHeading align="left" eyebrow="Latest Articles" title="From our knowledge hub" />
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((n, i) => (
              <Reveal key={n.slug} delay={(i % 3) * 70}>
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
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="h-3.5 w-3.5" /> {formatDate(n.date)}
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700"
                      >
                        Read <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable resources */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Resources"
            title="Brochures & downloadable documents"
            description="Product brochures and technical documents to help you evaluate our solutions."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 70}>
                <div className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={r.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{r.description}</p>
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    <Download className="h-4 w-4" /> Download {r.type}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 to-brand-950 px-6 py-12 sm:px-12">
              <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
              <div className="relative grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Stay ahead with our newsletter
                  </h2>
                  <p className="mt-3 max-w-md text-brand-100">
                    Get the latest on AI monitoring, wireless sensors and thermal imaging delivered
                    to your inbox.
                  </p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubscribed(true)
                  }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-0 bg-white/95 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                  <button type="submit" className="btn-accent shrink-0">
                    {subscribed ? 'Subscribed!' : 'Subscribe'} <Send className="h-4 w-4" />
                  </button>
                </form>
                {subscribed && (
                  <p className="text-sm text-accent-300 lg:col-start-2">
                    Thank you — you're on the list.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
