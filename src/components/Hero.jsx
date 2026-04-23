import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 20%, rgba(69,153,254,0.10), transparent 60%), radial-gradient(ellipse 40% 30% at 10% 80%, rgba(3,30,73,0.5), transparent 70%)',
        }}
      />

      {/* Edge vertical rulers */}
      <div className="absolute left-6 lg:left-10 top-28 bottom-28 w-px bg-white/5 hidden md:block">
        <div className="absolute top-0 h-16 w-full bg-bmw-blue" />
      </div>
      <div className="absolute right-6 lg:right-10 top-28 bottom-28 w-px bg-white/5 hidden md:block" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* HUD meta row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 hairline-b pb-5 mb-14 animate-fade-up">
          <span className="index-chip">Portfolio / 2026</span>
          <span className="tech-label-dim">Developer · Administrator · Streamer</span>
        </div>

        {/* Monumental uppercase headline */}
        <h1 className="display text-[56px] sm:text-[96px] md:text-[140px] lg:text-[176px] xl:text-[200px] animate-fade-up">
          <span className="block">Garfield</span>
          <span className="block text-bmw-mist">TV<span className="text-bmw-blue">.</span></span>
        </h1>

        {/* Subtitle row */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-6 md:gap-10 items-start animate-fade-up">
          <div className="md:col-span-5">
            <p className="text-lg md:text-xl text-fg-muted leading-relaxed font-light">
              Precision-run Minecraft servers. Community as craft.
              Broadcasting live on Twitch.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-wrap gap-3">
            <a href="#servers" className="btn-primary">
              View the work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://twitch.tv/YOUR_TWITCH_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Watch live
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Spec panel */}
        <div className="mt-24 md:mt-32 hairline-t">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { k: 'Years', v: '05+' },
              { k: 'Servers', v: '10+' },
              { k: 'Players', v: '1K+' },
              { k: 'Roles', v: 'Owner / Mgr / Mod' },
            ].map((s, i) => (
              <div
                key={s.k}
                className={`relative py-8 md:py-10 px-4 md:px-6 ${i > 0 ? 'md:hairline-l' : ''} ${i < 2 ? 'hairline-b md:border-b-0' : ''}`}
              >
                <div className="tech-label-dim">{s.k}</div>
                <div className="mt-5 display-tight text-3xl md:text-4xl font-extralight">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
