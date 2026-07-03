import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Icon from '../components/Icon'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { products, productCategories } from '../data/site'

export default function Products() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <>
      <PageHeader
        title="Products & Solutions"
        crumb="Products"
        subtitle="An integrated portfolio of wireless sensors, thermal imaging, AI platforms and detection systems — everything you need to monitor and protect critical assets."
      />

      <section className="section">
        <div className="container-page">
          {/* Category filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActive('all')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === 'all'
                  ? 'bg-brand-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Products
            </button>
            {productCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === c.id
                    ? 'bg-brand-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-700 shadow-md backdrop-blur">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-accent-600">{p.tagline}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{p.summary}</p>
                    <div className="mt-5 flex items-center gap-4">
                      <Link
                        to={`/products/${p.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
                      >
                        View details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-12 text-center text-slate-500">No products in this category yet.</p>
          )}
        </div>
      </section>

      {/* Enquiry banner */}
      <section className="pb-8">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-brand-100 bg-brand-50 p-8 sm:flex-row">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-700 text-white">
                  <MessageSquare className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Not sure which product fits your needs?
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Enquire about any product and our team will recommend the right solution.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="btn-primary shrink-0">
                Enquire Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
