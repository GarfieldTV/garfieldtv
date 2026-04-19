import { ArrowUpRight } from 'lucide-react'

const TWITCH_USER = 'YOUR_TWITCH_USERNAME'

export default function Twitch() {
  return (
    <section id="twitch" className="relative py-28 md:py-40 hairline-t">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-20 mb-14 md:mb-20 items-end">
          <div className="md:col-span-7">
            <span className="index-chip mb-5">05 · Broadcast</span>
            <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
              Live from the <br className="hidden md:block" />
              <span className="text-bmw-mist">command chair.</span>
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-10 tech-label-dim leading-loose">
            Minecraft · community nights · building &amp; chatting
          </div>
        </div>

        {/* Monitor panel */}
        <a
          href={`https://twitch.tv/${TWITCH_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative surface overflow-hidden hover:border-bmw-blue/50 transition-colors"
        >
          <div className="relative aspect-[16/8] bg-bmw-navy overflow-hidden">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />

            {/* HUD — top row */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between tech-label">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 bg-bmw-red animate-pulse" />
                Offline
              </span>
              <span className="tech-label-dim">REC · 00:00:00</span>
            </div>

            {/* Corner bracket */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-bmw-blue" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-bmw-blue" />

            {/* HUD — bottom row */}
            <div className="absolute bottom-6 left-6 right-6 tech-label-dim flex justify-between">
              <span>CH 01 · Minecraft</span>
              <span>1080p · 60fps</span>
            </div>

            {/* Center message */}
            <div className="relative h-full flex items-center justify-center px-6">
              <div className="text-center">
                <h3 className="display text-4xl md:text-6xl lg:text-7xl">
                  Catch a <br className="md:hidden" />
                  <span className="text-bmw-blue">stream.</span>
                </h3>
                <p className="mt-6 text-fg-muted max-w-md mx-auto font-light">
                  Minecraft · community nights · building &amp; chatting
                </p>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-5 hairline-t">
            <div className="flex items-center gap-4 min-w-0">
              <span className="block h-6 w-[3px] bg-bmw-blue" />
              <div className="min-w-0">
                <div className="tech-label-dim !text-[10px]">Channel</div>
                <div className="font-light truncate">twitch.tv/{TWITCH_USER}</div>
              </div>
            </div>
            <span className="inline-flex items-center gap-3 tech-label group-hover:text-bmw-blue transition-colors">
              Watch live
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </a>

        <p className="mt-6 tech-label-dim">
          Replace YOUR_TWITCH_USERNAME in src/components/Twitch.jsx
        </p>
      </div>
    </section>
  )
}
