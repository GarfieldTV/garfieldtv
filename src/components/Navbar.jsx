import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#servers', label: 'Work' },
  { href: '#skills', label: 'Capabilities' },
  { href: '#timeline', label: 'History' },
  { href: '#twitch', label: 'Live' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-bg/85 backdrop-blur-xl hairline-b' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Monogram: single vertical blue bar + wordmark */}
        <a href="#top" className="flex items-center gap-3 group">
          <span className="block h-5 w-[3px] bg-bmw-blue group-hover:h-6 transition-all duration-200" />
          <span className="font-light tracking-[0.18em] text-[13px] uppercase">
            Garfield<span className="font-normal">TV</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-0">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 tech-label hover:text-bmw-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <span className="flex items-center gap-2 tech-label-dim">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-bmw-blue opacity-60 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-bmw-blue" />
            </span>
            Available
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/25 hover:border-bmw-blue hover:text-bmw-blue transition-colors tech-label !text-[11px]"
          >
            Enquire
          </a>
        </div>

        <button
          className="md:hidden p-2 border border-white/15 text-fg"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl hairline-t">
          <ul className="px-6 py-4 flex flex-col gap-0">
            {LINKS.map((link) => (
              <li key={link.href} className="hairline-b">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-1 py-4 tech-label hover:text-bmw-blue transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Enquire
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
