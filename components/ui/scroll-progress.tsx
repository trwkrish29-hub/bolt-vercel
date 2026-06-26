"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const prefersReduced = useReducedMotion()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[55] h-[2px] w-full origin-left bg-accent"
      style={{ scaleX: prefersReduced ? scrollYProgress : scaleX }}
    />
  )
}
