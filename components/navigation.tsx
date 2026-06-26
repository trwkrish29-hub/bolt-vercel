'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:h-[4.5rem] sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-serif text-2xl font-medium tracking-wide text-foreground lg:text-3xl"
        >
          Lumière
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-accent lg:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-6">
          {/* Mobile/tablet: icon link + plain number. Desktop: plain number only, no icon, not clickable. */}
          <a
            href="tel:+14805550197"
            aria-label="Call Lumière Medical Spa"
            title="Call (480) 555-0197"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent sm:size-11 lg:hidden"
          >
            <Phone className="size-4 sm:size-[1.1rem]" />
          </a>
          <span className="text-[0.7rem] tracking-wide text-foreground/70 sm:text-sm lg:text-base">
            (480) 555-0197
          </span>

          <a
            href="#contact"
            className="hidden items-center rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-[1.03] md:inline-flex lg:px-8 lg:py-3.5 lg:text-base lg:ml-4"
          >
            Book Consultation
          </a>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-xl text-foreground md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>

      {/*
        The mobile menu (backdrop + panel) is rendered via a Portal directly
        into document.body — see MobileMenuPortal below. This is intentional:
        this <header> has `transition-all` and, once scrolled, `backdrop-blur-md`.
        Both `transition` and `backdrop-filter` create a new CSS containing
        block, which breaks `position: fixed` for any descendant — making
        fixed children behave like `position: absolute` relative to this
        header instead of the viewport. That was causing the menu to render
        correctly only at the very top of the page and visually "break apart"
        (losing its opaque background, drifting position) the instant the
        user scrolled and backdrop-blur-md activated on the header. Portaling
        the menu out of the header entirely sidesteps this CSS behavior
        completely, regardless of the header's own scroll-driven styling.
      */}
      {mounted &&
        createPortal(
          <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />,
          document.body,
        )}
    </header>
  )
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[55] bg-foreground/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="fixed inset-y-0 right-0 z-[60] isolate flex w-[78%] max-w-[320px] flex-col bg-background px-6 py-7 shadow-2xl opacity-100 md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl font-medium text-foreground">
                Lumière
              </span>
              <button
                type="button"
                className="inline-flex size-11 items-center justify-center rounded-xl text-foreground"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="size-6" />
              </button>
            </div>

            <ul className="mt-12 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-border py-4 font-serif text-2xl text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-auto inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground"
            >
              Book Consultation
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
