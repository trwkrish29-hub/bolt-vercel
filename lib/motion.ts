import type { Variants } from 'framer-motion'

/** Shared luxury easing curve used across the site's motion system. */
export const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Standard fade-up reveal used for section intros and standalone elements
 * that aren't part of a <Reveal> stagger group.
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

/**
 * Shared viewport config so elements animate into view once, slightly
 * before they're fully on screen — matches the rest of the site's reveals.
 */
export const viewportOnce = { once: true, margin: '-80px' } as const
