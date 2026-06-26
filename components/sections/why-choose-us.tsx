'use client'

import {
  Cpu,
  HeartHandshake,
  Leaf,
  Sparkles,
  Stethoscope,
  UserCheck,
} from 'lucide-react'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'

const trustCards = [
  {
    icon: Stethoscope,
    title: 'Physician-Led Treatments',
    body: 'Care delivered and overseen by a board-certified physician — never delegated.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Consultations',
    body: 'We take the time to understand your goals before recommending anything.',
  },
  {
    icon: Leaf,
    title: 'Natural-Looking Results',
    body: 'Refined, subtle enhancements that always look unmistakably like you.',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    body: 'Modern, proven aesthetic technology for safe and effective outcomes.',
  },
  {
    icon: Sparkles,
    title: '15+ Years Experience',
    body: 'A depth of expertise that informs every recommendation and treatment.',
  },
  {
    icon: UserCheck,
    title: 'Patient-Centered Care',
    body: 'A calm, attentive experience built entirely around your comfort.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Why Lumière</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Luxury Care Backed By Medical Expertise</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-2 max-w-2xl text-[0.7rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              We combine the warmth of a luxury experience with the rigor of
              medical expertise — so you can feel confident in every decision.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal
          stagger
          className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {trustCards.map((card) => {
            const Icon = card.icon
            return (
              <RevealItem
                key={card.title}
                as="article"
                className="rounded-2xl border border-border bg-secondary p-3 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-7"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:size-12 sm:rounded-2xl">
                    <Icon className="size-3.5 sm:size-6" />
                  </span>
                  <h3 className="text-[0.7rem] font-medium leading-tight text-foreground sm:font-serif sm:text-xl">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-2 text-[0.6rem] leading-snug text-muted-foreground sm:mt-2 sm:text-base sm:leading-relaxed">
                  {card.body}
                </p>
              </RevealItem>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
