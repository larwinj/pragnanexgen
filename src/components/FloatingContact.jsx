import { useState } from 'react'
import { MessageCircle, Mail, Phone, Plus, X } from 'lucide-react'
import { company } from '../data/site'

// Floating quick-contact bubble: WhatsApp, call and email.
export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  const actions = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${company.whatsappRaw || '917339491001'}`,
      icon: MessageCircle,
      className: 'bg-[#25D366] hover:bg-[#1ebe57]',
      external: true,
    },
    {
      label: 'Call us',
      href: `tel:+${company.phoneRaw}`,
      icon: Phone,
      className: 'bg-brand-700 hover:bg-brand-800',
    },
    {
      label: 'Email us',
      href: `mailto:${company.email}`,
      icon: Mail,
      className: 'bg-accent-500 hover:bg-accent-600',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        {actions.map(({ label, href, icon: I, className, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            className="group flex items-center gap-3"
          >
            <span className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {label}
            </span>
            <span className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-lg transition-colors ${className}`}>
              <I className="h-5 w-5" />
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-14 w-14 place-items-center rounded-full overflow-hidden shadow-card-hover transition-transform hover:scale-105"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
      >
        {open ? (
          <div className="grid h-full w-full place-items-center bg-brand-800 text-white">
            <X className="h-6 w-6 text-white" />
          </div>
        ) : (
          <img
            src="/contact-button.png"
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
        )}
      </button>
    </div>
  )
}
