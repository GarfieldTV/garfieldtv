import { useState } from 'react'
import Legal from './Legal.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  const [legal, setLegal] = useState({ open: false, tab: 'imprint' })

  const openLegal = (tab) => setLegal({ open: true, tab })
  const closeLegal = () => setLegal((s) => ({ ...s, open: false }))

  return (
    <footer className="relative hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10">
        {/* Top row — brand + nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-5">
          <div className="flex items-center gap-4">
            <span className="block h-5 w-[3px] bg-bmw-blue" />
            <span className="tech-label">
              © {year} · GarfieldTV · All rights reserved
            </span>
          </div>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              onClick={() => openLegal('imprint')}
              className="tech-label-dim hover:text-bmw-blue transition-colors"
            >
              Imprint
            </button>
            <button
              onClick={() => openLegal('privacy')}
              className="tech-label-dim hover:text-bmw-blue transition-colors"
            >
              Privacy
            </button>
            <button
              onClick={() => openLegal('terms')}
              className="tech-label-dim hover:text-bmw-blue transition-colors"
            >
              Terms
            </button>
            <a
              href="#top"
              className="tech-label-dim hover:text-bmw-blue transition-colors"
            >
              ↑ Back to top
            </a>
          </nav>
        </div>

        {/* Bottom row — meta */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 tech-label-dim">
          <span>No tracking · No cookies · No ads</span>
          <span>Built with ❤ by @garfieldtv</span>
        </div>
      </div>

      <Legal open={legal.open} initialTab={legal.tab} onClose={closeLegal} />
    </footer>
  )
}
