'use client'

import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'

const highlights = [
  'Smoother Skin Texture',
  'More Even Skin Tone',
  'Refreshed Appearance',
]

export function BeforeAfter() {
  return (
    <section id="results" className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Real Results</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Subtle Enhancements. Meaningful Results.</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-3 max-w-2xl text-[0.7rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Our goal is never to change how you look — it's to enhance your
              natural beauty so you look refreshed, rested, and confidently
              yourself.
            </p>
          </RevealItem>
        </Reveal>

        <div className="mt-7 grid items-center gap-5 sm:mt-14 sm:gap-10 lg:grid-cols-[55fr_45fr] lg:gap-14">
          <Reveal blur>
            <BeforeAfterSlider />
            <p className="mt-2 text-center text-[0.65rem] text-muted-foreground sm:mt-3 sm:text-sm">
              Drag the handle to compare
            </p>
          </Reveal>

          <Reveal stagger>
            {/* Case study card and highlights side by side on mobile, matched height */}
            <div className="flex items-stretch gap-2.5 sm:flex-col sm:gap-4">
              <RevealItem className="flex-1 rounded-2xl border border-border bg-background p-3 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:flex-none sm:rounded-3xl sm:p-8">
                <span className="text-[0.55rem] font-medium uppercase tracking-[0.1em] text-accent sm:text-xs sm:tracking-[0.18em]">
                  Featured Case Study
                </span>
                <dl className="mt-2.5 grid grid-cols-1 gap-y-2 sm:mt-5 sm:grid-cols-2 sm:gap-y-5">
                  <div>
                    <dt className="text-[0.6rem] text-muted-foreground sm:text-sm">
                      Patient
                    </dt>
                    <dd className="mt-0.5 text-[0.65rem] font-medium text-foreground sm:mt-1 sm:text-base">
                      Female, Age 47
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] text-muted-foreground sm:text-sm">
                      Treatment
                    </dt>
                    <dd className="mt-0.5 text-[0.65rem] font-medium text-foreground sm:mt-1 sm:text-base">
                      Combination Facial Rejuvenation
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] text-muted-foreground sm:text-sm">
                      Timeframe
                    </dt>
                    <dd className="mt-0.5 text-[0.65rem] font-medium text-foreground sm:mt-1 sm:text-base">
                      12 Weeks
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.6rem] text-muted-foreground sm:text-sm">
                      Goal
                    </dt>
                    <dd className="mt-0.5 text-[0.65rem] font-medium text-foreground sm:mt-1 sm:text-base">
                      Natural, refreshed look
                    </dd>
                  </div>
                </dl>
              </RevealItem>

              <RevealItem className="flex flex-1 flex-col gap-1.5 sm:flex-none sm:gap-3">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="flex flex-1 items-center gap-1.5 rounded-xl border border-border bg-background px-2.5 py-2 shadow-[0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04)] sm:flex-none sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-accent sm:size-2"
                      aria-hidden="true"
                    />
                    <span className="text-[0.6rem] font-medium leading-snug text-foreground sm:text-base">
                      {h}
                    </span>
                  </div>
                ))}
              </RevealItem>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
