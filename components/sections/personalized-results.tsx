'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  RotateCcw,
  Smile,
  Sparkles,
  Star,
  Sun,
  TrendingUp,
} from 'lucide-react'
import Image from 'next/image'
import type { AssessmentResult } from '@/lib/assessment-data'
import { SectionLabel } from '@/components/ui/section-label'

const EASE = [0.22, 1, 0.36, 1] as const

const benefits = [
  { icon: Sparkles, label: 'Smoother Appearance' },
  { icon: Sun, label: 'Brighter Skin Tone' },
  { icon: Smile, label: 'Improved Confidence' },
  { icon: TrendingUp, label: 'More Youthful Appearance' },
]

const timeline = [
  { icon: CalendarCheck, label: 'Consultation' },
  { icon: ClipboardList, label: 'Personalized Treatment Plan' },
  { icon: Star, label: 'Treatment Session' },
  { icon: Sparkles, label: 'Visible Results' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE },
  },
}

export function PersonalizedResults({
  result,
  onRetake,
}: {
  result: AssessmentResult
  onRetake: () => void
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-[900px]"
    >
      <motion.div variants={item} className="text-center">
        <SectionLabel>Your Personalized Results</SectionLabel>
        <h2 className="mt-4 font-serif text-2xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl">
          Your Personalized Treatment Plan
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:mt-5 sm:text-lg">
          Based on your goals and assessment responses, these treatments are most
          likely to help you achieve natural-looking, long-lasting results.
        </p>
      </motion.div>

      {/* Primary recommendation */}
      <motion.div
        variants={item}
        className="mt-8 rounded-3xl border border-accent/30 bg-secondary p-5 shadow-[0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.08),0_6px_16px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.06)] sm:mt-12 sm:p-10"
      >
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Primary Recommendation
        </span>
        <div className="mt-2 flex flex-col gap-2 sm:mt-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h3 className="font-serif text-2xl font-medium text-foreground sm:text-4xl">
            {result.primary.name}
          </h3>
          <span className="text-sm font-medium text-foreground sm:text-lg">
            {result.primary.price}
          </span>
          <div className="flex shrink-0 flex-row items-baseline gap-1.5 sm:flex-col sm:items-center sm:gap-0">
            <span className="font-serif text-2xl font-semibold text-accent sm:text-4xl">
              {result.match}%
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Match
            </span>
          </div>
        </div>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          {result.primary.explanation}
        </p>
        {result.primary.duration && (
          <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Treatment Duration
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">
                {result.primary.duration}
              </span>
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Recovery Time
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">
                {result.primary.recovery}
              </span>
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Recommended Sessions
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">
                {result.primary.sessions}
              </span>
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Best For
              </span>
              <span className="text-sm font-medium text-foreground sm:text-base">
                {result.primary.bestFor}
              </span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Secondary recommendation */}
      <motion.div
        variants={item}
        className="mt-4 rounded-3xl border border-border bg-secondary p-5 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:mt-5 sm:p-8"
      >
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Recommended Enhancement
        </span>
        <h3 className="mt-2 font-serif text-xl font-medium text-foreground sm:mt-3 sm:text-3xl">
          {result.secondary.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          {result.secondary.explanation}
        </p>
      </motion.div>

      {/* Expected benefits */}
      <motion.div variants={item} className="mt-8 sm:mt-12">
        <h3 className="text-center font-serif text-xl font-medium text-foreground sm:text-2xl">
          Expected Benefits
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-4 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-2xl border border-border bg-secondary p-3 shadow-[0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04)] sm:gap-3 sm:p-5"
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:size-10">
                  <Icon className="size-3.5 sm:size-5" />
                </span>
                <span className="min-w-0 flex-1 text-xs font-medium text-foreground sm:text-sm">
                  {b.label}
                </span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div variants={item} className="mt-8 sm:mt-12">
        <h3 className="text-center font-serif text-xl font-medium text-foreground sm:text-2xl">
          Your Journey
        </h3>
        <ol className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-4 lg:grid-cols-4 lg:gap-3">
          {timeline.map((step, i) => {
            const Icon = step.icon
            return (
              <li
                key={step.label}
                className="flex flex-col gap-2 rounded-2xl border border-border bg-secondary p-3 shadow-[0_0_1px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.04)] sm:gap-3 sm:p-5"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:size-11">
                    <Icon className="size-3.5 sm:size-5" />
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-accent sm:text-xs">
                    Step {i + 1}
                  </span>
                </div>
                <span className="text-xs font-medium text-foreground sm:text-sm">
                  {step.label}
                </span>
              </li>
            )
          })}
        </ol>
      </motion.div>

      {/* Physician note */}
      <motion.div
        variants={item}
        className="mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-secondary p-5 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:mt-12 sm:flex-row sm:items-center sm:gap-5 sm:p-8"
      >
        <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl sm:size-20">
          <Image
            src="/images/dr-sophia-laurent.png"
            alt="Dr. Sophia Laurent"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="font-serif text-base italic leading-relaxed text-foreground sm:text-xl">
            "These recommendations are a starting point. In your consultation,
            we'll refine every detail together to create a plan that feels right
            for you."
          </p>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-3">
            Dr. Sophia Laurent — Medical Director
          </p>
        </div>
      </motion.div>

      {/* Consultation invitation */}
      <motion.div
        variants={item}
        className="mt-8 rounded-3xl bg-primary p-5 text-center text-primary-foreground sm:mt-12 sm:p-10"
      >
        <h3 className="font-serif text-xl font-medium sm:text-3xl">
          Your Personalized Plan Is Ready
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:mt-4 sm:text-base">
          Meet with Dr. Sophia Laurent to review your recommendations, ask
          questions, and create a treatment plan tailored to your goals.
        </p>

        {/* Value stack */}
        <div className="mx-auto mt-6 max-w-sm space-y-2.5 text-left sm:mt-8 sm:space-y-3">
          <div className="flex items-center justify-start gap-3">
            <CheckCircle2 className="size-4 shrink-0 text-accent sm:size-5" aria-hidden="true" />
            <span className="text-sm text-primary-foreground">
              30-Minute Consultation
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircle2 className="size-4 shrink-0 text-accent sm:size-5" aria-hidden="true" />
            <span className="text-sm text-primary-foreground">
              Personalized Treatment Roadmap
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircle2 className="size-4 shrink-0 text-accent sm:size-5" aria-hidden="true" />
            <span className="text-sm text-primary-foreground">
              Transparent Pricing Discussion
            </span>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircle2 className="size-4 shrink-0 text-accent sm:size-5" aria-hidden="true" />
            <span className="text-sm text-primary-foreground">
              No Obligation To Proceed
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-accent px-5 py-3.5 text-sm font-medium text-accent-foreground transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-4"
          >
            Reserve My Consultation
            <ArrowRight className="size-4 shrink-0" />
          </a>
          <button
            type="button"
            onClick={onRetake}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-primary-foreground/30 px-5 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:px-8 sm:py-4"
          >
            <RotateCcw className="size-4 shrink-0" />
            Retake Assessment
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
