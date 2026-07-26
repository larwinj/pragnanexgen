import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Phone, Mail } from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ProductCarousel from '../components/ProductCarousel'
import NotFound from './NotFound'
import { products, company } from '../data/site'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <NotFound />

  const related = products.filter((p) => p.slug !== product.slug)

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-900">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <nav className="flex items-center gap-2 text-sm text-brand-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-white">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{product.name}</span>
            </nav>
            <span className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
              <Icon name={product.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-lg font-medium text-accent-400">{product.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-brand-100">{product.summary}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-accent">
                Enquire About This Product <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn border border-white/25 text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" /> All Products
              </Link>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features + specs */}
      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2 items-stretch">
          {/* Key Features vertical card */}
          <div>
            <div className="card h-full p-6 flex flex-col">
              <h2 className="text-lg font-bold text-slate-900">Key Features</h2>
              <ul className="mt-4 flex-1 divide-y divide-slate-100">
                {product.features.map((f) => (
                  <li key={f} className="flex gap-3 py-3 items-start">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                    <span className="text-sm font-medium leading-relaxed text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specs card */}
          <div>
            <div className="card h-full p-6 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">Specifications</h3>
              <dl className="mt-4 flex-1 divide-y divide-slate-100">
                {product.specs.map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-sm text-slate-500">{k}</dt>
                    <dd className="text-right text-sm font-semibold text-slate-800">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-6">
                <a
                  href="/Pragna_NexGen_Wireless_Sensors_Brochure.pdf"
                  download="Pragna_NexGen_Wireless_Sensors_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full"
                >
                  <ArrowRight className="h-4 w-4" /> Download Brochure PDF
                </a>
                <a href={`tel:+${company.phoneRaw}`} className="btn-primary w-full">
                  <Phone className="h-4 w-4" /> Call to Enquire
                </a>
                <a href={`mailto:${company.email}?subject=Enquiry: ${product.name}`} className="btn-secondary w-full">
                  <Mail className="h-4 w-4" /> Email Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-slate-900">Related products</h2>
          <div className="mt-6">
            <ProductCarousel items={related} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
