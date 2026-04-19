const SKILLS = [
  {
    num: '01',
    title: 'Server Administration',
    text: '[Placeholder] Hosting, panels, backups, permissions, day-to-day ops.',
  },
  {
    num: '02',
    title: 'Plugin Configuration',
    text: '[Placeholder] Setting up and tuning plugins for the right gameplay loop.',
  },
  {
    num: '03',
    title: 'Staff & Community',
    text: '[Placeholder] Recruiting, training and leading staff. Healthy vibes.',
  },
  {
    num: '04',
    title: 'Moderation & Support',
    text: '[Placeholder] Rule design, conflict resolution, tickets, player support.',
  },
  {
    num: '05',
    title: 'Streaming & Content',
    text: '[Placeholder] Twitch streams, engagement, shareable moments.',
  },
  {
    num: '06',
    title: 'Problem Solving',
    text: '[Placeholder] Debugging, incident response, uptime when it matters.',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-40 hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20 mb-14 md:mb-20 items-end">
          <div className="md:col-span-9">
            <span className="index-chip mb-5">03 · Capabilities</span>
            <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
              Operational <br className="hidden md:block" />
              <span className="text-bmw-mist">specification.</span>
            </h2>
          </div>
          <div className="md:col-span-3 tech-label-dim">
            06 disciplines<br />running in parallel
          </div>
        </div>

        {/* Two-column grid with oversized outline numbers */}
        <div className="grid md:grid-cols-2 gap-x-12 hairline-t">
          {SKILLS.map((s, i) => (
            <div
              key={s.num}
              className={`relative flex items-start gap-6 md:gap-8 py-10 md:py-14 hairline-b ${i % 2 === 1 ? 'md:hairline-l md:pl-12' : ''}`}
            >
              <span
                className="display-tight text-[88px] md:text-[128px] leading-none text-outline select-none shrink-0 -mt-3"
                aria-hidden="true"
              >
                {s.num}
              </span>
              <div className="flex-1 pt-3">
                <h3 className="display-tight text-2xl md:text-3xl font-extralight">
                  {s.title}
                </h3>
                <p className="mt-4 text-fg-muted leading-relaxed font-light max-w-md">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
