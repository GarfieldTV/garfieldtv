import { ArrowUpRight } from 'lucide-react'

const SERVERS = [
  {
    index: '01',
    name: 'Server Name #1',
    role: 'Owner',
    period: '2024 — present',
    players: '500+',
    tags: ['Survival', 'Custom Plugins'],
    description:
      '[Placeholder] Featured project. Describe what makes this one special — the concept, what you built, and what you own.',
    featured: true,
  },
  {
    index: '02',
    name: 'Server Name #2',
    role: 'Manager',
    period: '2023 — 2024',
    players: '1K+',
    tags: ['SMP', 'Events'],
    description:
      '[Placeholder] Role, achievements, community growth, events you ran.',
  },
  {
    index: '03',
    name: 'Server Name #3',
    role: 'Co-Owner',
    period: '2022 — 2023',
    players: '300+',
    tags: ['Network', 'Minigames'],
    description:
      '[Placeholder] Talk about the network, game modes, and what you delivered.',
  },
  {
    index: '04',
    name: 'Server Name #4',
    role: 'Moderator',
    period: '2021 — 2022',
    players: '200+',
    tags: ['Faction', 'Staff'],
    description:
      '[Placeholder] Early moderation experience — rules, tickets, community.',
  },
]

function FeaturedCard({ srv }) {
  return (
    <a
      href="#"
      className="group relative block surface p-8 md:p-12 h-full transition-colors duration-300 hover:border-bmw-blue/50"
    >
      <div className="corner-marks absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-center justify-between">
        <span className="tech-label-dim">— FEATURED / {srv.index}</span>
        <span className="shrink-0 inline-flex items-center justify-center h-10 w-10 border border-white/15 text-fg-muted group-hover:bg-bmw-blue group-hover:text-bg group-hover:border-bmw-blue transition-colors">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-16 md:mt-28">
        <div className="tech-label-dim">{srv.role} · {srv.period}</div>
        <h3 className="mt-5 display-tight text-4xl md:text-6xl lg:text-7xl">
          {srv.name}
        </h3>
      </div>

      <p className="mt-8 max-w-md text-lg text-fg-muted leading-relaxed font-light">
        {srv.description}
      </p>

      <div className="mt-16 grid grid-cols-2 gap-6 hairline-t pt-6">
        <div>
          <div className="tech-label-dim">Players</div>
          <div className="mt-2 display-tight text-2xl md:text-3xl font-extralight">
            {srv.players}
          </div>
        </div>
        <div className="text-right">
          <div className="tech-label-dim">Tags</div>
          <div className="mt-2 flex flex-wrap justify-end gap-2">
            {srv.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 tech-label-dim !text-[10px] border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

function CompactCard({ srv }) {
  return (
    <a
      href="#"
      className="group relative block surface p-6 md:p-7 transition-colors duration-300 hover:border-bmw-blue/50"
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-start gap-5">
        <span className="tech-label-dim pt-1">{srv.index}</span>
        <div className="min-w-0">
          <div className="tech-label-dim">
            {srv.role} · {srv.period}
          </div>
          <h3 className="mt-3 display-tight text-xl md:text-2xl truncate">
            {srv.name}
          </h3>
          <p className="mt-3 text-[15px] text-fg-muted leading-relaxed font-light line-clamp-2">
            {srv.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {srv.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 tech-label-dim !text-[10px] border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="tech-label-dim">Players</div>
          <div className="mt-1 display-tight font-extralight text-lg">
            {srv.players}
          </div>
          <span className="mt-4 inline-flex items-center justify-center h-8 w-8 border border-white/15 text-fg-muted group-hover:bg-bmw-blue group-hover:text-bg group-hover:border-bmw-blue transition-colors">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  )
}

export default function Servers() {
  const [featured, ...rest] = SERVERS
  return (
    <section id="servers" className="relative py-28 md:py-40 hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20 mb-14 md:mb-20 items-end">
          <div className="md:col-span-5">
            <span className="index-chip mb-5">02 · Selected Work</span>
            <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
              Engineered <br className="hidden md:block" />
              <span className="text-bmw-mist">communities.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 tech-label-dim leading-loose">
            {String(SERVERS.length).padStart(2, '0')} projects featured.
            <br />
            Each one designed, operated or grown end-to-end.
          </div>
        </div>

        {/* Asymmetric layout: featured vertical left + 3 stacked right */}
        <div className="grid md:grid-cols-5 gap-5 md:gap-6">
          <div className="md:col-span-3">
            <FeaturedCard srv={featured} />
          </div>
          <div className="md:col-span-2 flex flex-col gap-5 md:gap-6">
            {rest.map((srv) => (
              <CompactCard key={srv.name} srv={srv} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
