'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/lib/use-reduced-motion'

// Selector for elements that should enlarge the cursor on hover.
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], [data-slot="button"], input, textarea, select, label, .group'

export function CustomCursor() {
  const prefersReduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  // Raw pointer position.
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // The outer ring trails the pointer with a soft spring.
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 })

  // The inner dot tracks more tightly for a precise, luxe feel.
  const dotX = useSpring(x, { stiffness: 900, damping: 40, mass: 0.3 })
  const dotY = useSpring(y, { stiffness: 900, damping: 40, mass: 0.3 })

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    setEnabled(mq.matches && !prefersReduced)

    const handler = (e: MediaQueryListEvent) =>
      setEnabled(e.matches && !prefersReduced)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [prefersReduced])

  useEffect(() => {
    if (!enabled) return

    // Hide the native cursor while ours is active.
    document.documentElement.classList.add('cursor-none')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as Element | null
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('cursor-none')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[120]">
      {/* Outer ring — 32px, trails smoothly */}
      <motion.span
        className="fixed left-0 top-0 block rounded-full border border-champagne"
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
          marginLeft: -16,
          marginTop: -16,
        }}
        animate={{ scale: hovering ? 1.6 : 1, opacity: hovering ? 1 : 0.7 }}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      />
      {/* Inner dot — 12px, tight tracking */}
      <motion.span
        className="fixed left-0 top-0 block rounded-full bg-champagne"
        style={{
          x: dotX,
          y: dotY,
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
        }}
        animate={{ scale: hovering ? 0.6 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </div>
  )
}
