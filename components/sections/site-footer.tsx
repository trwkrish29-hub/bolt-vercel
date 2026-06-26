'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { Reveal, RevealItem } from '@/components/ui/reveal'

const MAP_URL =
  'https://maps.google.com/?q=33.503819235631994,-111.92654493804308'

const hours = [
  { day: 'Monday – Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 3:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Results', href: '#results' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Contact', href: '#contact' },
  { label: 'Book Consultation', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer
      className="bg-foreground px-5 py-14 text-background sm:px-8 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Location intro */}
        <Reveal stagger className="max-w-2xl">
          <RevealItem>
            <span className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Visit Our Clinic
            </span>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-5 font-serif text-3xl font-medium text-balance sm:text-4xl lg:text-5xl"
          >
            <h2>Located In The Heart Of Scottsdale</h2>
          </RevealItem>
          <RevealItem className="mt-5 text-lg leading-relaxed text-background/70">
            <p>
              Our boutique medical spa offers a calm, private setting where every
              detail is designed around your comfort. We welcome you to experience
              personalized aesthetic care in person.
            </p>
          </RevealItem>
        </Reveal>

        {/* Map card */}
        <Reveal blur className="mt-10">
          <div className="overflow-hidden rounded-3xl border border-background/15 bg-background/5 transition-all duration-300 hover:border-accent/50">
            <div className="relative aspect-[16/7] w-full">
              <iframe
                src="https://www.google.com/maps?q=33.503819235631994,-111.92654493804308&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                loading="lazy"
                title="Lumière Medical Spa Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-4 p-7 transition-colors duration-300 hover:bg-background/10 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <MapPin className="size-6" />
                </span>
                <div>
                  <p className="font-serif text-xl font-medium">
                    Scottsdale, Arizona
                  </p>
                  <p className="mt-1 text-sm text-background/70">
                    7250 E Camelback Rd, Suite 220, Scottsdale, AZ 85251
                  </p>
                </div>
              </div>
              <span className="text-sm font-medium text-accent">
                Get Directions →
              </span>
            </a>
          </div>
        </Reveal>

        {/* Columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-background/15 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-medium">
              Lumière Medical Spa
            </span>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              Personalized, physician-led aesthetic care designed to help you look
              as vibrant as you feel.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a
                  href="tel:+14805550197"
                  className="flex items-center gap-3 text-background/80 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0 text-accent" />
                  (480) 555-0197
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lumieremedspa.com"
                  className="flex items-center gap-3 text-background/80 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  hello@lumieremedspa.com
                </a>
              </li>
              <li>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-background/80 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>
                    7250 E Camelback Rd, Suite 220, Scottsdale, AZ 85251
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              <Clock className="size-4" />
              Hours
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between gap-4">
                  <span className="text-background/80">{h.day}</span>
                  <span className="text-background/60 shrink-0">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Quick Links
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Physician reinforcement */}
        <div className="mt-16 flex items-center gap-4 rounded-3xl border border-background/15 bg-background/5 p-6">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl">
            <Image
              src="/images/dr-sophia-laurent.png"
              alt="Dr. Sophia Laurent"
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Dr. Sophia Laurent</p>
            <p className="text-sm text-background/70">Medical Director</p>
            <p className="text-sm text-background/60">
              Board-Certified Aesthetic Physician
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/60 sm:flex-row">
          <p>© 2026 Lumière Medical Spa</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <a href="#" className="transition-colors hover:text-accent">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-accent">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-accent">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
