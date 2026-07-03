import { useState } from 'react'
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { company } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose a mailto with the enquiry details (no backend required).
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    )
    const subject = encodeURIComponent(form.subject || 'Website Enquiry')
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const contactCards = [
    {
      icon: Phone,
      label: 'Call Us',
      value: company.phone,
      href: `tel:+${company.phoneRaw}`,
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: company.phone,
      href: `https://wa.me/${company.phoneRaw}`,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: company.address.full,
    },
  ]

  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact"
        subtitle="Have a question or a project in mind? Reach out and our team will get back to you with the right solution."
      />

      {/* Contact cards */}
      <section className="section pb-0">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => {
              const inner = (
                <>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {c.label}
                  </p>
                  <p className="mt-1 break-words font-semibold text-slate-900">{c.value}</p>
                </>
              )
              return (
                <Reveal key={c.label} delay={(i % 4) * 70}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                      className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card group flex h-full flex-col p-6">{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-slate-900">Send us an enquiry</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in the form and we'll respond as soon as possible.
                </p>

                {sent ? (
                  <div className="mt-8 flex flex-col items-center rounded-2xl bg-brand-50 p-10 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-700 text-white">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">Thank you!</h3>
                    <p className="mt-2 max-w-sm text-sm text-slate-600">
                      Your email client should have opened with your enquiry. If not, email us
                      directly at{' '}
                      <a href={`mailto:${company.email}`} className="font-semibold text-brand-700">
                        {company.email}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="btn-secondary mt-6"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" name="name" value={form.name} onChange={update} required />
                      <Field label="Email Address" name="email" type="email" value={form.email} onChange={update} required />
                      <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={update} />
                      <Field label="Subject" name="subject" value={form.subject} onChange={update} />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={form.message}
                        onChange={update}
                        placeholder="Tell us about your requirements..."
                        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      Send Enquiry <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2">
            <Reveal delay={100}>
              <div className="relative overflow-hidden rounded-2xl bg-brand-900 p-8 text-white">
                <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-white">Get in touch</h3>
                  <p className="mt-2 text-sm text-brand-100">
                    {company.legalName} — {company.tagline}.
                  </p>
                  <ul className="mt-6 space-y-5">
                    <InfoRow icon={MapPin} title="Head Office" value={company.address.full} />
                    <InfoRow icon={Phone} title="Phone" value={company.phone} href={`tel:+${company.phoneRaw}`} />
                    <InfoRow icon={Mail} title="Email" value={company.email} href={`mailto:${company.email}`} />
                    <InfoRow icon={Globe} title="Website" value={company.website} href={`https://${company.website}`} external />
                    <InfoRow icon={Clock} title="Working Hours" value="Mon – Sat, 9:00 AM – 6:00 PM IST" />
                  </ul>
                  <a
                    href={`https://wa.me/${company.phoneRaw}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1ebe57]"
                  >
                    <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-card">
              <iframe
                title="Pragna Nexgen location — Chennai"
                src="https://www.google.com/maps?q=Chennai,Tamil%20Nadu,India&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-accent-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </div>
  )
}

function InfoRow({ icon: I, title, value, href, external }) {
  const content = <span className="text-sm text-brand-100">{value}</span>
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
        <I className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">{title}</p>
        {href ? (
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            className="text-sm text-white hover:text-accent-400"
          >
            {value}
          </a>
        ) : (
          content
        )}
      </div>
    </li>
  )
}
