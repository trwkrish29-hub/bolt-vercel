'use client'

import Image from 'next/image'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'

export function DoctorTrust() {
  return (
    <section
      id="about"
      className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel align="center">Meet Your Physician</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            className="mt-3 font-serif text-xl leading-tight font-medium text-balance text-foreground sm:mt-6 sm:text-4xl lg:text-[2.75rem]"
          >
            <h2>A Personalized Approach To Natural, Beautiful Results</h2>
          </RevealItem>
        </Reveal>

        {/* Consultation room photo */}
        <Reveal blur className="mt-5 sm:mt-10">
          <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl bg-background shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.05)] sm:rounded-3xl lg:mx-auto lg:max-w-[800px]">
            <Image
              src="/images/consultation-room.png"
              alt="Dr. Sophia Laurent's private consultation room at Lumière Medical Spa"
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal>
          <RevealItem className="mx-auto mt-5 max-w-2xl text-center text-[0.7rem] leading-snug text-pretty text-muted-foreground sm:mt-10 sm:text-lg sm:leading-relaxed">
            <p>
              You deserve to look in the mirror and see someone who looks as
              vibrant, confident, and refreshed as they feel inside. That's why
              every treatment begins with understanding your goals, your
              concerns, and what a beautiful result means to you. Together,
              we'll create a personalized plan designed to restore confidence,
              enhance your natural features, and deliver results that look
              effortlessly like you, only more radiant.
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
