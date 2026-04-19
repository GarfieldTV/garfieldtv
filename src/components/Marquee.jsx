const ROW_A = [
  'Server Operations',
  'Community Design',
  'Live Streaming',
  'Moderation',
  'Custom Plugins',
  'Events',
  'Staff Leadership',
]

const ROW_B = [
  'Minecraft',
  'Twitch',
  'Discord',
  'YouTube',
  'Survival',
  'SMP',
  'Minigames',
  'Network',
]

function Row({ items, reverse = false, size = 'md' }) {
  const textSize = size === 'lg'
    ? 'text-3xl md:text-5xl lg:text-6xl'
    : 'text-xl md:text-2xl lg:text-3xl'
  const weight = size === 'lg' ? 'font-extralight' : 'font-light'
  const color = size === 'lg' ? 'text-fg' : 'text-fg-muted'
  return (
    <div
      className="marquee-track"
      style={{
        animation: `marquee ${size === 'lg' ? '55s' : '40s'} linear infinite`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      {[...items, ...items].map((w, i) => (
        <span key={i} className="flex items-center shrink-0 pr-12">
          <span className={`display ${textSize} ${weight} ${color}`}>
            {w}
          </span>
          <span className="ml-12 h-[6px] w-[6px] bg-bmw-blue" />
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="relative hairline-t hairline-b bg-bg-elev/40 overflow-hidden">
      <div
        className="py-6 md:py-8"
        style={{
          maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <Row items={ROW_A} size="lg" />
        <div className="h-px bg-white/5 my-6 md:my-8" />
        <Row items={ROW_B} reverse size="md" />
      </div>
    </section>
  )
}
