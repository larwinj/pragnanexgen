import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Download, FileText } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import ProductCarousel from '../components/ProductCarousel'
import { products, defaultBrochure } from '../data/site'

const dtsBrochure = products.find((p) => p.slug === 'dts-vti-gl-100c')?.brochure

export default function Products() {
  return (
    <>
      <PageHeader
        title="Products & Solutions"
        crumb="Products"
        subtitle="Authorised distributor in India of VTI Corporation (Vietnam) — VIET TECHNOLOGY AND INVESTMENT CORPORATION JOINT STOCK COMPANY — marketed by Pragna NexGen Technologies Pvt Ltd: fibre-optic distributed temperature sensing (DTS), transmission-line sensors, high-precision wireless temperature and environmental sensors, data collectors and AI platforms."
      />

      <section className="section">
        <div className="container-page">
          {/* Brochure banner */}
          <div className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 p-6 text-white shadow-md sm:flex-row sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">Product Brochures</h3>
                <p className="text-xs text-brand-200 sm:text-sm">
                  Download our official product brochures for complete technical specifications & test standards.
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto lg:flex-row">
              <a
                href={defaultBrochure.href}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <Download className="h-4 w-4" /> Wireless Sensors Brochure (PDF)
              </a>
              {dtsBrochure && (
                <a
                  href={dtsBrochure.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-white/25 text-white hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> DTS Brochure (PDF, 3.1 MB)
                </a>
              )}
            </div>
          </div>

          {/* Product Carousel */}
          <div className="mt-6">
            <ProductCarousel items={products} />
          </div>
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
