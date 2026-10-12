import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  Download,
  FileText,
  ShieldCheck,
  ExternalLink,
  MapPin,
} from 'lucide-react'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import ProductCarousel from '../components/ProductCarousel'
import SpecTable from '../components/product/SpecTable'
import HighlightStrip from '../components/product/HighlightStrip'
import DistributorNote from '../components/product/DistributorNote'
import Callout from '../components/product/Callout'
import ApplicationCard from '../components/product/ApplicationCard'
import NotFound from './NotFound'
import { products, company, defaultBrochure } from '../data/site'

const contactHref = (subject) => `/contact?subject=${encodeURIComponent(subject)}`

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) return <NotFound />

  const related = products.filter((p) => p.slug !== product.slug)
  const enquirySubject = product.enquirySubject || `Enquiry: ${product.name}`
  // `brochure: null` means the product has no brochure; `undefined` falls back to the default.
  const brochure = product.brochure === undefined ? defaultBrochure : product.brochure
  const isRich = Boolean(product.specGroups)
  const label = product.modelName || product.name

  const actions = (
    <div className="space-y-3">
      {brochure ? (
        <a href={brochure.href} download target="_blank" rel="noopener noreferrer" className="btn-accent w-full">
          <Download className="h-4 w-4" /> {brochure.label}
        </a>
      ) : (
        <Link
          to={contactHref(product.documentRequest?.subject || `Datasheet request – ${label}`)}
          className="btn-accent w-full"
        >
          <FileText className="h-4 w-4" /> {product.documentRequest?.label || 'Request Datasheet'}
        </Link>
      )}
      <a href={`tel:+${company.phoneRaw}`} className="btn-primary w-full">
        <Phone className="h-4 w-4" /> Call to Enquire
      </a>
      <a
        href={`mailto:${company.email}?subject=${encodeURIComponent(enquirySubject)}`}
        className="btn-secondary w-full"
      >
        <Mail className="h-4 w-4" /> Email Enquiry
      </a>
    </div>
  )

  const featureList = (
    <ul className="mt-4 flex-1 divide-y divide-slate-100">
      {product.features.map((f) => (
        <li key={f} className="flex items-start gap-3 py-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
          <span className="text-sm font-medium leading-relaxed text-slate-700">{f}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-brand-900">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="min-w-0">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-brand-200">
              <Link to="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/products" className="hover:text-white">Products</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{product.shortName || product.name}</span>
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent-400">
                <Icon name={product.icon} className="h-7 w-7" />
              </span>
              {product.modelName && (
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-400">
                  Model {product.modelName}
                </span>
              )}
            </div>
            <h1 className="mt-5 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
            <p className="mt-2 text-lg font-medium text-accent-400">{product.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-brand-100">{product.summary}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to={contactHref(enquirySubject)} className="btn-accent">
                Enquire About This Product <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="btn border border-white/25 text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" /> All Products
              </Link>
            </div>
            {product.highlights && (
              <div className="mt-10">
                <HighlightStrip items={product.highlights} />
              </div>
            )}
            <div className="mt-8">
              <DistributorNote light />
            </div>
          </div>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview + operating principle */}
      {(product.overview || product.principle || product.comparison) && (
        <section className="section">
          <div className="container-page">
            <div className={`grid gap-10 lg:gap-14 ${product.principle ? 'lg:grid-cols-2' : ''}`}>
              {product.overview && (
                <div className={product.principle ? '' : 'max-w-4xl'}>
                  <SectionHeading align="left" eyebrow="Overview" title={`${label} at a glance`} />
                  <div className="mt-6 space-y-4 leading-relaxed text-slate-700">
                    {product.overview.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              )}
              {product.principle && (
                <Reveal>
                  <div className="card h-full p-6 sm:p-8">
                    <span className="eyebrow">How it works</span>
                    <h2 className="mt-4 text-2xl font-bold text-slate-900">{product.principle.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{product.principle.paragraphs[0]}</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {product.principle.bands.map((b) => (
                        <div key={b.name} className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                          <p className="text-sm font-bold text-brand-900">{b.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{b.text}</p>
                        </div>
                      ))}
                    </div>
                    {product.principle.paragraphs.slice(1).map((p) => (
                      <p key={p} className="mt-5 text-sm leading-relaxed text-slate-600">{p}</p>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>

            {product.comparison && (
              <Reveal className="mt-12">
                <h2 className="text-2xl font-bold text-slate-900">{product.comparison.title}</h2>
                <div className="card mt-5 overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead className="bg-brand-900 text-white">
                      <tr>
                        {product.comparison.columns.map((c) => (
                          <th key={c} scope="col" className="px-5 py-3.5 font-semibold">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {product.comparison.rows.map(([param, ours, theirs]) => (
                        <tr key={param}>
                          <th scope="row" className="px-5 py-3.5 font-medium text-slate-500">{param}</th>
                          <td className="px-5 py-3.5 font-semibold text-slate-900">{ours}</td>
                          <td className="px-5 py-3.5 text-slate-600">{theirs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Applications */}
      {product.applications && (
        <section id="applications" className="section bg-slate-50">
          <div className="container-page">
            <SectionHeading
              eyebrow="Applications"
              title={`Where ${label} is used`}
              description={product.summary}
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {product.applications.map((app, i) => (
                <ApplicationCard key={app.id} app={app} index={i} />
              ))}
            </div>

            {product.compliance && (
              <Reveal className="mt-10">
                <div className="relative overflow-hidden rounded-2xl bg-brand-900 p-6 text-white shadow-card sm:p-8">
                  <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
                        <ShieldCheck className="h-6 w-6" />
                      </span>
                      <div>
                        <h2 className="text-xl font-bold text-white">{product.compliance.title}</h2>
                        <p className="mt-2 max-w-3xl leading-relaxed text-brand-100">{product.compliance.text}</p>
                        <p className="mt-2 text-sm text-brand-200">{product.compliance.note}</p>
                      </div>
                    </div>
                    <Link to={contactHref(product.compliance.ctaSubject)} className="btn-accent shrink-0">
                      {product.compliance.ctaLabel} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Installation points */}
      {product.installationPoints && (
        <section className="section bg-slate-50">
          <div className="container-page">
            <SectionHeading eyebrow="Installation" title={product.installationPoints.title} />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {product.installationPoints.items.map((pt, i) => (
                <Reveal key={pt.title} delay={i * 80}>
                  <div className="card h-full p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{pt.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{pt.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {product.installationPoints.also && (
                <div className="card p-6">
                  <h3 className="text-base font-bold text-slate-900">{product.installationPoints.alsoTitle}</h3>
                  <ul className="mt-3 space-y-2">
                    {product.installationPoints.also.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="space-y-4">
                {product.callouts?.map((c) => (
                  <Callout key={c.title} title={c.title}>
                    <p>{c.text}</p>
                  </Callout>
                ))}
                {product.safetyNote && (
                  <Callout tone="safety" title="Installation safety">
                    <p>{product.safetyNote}</p>
                  </Callout>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features + specs */}
      <section className="section">
        {isRich ? (
          <div className="container-page">
            <div className="grid items-stretch gap-8 lg:grid-cols-12">
              <div className="card flex h-full flex-col p-6 lg:col-span-7">
                <h2 className="text-lg font-bold text-slate-900">Key Features</h2>
                {featureList}
              </div>
              <div className="card flex h-full flex-col p-6 lg:col-span-5">
                <h2 className="text-lg font-bold text-slate-900">Brochure & Enquiry</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Talk to our team in Chennai about sizing, integration and pricing for {label}.
                </p>
                <div className="mt-6">{actions}</div>
                {product.documentRequest?.note && (
                  <p className="mt-4 text-xs leading-relaxed text-slate-500">{product.documentRequest.note}</p>
                )}
                <div className="mt-auto border-t border-slate-100 pt-5">
                  <DistributorNote />
                </div>
              </div>
            </div>

            <div id="specifications" className="mt-16 scroll-mt-28">
              <h2 className="text-2xl font-bold text-slate-900">Specifications</h2>
              <p className="mt-2 text-sm text-slate-500">As published by VTI Corporation.</p>
              <div className={`mt-6 grid items-start gap-6 ${product.specGroups.length > 1 ? 'lg:grid-cols-2' : ''}`}>
                {product.specGroups.map((g) => (
                  <SpecTable key={g.title} title={g.title} rows={g.rows} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="container-page grid items-stretch gap-8 lg:grid-cols-2">
            {/* Key Features vertical card */}
            <div>
              <div className="card flex h-full flex-col p-6">
                <h2 className="text-lg font-bold text-slate-900">Key Features</h2>
                {featureList}
                {product.safetyNote && (
                  <Callout tone="safety" title="Installation safety" className="mt-4">
                    <p>{product.safetyNote}</p>
                  </Callout>
                )}
              </div>
            </div>

            {/* Specs card */}
            <div>
              <div className="card flex h-full flex-col p-6">
                <h2 className="text-lg font-bold text-slate-900">Specifications</h2>
                <dl className="mt-4 flex-1 divide-y divide-slate-100">
                  {product.specs.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-sm text-slate-500">{k}</dt>
                      <dd className="text-right text-sm font-semibold text-slate-800">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-slate-100 pt-6">{actions}</div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Standards */}
      {product.standards && (
        <section className="section bg-slate-50">
          <div className="container-page">
            <SectionHeading eyebrow="Standards" title="Standards references" />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {product.standards.map((s, i) => (
                <Reveal key={s.name} delay={i * 80}>
                  <div className="card h-full p-6">
                    <h3 className="text-lg font-bold text-brand-800">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href={company.vti.standardsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
              >
                Standards compliance on vti-sensors.com <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      <section className={`section ${product.standards ? '' : 'bg-slate-50'}`}>
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
