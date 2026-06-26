'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in seconds before the animation starts. */
  delay?: number
  /** Apply a blur-to-focus reveal in addition to the fade-up. */
  blur?: boolean
  /** Render as a staggered container for child <RevealItem> elements. */
  stagger?: boolean
  as?: 'div' | 'section' | 'span' | 'li' | 'article'
}

const EASE = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  className,
  delay = 0,
  blur = false,
  stagger = false,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  if (stagger) {
    const container: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduced ? 0 : 0.12,
          delayChildren: delay,
        },
      },
    }
    return (
      <MotionTag
        className={className}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-80px' }}
      >
        {children}
      </MotionTag>
    )
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 24,
      filter: blur && !reduced ? 'blur(10px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: EASE, delay },
    },
  }

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  blur = false,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  blur?: boolean
  as?: 'div' | 'li' | 'article' | 'span'
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : 20,
      filter: blur && !reduced ? 'blur(8px)' : 'blur(0px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: EASE },
    },
  }

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  )
}
