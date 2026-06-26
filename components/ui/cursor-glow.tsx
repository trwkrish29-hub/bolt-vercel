"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/lib/use-reduced-motion"

export function CursorGlow() {
  const prefersReduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    // Only enable on devices with a fine pointer (desktop/mouse)
    const mq = window.matchMedia("(pointer: fine)")
    setEnabled(mq.matches && !prefersReduced)

    const handler = (e: MediaQueryListEvent) => setEnabled(e.matches && !prefersReduced)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [prefersReduced])

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      if (frame.current !== null) return
      frame.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        frame.current = null
      })
    }

    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("mousemove", onMove)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden lg:block"
      animate={{ x: position.x - 250, y: position.y - 250 }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
    >
      <div
        className="h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  )
}
