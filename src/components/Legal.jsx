import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const TABS = [
  { id: 'imprint', label: 'Imprint' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'terms', label: 'Terms' },
]

export default function Legal({ open, initialTab = 'imprint', onClose }) {
  const [active, setActive] = useState(initialTab)

  useEffect(() => {
    if (open) setActive(initialTab)
  }, [open, initialTab])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      className="fixed inset-0 z-[100] flex items-stretch md:items-center md:justify-center"
    >
      {/* Backdrop */}
      <button
        aria-label="Close legal dialog"
        onClick={onClose}
        className="absolute inset-0 bg-bg/85 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative w-full md:max-w-3xl lg:max-w-4xl md:max-h-[85vh] bg-bg-elev hairline-t md:border border-white/10 flex flex-col overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="block h-5 w-[3px] bg-bmw-blue" />
            <span id="legal-title" className="tech-label">
              Legal · {TABS.find((t) => t.id === active)?.label}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 border border-white/15 hover:border-bmw-blue hover:text-bmw-blue transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Tabs */}
        <div role="tablist" className="flex border-b border-white/10 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative px-5 md:px-7 py-4 tech-label whitespace-nowrap transition-colors ${
                active === tab.id
                  ? 'text-fg'
                  : 'text-fg-dim hover:text-fg-muted'
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bmw-blue" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 md:py-10 text-fg-muted leading-relaxed font-light text-[15px]">
          {active === 'imprint' && <Imprint />}
          {active === 'privacy' && <Privacy />}
          {active === 'terms' && <Terms />}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-4 border-t border-white/10 tech-label-dim">
          <span>— Last updated 2026 · 04 · 23</span>
          <span>CH · EN</span>
        </div>
      </div>
    </div>
  )
}

function H({ children }) {
  return (
    <h3 className="display-tight text-xl md:text-2xl text-fg mt-10 mb-4 first:mt-0">
      {children}
    </h3>
  )
}

function Field({ k, v }) {
  return (
    <div className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] gap-4 py-2 border-b border-white/5">
      <dt className="tech-label-dim self-center">{k}</dt>
      <dd className="text-fg font-light">{v}</dd>
    </div>
  )
}

function Imprint() {
  return (
    <div>
      <H>Imprint / Impressum</H>
      <p className="mb-6">
        Information in accordance with Art. 3 UWG (CH) and Art. 5 TMG (DE/EU).
        Swap the placeholders below with your real details before publishing.
      </p>
      <dl>
        <Field k="Operator" v="[Your full legal name]" />
        <Field k="Pseudonym" v="GarfieldTV" />
        <Field k="Address" v="[Street, Postal code, City, Switzerland]" />
        <Field k="Email" v="your@email.com" />
        <Field k="Phone" v="[Optional]" />
        <Field k="Responsible" v="[Your full legal name]" />
      </dl>

      <H>Liability for content</H>
      <p className="mb-4">
        The contents of this site were created with the greatest possible care.
        However, no guarantee can be given for the accuracy, completeness, or
        timeliness of the content. As a service provider, the operator is
        responsible for own content on these pages according to general
        legislation.
      </p>

      <H>Liability for links</H>
      <p>
        This site contains links to external websites over which the operator
        has no control. The respective provider or operator is always responsible
        for the content of linked sites. Upon notification of legal violations,
        such links will be removed immediately.
      </p>
    </div>
  )
}

function Privacy() {
  return (
    <div>
      <H>Privacy at a glance</H>
      <p className="mb-4">
        This website is a personal portfolio. It does not set marketing or
        tracking cookies, does not run third-party analytics, and does not
        collect personal data beyond what your browser transmits as part of any
        normal HTTP request.
      </p>

      <H>What we don't do</H>
      <ul className="list-none space-y-2 pl-0">
        {[
          'No Google Analytics, Meta Pixel, or similar third-party tracking.',
          'No advertising cookies or behavioural profiling.',
          'No newsletter sign-ups or email harvesting.',
          'No sale or sharing of personal data.',
        ].map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-[10px] h-[3px] w-3 bg-bmw-blue shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>

      <H>Hosting and server logs</H>
      <p className="mb-4">
        When you visit this site, the hosting provider may automatically record
        technical data such as your IP address, browser user-agent, referrer,
        and the timestamp of the request. These logs are kept for security and
        diagnostic purposes and are not linked to a personal profile.
      </p>

      <H>External services</H>
      <p className="mb-4">
        Fonts are loaded from Google Fonts. Clicking a Twitch, YouTube or
        Discord link will redirect you to the respective provider, whose
        privacy policy then applies. Review their terms before interacting.
      </p>

      <H>Your rights</H>
      <p className="mb-4">
        Under the Swiss FADP and the EU GDPR, you have the right to request
        information about any personal data stored about you, to have it
        corrected or deleted, and to lodge a complaint with the supervisory
        authority. Contact the operator using the email in the Imprint.
      </p>

      <H>Contact</H>
      <p>
        For any privacy-related questions, reach out to{' '}
        <a href="mailto:your@email.com" className="text-bmw-blue hover:underline">
          your@email.com
        </a>
        .
      </p>
    </div>
  )
}

function Terms() {
  return (
    <div>
      <H>Terms of use</H>
      <p className="mb-4">
        By accessing this website you agree to the following terms. If you do
        not agree, please do not use the site.
      </p>

      <H>Content</H>
      <p className="mb-4">
        All text, visuals, and code on this website are the work of the
        operator unless otherwise credited. Logos, game names, and third-party
        trademarks (Minecraft, Twitch, Discord, YouTube) belong to their
        respective owners and are used here descriptively.
      </p>

      <H>Usage</H>
      <p className="mb-4">
        You may view, share, and link to this site freely. You may not
        republish large portions of the content, modify it, or use it for
        commercial purposes without written permission.
      </p>

      <H>No warranty</H>
      <p className="mb-4">
        This site is provided "as is". No guarantee is made regarding
        availability, accuracy, or fitness for a particular purpose. The
        operator is not liable for any indirect, incidental, or consequential
        damage arising from use of the site.
      </p>

      <H>Governing law</H>
      <p>
        These terms are governed by the substantive laws of Switzerland.
        Place of jurisdiction is the registered address of the operator, to
        the extent permitted by law.
      </p>
    </div>
  )
}
