'use client'

import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'

const faqs = [
  {
    question: 'How long does a consultation take?',
    answer:
      'Most consultations take approximately 30 minutes and include a comprehensive review of your goals, concerns, and personalized treatment recommendations.',
  },
  {
    question: 'Are treatments performed by a physician?',
    answer:
      'All treatments are performed or directly overseen by our board-certified medical team to ensure safety, precision, and exceptional results.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'Treatment plans vary depending on your goals and skin condition. During your consultation, we create a personalized roadmap tailored specifically to you.',
  },
  {
    question: 'Is there downtime after treatment?',
    answer:
      'Many treatments involve little to no downtime. Recovery expectations will be discussed in detail during your consultation.',
  },
  {
    question: 'How soon will I see results?',
    answer:
      'Some clients notice improvements immediately, while others experience gradual enhancements over several weeks depending on the treatment selected.',
  },
  {
    question: 'Do you offer customized treatment plans?',
    answer:
      'Yes. Every treatment plan is personalized based on your goals, lifestyle, and unique aesthetic concerns.',
  },
]

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-3 py-3.5 text-left transition-colors hover:text-accent sm:gap-4 sm:py-5"
        aria-expanded={isOpen}
      >
        <span className="min-w-0 flex-1 font-serif text-[1.05rem] leading-snug font-medium text-foreground sm:text-xl">
          {question}
        </span>
        <ChevronDown
          className={`mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 sm:size-6 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-3.5 text-[0.8rem] leading-snug text-muted-foreground sm:pb-5 sm:text-base sm:leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-background px-5 py-14 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Common Questions</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Everything You Need To Know</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-2 max-w-2xl text-[0.7rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Clear answers to help you feel informed and confident before your
              consultation.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal stagger className="mx-auto mt-6 max-w-3xl sm:mt-14">
          <div className="rounded-2xl border border-border bg-secondary p-4 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-8 lg:p-10">
            {faqs.map((faq, index) => (
              <RevealItem key={index} as="div">
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              </RevealItem>
            ))}
          </div>
        </Reveal>

        {/* CTA Card */}
        <Reveal
          stagger
          className="mx-auto mt-6 max-w-2xl rounded-2xl border border-border bg-secondary p-4 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] text-center sm:mt-14 sm:rounded-3xl sm:p-8"
        >
          <RevealItem>
            <h3 className="font-serif text-base font-medium text-foreground sm:text-2xl">
              Still Have Questions?
            </h3>
          </RevealItem>
          <RevealItem className="mt-2 text-[0.7rem] leading-snug text-muted-foreground sm:mt-4 sm:text-base sm:leading-relaxed">
            <p>
              Our team is happy to help you understand your options and guide you
              toward the right treatment plan.
            </p>
          </RevealItem>
          <RevealItem className="mt-4 flex flex-col items-center gap-3 sm:mt-7 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="tel:+14805550197"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-accent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 sm:w-auto sm:px-8 sm:py-4"
            >
              <Phone className="size-4" />
              (480) 555-0197
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] sm:w-auto sm:px-8 sm:py-4"
            >
              Book A Consultation
            </a>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  )
}
