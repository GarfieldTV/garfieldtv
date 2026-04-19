import { ArrowUpRight } from 'lucide-react'

const CONTACTS = [
  {
    label: 'Twitch',
    handle: '@YOUR_TWITCH_USERNAME',
    href: 'https://twitch.tv/YOUR_TWITCH_USERNAME',
  },
  {
    label: 'Discord',
    handle: '@YOUR_DISCORD_USERNAME',
    href: 'https://discord.com/users/YOUR_DISCORD_ID',
  },
  {
    label: 'YouTube',
    handle: '@YOUR_CHANNEL',
    href: 'https://youtube.com/@YOUR_CHANNEL',
  },
  {
    label: 'Email',
    handle: 'your@email.com',
    href: 'mailto:your@email.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 hairline-t overflow-hidden">
      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 20% 60%, rgba(69,153,254,0.10), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <span className="index-chip">06 · Enquire</span>
          <span className="tech-label-dim">Reply within 48h</span>
        </div>

        {/* Huge statement + side info */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-8">
            <h2 className="display text-[64px] sm:text-[104px] md:text-[144px] lg:text-[184px]">
              <span className="block">Let's</span>
              <span className="block text-bmw-mist">
                build<span className="text-bmw-blue">.</span>
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 md:pt-10">
            <p className="text-lg md:text-xl text-fg-muted leading-relaxed font-light max-w-md">
              Looking for a manager, a collaborator, or just want to drop by
              chat? Select a channel.
            </p>
          </div>
        </div>

        {/* Contact rows — enlarged, hover slides the handle in */}
        <ul className="mt-20 hairline-t">
          {CONTACTS.map((c, i) => (
            <li key={c.label} className="hairline-b">
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[60px_110px_1fr_auto] md:grid-cols-[80px_180px_1fr_auto] items-center gap-6 py-6 md:py-8 transition-colors hover:bg-white/[0.02]"
              >
                <span className="tech-label-dim">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="tech-label-dim">{c.label}</span>
                <span className="display-tight text-2xl md:text-4xl lg:text-5xl font-extralight truncate group-hover:text-bmw-blue group-hover:translate-x-2 transition-all duration-300">
                  {c.handle}
                </span>
                <span className="shrink-0 inline-flex items-center justify-center h-11 w-11 border border-white/15 text-fg-muted group-hover:bg-bmw-blue group-hover:text-bg group-hover:border-bmw-blue transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 tech-label-dim">
          Swap YOUR_* placeholders in src/components/Contact.jsx
        </p>
      </div>
    </section>
  )
}
