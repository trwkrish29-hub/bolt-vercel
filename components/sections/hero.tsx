'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Reveal, RevealItem } from '@/components/ui/reveal'

const socialProof = [
  '4.9★ Average Rating',
  '500+ Reviews',
  '10,000+ Treatments Performed',
  'Trusted By Women Across Arizona',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      {/* Mobile / tablet layout */}
      <div className="px-5 pt-20 pb-6 sm:px-8 sm:pt-28 lg:hidden">
        <div className="mx-auto max-w-[1400px]">
          <Reveal className="text-center">
            <RevealItem
              as="div"
              blur
              className="font-serif text-lg leading-[1.2] font-medium text-balance text-foreground sm:text-6xl"
            >
              <h1>
                Achieve Natural, Confident And Lasting Results With
                Personalized Treatments
              </h1>
            </RevealItem>
          </Reveal>

          <div className="mt-3 grid grid-cols-2 items-stretch gap-3 sm:mt-8 sm:gap-6">
            <Reveal className="flex items-center text-left">
              <RevealItem className="text-[0.85rem] leading-snug text-muted-foreground sm:text-lg sm:leading-relaxed">
                <p>
                  Personalized aesthetic treatments designed by board-certified
                  physician Dr. Sophia Laurent to help you achieve natural,
                  confident, and lasting results.
                </p>
              </RevealItem>
            </Reveal>

            <Reveal blur delay={0.15} className="relative flex justify-end">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary shadow-[0_0_1px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.05)] sm:rounded-3xl">
              <Image
                src="/images/dr-sophia-laurent.png"
                alt="Dr. Sophia Laurent, board-certified aesthetic physician, in her Scottsdale medical spa"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </div>
            </Reveal>
          </div>

          <Reveal stagger className="mt-3 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:gap-3">
            <RevealItem>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-primary px-3 py-2.5 text-[0.7rem] font-medium text-primary-foreground sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm"
              >
                Book Your Consultation
              </motion.a>
            </RevealItem>
            <RevealItem>
              <a
                href="#assessment"
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl border border-accent px-3 py-2.5 text-[0.7rem] font-medium text-foreground transition-colors hover:bg-accent/10 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-sm"
              >
                Take The Skin Assessment
              </a>
            </RevealItem>
          </Reveal>

          <Reveal
            stagger
            className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 sm:pt-6"
          >
            {socialProof.map((item) => (
              <RevealItem
                key={item}
                className="text-[0.65rem] leading-snug tracking-wide text-muted-foreground sm:text-sm"
              >
                {item}
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Desktop layout — contained, rounded photo (not full-bleed) */}
      <div className="hidden lg:flex lg:min-h-screen lg:items-center lg:pt-12 lg:pb-12">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-24 px-8 xl:gap-28 xl:px-12">
          <div className="flex flex-col justify-center flex-1">
            <Reveal stagger className="max-w-3xl">
              <RevealItem
                as="div"
                blur
                className="font-serif text-[2rem] leading-[1.15] font-medium text-balance text-foreground xl:text-[2.5rem]"
              >
                <h1>
                  Achieve Natural, Confident And Lasting Results With
                  Personalized Treatments
                </h1>
              </RevealItem>
              <RevealItem className="mt-8 text-xl leading-relaxed text-muted-foreground">
                <p>
                  Personalized aesthetic treatments designed by board-certified
                  physician Dr.&nbsp;Sophia Laurent to help you achieve natural,
                  confident, and lasting results.
                </p>
              </RevealItem>
              <RevealItem className="mt-10 flex flex-row gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground"
                >
                  Book Your Consultation
                </motion.a>
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border border-accent px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
                >
                  Take The Skin Assessment
                </a>
              </RevealItem>
              <RevealItem className="mt-10 flex flex-nowrap items-center gap-x-8 whitespace-nowrap border-t border-border pt-8">
                {socialProof.map((item) => (
                  <span key={item} className="text-sm tracking-wide text-muted-foreground">
                    {item}
                  </span>
                ))}
              </RevealItem>
            </Reveal>
          </div>

          <Reveal blur delay={0.15} className="relative shrink-0">
            <div className="relative h-[450px] w-[380px] overflow-hidden rounded-3xl shadow-[0_0_1px_rgba(0,0,0,0.05),0_2px_5px_rgba(0,0,0,0.08),0_8px_16px_rgba(0,0,0,0.08),0_16px_32px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.04)]">

              <Image
                src="/images/dr-sophia-laurent.png"
                alt="Dr. Sophia Laurent, board-certified aesthetic physician, in her Scottsdale medical spa"
                fill
                priority
                sizes="380px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
