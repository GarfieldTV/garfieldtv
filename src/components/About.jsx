export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Deep navy panel — contrast break from the dark bg */}
        <div className="relative surface-deep bg-hatch overflow-hidden">
          {/* Top label bar */}
          <div className="flex items-center justify-between gap-4 px-6 md:px-12 py-4 border-b border-white/10">
            <span className="index-chip">01 · Profile</span>
            <span className="tech-label-dim hidden sm:block">
              Operator / Manager / Streamer
            </span>
          </div>

          <div className="px-6 md:px-12 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-9 md:col-start-1">
                <h2 className="display text-[44px] sm:text-[64px] md:text-[88px] lg:text-[104px]">
                  The <span className="text-bmw-mist">machine</span>{' '}
                  behind the <span className="text-bmw-blue">gamertag.</span>
                </h2>

                <p className="mt-10 max-w-2xl text-lg md:text-xl text-fg-muted leading-relaxed font-light">
                  <span className="text-fg">[Placeholder]</span> — replace with
                  your personal story: how you got into Minecraft, the servers
                  you're most proud of, why community matters to you, and what
                  you love about streaming.
                </p>
              </div>
            </div>

            {/* Spec sheet */}
            <dl className="mt-20 grid sm:grid-cols-2 gap-x-16 border-t border-white/10">
              {[
                ['Known as', 'GarfieldTV'],
                ['Primary role', 'Owner / Manager'],
                ['Focus', 'Community & Ops'],
                ['Games', 'Minecraft'],
                ['Broadcast', 'Twitch'],
                ['Location', 'Switzerland'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[1fr_auto] gap-4 py-5 border-b border-white/10"
                >
                  <dt className="tech-label-dim self-center">{k}</dt>
                  <dd className="font-light text-fg text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Bottom frame bar */}
          <div className="px-6 md:px-12 py-3 border-t border-white/10 flex items-center justify-between tech-label-dim">
            <span>— BIO / 6 FIELDS</span>
            <span>01 / 06</span>
          </div>
        </div>
      </div>
    </section>
  )
}
