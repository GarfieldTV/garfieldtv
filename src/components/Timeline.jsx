const EVENTS = [
  {
    year: '2021',
    title: 'First staff role',
    text: '[Placeholder] Joined a server as a moderator. Learned the ropes.',
  },
  {
    year: '2022',
    title: 'Promoted to manager',
    text: '[Placeholder] Took on management — staff, events, player experience.',
  },
  {
    year: '2023',
    title: 'Co-ownership',
    text: '[Placeholder] Became co-owner and helped scale the server.',
  },
  {
    year: '2024',
    title: 'Launched my own server',
    text: '[Placeholder] Started my own project — concept, build, community.',
  },
  {
    year: '2025',
    title: 'Streaming on Twitch',
    text: '[Placeholder] Started streaming regularly.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28 md:py-40 hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <div>
            <span className="index-chip mb-5">04 · History</span>
            <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
              Build <span className="text-bmw-mist">log.</span>
            </h2>
          </div>
          <div className="tech-label-dim">
            — 2021 / 2025 · {EVENTS.length} entries
          </div>
        </div>

        {/* Entries: big year + stacked card content */}
        <div className="hairline-t">
          {EVENTS.map((e, i) => (
            <article
              key={e.year + e.title}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 hairline-b items-center transition-colors hover:bg-white/[0.015]"
            >
              {/* Mega year */}
              <div className="md:col-span-4 flex items-center gap-4">
                <span
                  className="display-tight text-[72px] md:text-[104px] lg:text-[128px] font-extralight leading-none text-fg group-hover:text-bmw-blue transition-colors"
                >
                  {e.year}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-6">
                <h3 className="display-tight text-2xl md:text-3xl font-extralight">
                  {e.title}
                </h3>
                <p className="mt-3 text-fg-muted leading-relaxed max-w-2xl font-light">
                  {e.text}
                </p>
              </div>

              {/* Counter */}
              <div className="md:col-span-2 md:text-right tech-label-dim">
                <span>{String(i + 1).padStart(2, '0')} / {String(EVENTS.length).padStart(2, '0')}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
