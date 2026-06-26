'use client'

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from 'react'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Loader2,
} from 'lucide-react'
import { Reveal, RevealItem } from '@/components/ui/reveal'
import { SectionLabel } from '@/components/ui/section-label'
import { cn } from '@/lib/utils'

const treatmentOptions = [
  'Botox & Wrinkle Relaxers',
  'Dermal Fillers',
  'Laser Skin Rejuvenation',
  'Microneedling',
  'IPL Photofacial',
  'HydraFacial',
  'Not Sure Yet',
]

type Status = 'idle' | 'submitting' | 'success'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [date, setDate] = useState<Date | null>(null)
  const [treatment, setTreatment] = useState('')
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nextErrors: Record<string, boolean> = {
      name: !String(data.get('name') ?? '').trim(),
      phone: !String(data.get('phone') ?? '').trim(),
      email: !String(data.get('email') ?? '').trim(),
      date: !date,
      treatment: !treatment,
    }
    setErrors(nextErrors)
    if (Object.values(nextErrors).some(Boolean)) return

    setStatus('submitting')
    // Frontend-only demo — simulate a network request before showing success.
    setTimeout(() => setStatus('success'), 1100)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary px-5 py-14 sm:scroll-mt-24 sm:px-8 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal stagger className="text-center">
          <RevealItem>
            <SectionLabel>Book A Consultation</SectionLabel>
          </RevealItem>
          <RevealItem
            as="div"
            blur
            className="mt-3 font-serif text-xl font-medium text-balance text-foreground sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            <h2>Let&rsquo;s Start With A Conversation</h2>
          </RevealItem>
          <RevealItem className="mx-auto mt-2 max-w-2xl text-[0.7rem] leading-snug text-pretty text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
            <p>
              Share a few details and Dr. Laurent&rsquo;s team will reach out
              to schedule your personalized consultation.
            </p>
          </RevealItem>
        </Reveal>

        <Reveal blur className="mt-6 sm:mt-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background p-4 shadow-[0_0_1px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-2.5 py-5 text-center sm:gap-4 sm:py-10">
                <span className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent sm:size-14">
                  <Check className="size-5 sm:size-7" />
                </span>
                <h3 className="font-serif text-base font-medium text-foreground sm:text-2xl">
                  Thank You
                </h3>
                <p className="max-w-sm text-[0.7rem] leading-snug text-muted-foreground sm:text-base sm:leading-relaxed">
                  Your request has been received. A member of our care team
                  will contact you within one business day to schedule your
                  consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-6">
                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  <Field label="Full Name" htmlFor="name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      className={inputClass(errors.name)}
                      onChange={() => setErrors((p) => ({ ...p, name: false }))}
                    />
                  </Field>
                  <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(480) 555-0100"
                      className={inputClass(errors.phone)}
                      onChange={() => setErrors((p) => ({ ...p, phone: false }))}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                  <Field label="Email Address" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@email.com"
                      className={inputClass(errors.email)}
                      onChange={() => setErrors((p) => ({ ...p, email: false }))}
                    />
                  </Field>

                  <DatePickerField
                    date={date}
                    open={calendarOpen}
                    error={errors.date}
                    onToggle={() => setCalendarOpen((o) => !o)}
                    onClose={() => setCalendarOpen(false)}
                    onSelect={(d) => {
                      setDate(d)
                      setCalendarOpen(false)
                      setErrors((p) => ({ ...p, date: false }))
                    }}
                  />
                </div>

                <Field label="Preferred Treatment" htmlFor="treatment" error={errors.treatment}>
                  <div className="relative">
                    <select
                      id="treatment"
                      name="treatment"
                      value={treatment}
                      onChange={(e) => {
                        setTreatment(e.target.value)
                        setErrors((p) => ({ ...p, treatment: false }))
                      }}
                      className={cn(inputClass(errors.treatment), 'appearance-none pr-10')}
                    >
                      <option value="" disabled>
                        Select a treatment
                      </option>
                      {treatmentOptions.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 rotate-90 text-muted-foreground sm:right-4 sm:size-4" />
                  </div>
                </Field>

                <Field label="Message (Optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about your goals..."
                    className={cn(inputClass(false), 'resize-none sm:!h-auto')}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group/button mt-1 inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-foreground text-[0.7rem] font-medium text-background transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 disabled:pointer-events-none disabled:opacity-70 sm:mt-2 sm:h-12 sm:gap-2 sm:text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="size-3 animate-spin sm:size-4" />
                      Submitting...
                    </>
                  ) : (
                    'Request My Consultation'
                  )}
                </button>

                <p className="text-center text-[0.6rem] text-muted-foreground sm:text-xs">
                  No pressure. No obligation. Just expert guidance tailored to
                  your goals.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                      Date picker (matches booking modal)                   */
/* -------------------------------------------------------------------------- */

function DatePickerField({
  date,
  open,
  error,
  onToggle,
  onClose,
  onSelect,
}: {
  date: Date | null
  open: boolean
  error?: boolean
  onToggle: () => void
  onClose: () => void
  onSelect: (d: Date) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open, onClose])

  return (
    <div className="flex flex-col gap-1 sm:gap-2" ref={containerRef}>
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.12em]">
        Preferred Date
        {error && <span className="ml-1 text-destructive">*</span>}
      </span>
      <div className="relative">
        <button
          type="button"
          onClick={onToggle}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={cn(
            'flex h-9 w-full items-center justify-between rounded-lg border bg-background px-3 text-[0.7rem] transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 sm:h-11 sm:rounded-xl sm:px-4 sm:text-sm',
            error ? 'border-destructive' : 'border-border focus:border-accent',
            date ? 'text-foreground' : 'text-muted-foreground/60',
          )}
        >
          <span>{date ? formatDate(date) : 'Select a date'}</span>
          <CalendarDays className="size-3.5 text-muted-foreground sm:size-4" />
        </button>

        {open && (
          <div className="absolute left-0 right-0 z-20 mt-2 origin-top rounded-xl border border-border bg-background p-3 shadow-[0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.08),0_6px_16px_rgba(0,0,0,0.08),0_12px_24px_rgba(0,0,0,0.06)] sm:rounded-2xl sm:p-4">
            <Calendar selected={date} onSelect={onSelect} />
            <p className="mt-2 text-center text-[0.6rem] text-muted-foreground sm:mt-3 sm:text-xs">
              Closed Sundays. Past dates unavailable.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function Calendar({
  selected,
  onSelect,
}: {
  selected: Date | null
  onSelect: (d: Date) => void
}) {
  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [view, setView] = useState(() => {
    const base = selected ?? today
    return { year: base.getFullYear(), month: base.getMonth() }
  })

  const firstOfMonth = new Date(view.year, view.month, 1)
  const startWeekday = firstOfMonth.getDay()
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate()

  const cells: (Date | null)[] = []
  for (let i = 0; i < startWeekday; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(view.year, view.month, day))
  }

  const canGoPrev =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth())

  function changeMonth(delta: number) {
    setView((v) => {
      const next = new Date(v.year, v.month + delta, 1)
      return { year: next.getFullYear(), month: next.getMonth() }
    })
  }

  function isDisabled(d: Date) {
    return d < today || d.getDay() === 0
  }

  function isSameDay(a: Date, b: Date | null) {
    return (
      !!b &&
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    )
  }

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between sm:mb-3">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={!canGoPrev}
          aria-label="Previous month"
          className="inline-flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary disabled:pointer-events-none disabled:opacity-30 sm:size-8"
        >
          <ChevronLeft className="size-3 sm:size-4" />
        </button>
        <span className="font-serif text-[0.8rem] font-medium text-foreground sm:text-base">
          {firstOfMonth.toLocaleString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <button
          type="button"
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="inline-flex size-6 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary sm:size-8"
        >
          <ChevronRight className="size-3 sm:size-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
        {WEEKDAYS.map((d) => (
          <span
            key={d}
            className="flex h-6 items-center justify-center text-[0.55rem] font-medium uppercase tracking-wider text-muted-foreground sm:h-8 sm:text-[0.65rem]"
          >
            {d}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`empty-${i}`} />
          const disabled = isDisabled(d)
          const isSelected = isSameDay(d, selected)
          const isToday = isSameDay(d, today)
          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(d)}
              className={cn(
                'flex size-7 items-center justify-center rounded-full text-[0.7rem] transition-colors sm:size-9 sm:text-sm',
                disabled && 'cursor-not-allowed text-muted-foreground/30 line-through',
                !disabled && !isSelected && 'text-foreground hover:bg-accent/15',
                isSelected && 'bg-accent font-medium text-accent-foreground',
                !isSelected && isToday && !disabled && 'ring-1 ring-accent/40',
              )}
            >
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function formatDate(d: Date) {
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

/* -------------------------------------------------------------------------- */
/*                                 Helpers                                    */
/* -------------------------------------------------------------------------- */

function inputClass(error?: boolean) {
  return cn(
    'h-9 w-full rounded-lg border bg-background px-3 text-[0.7rem] text-foreground placeholder:text-muted-foreground/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 sm:h-11 sm:rounded-xl sm:px-4 sm:text-sm',
    error ? 'border-destructive' : 'border-border focus:border-accent',
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[0.6rem] font-medium uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.12em]"
      >
        {label}
        {error && <span className="ml-1 text-destructive">*</span>}
      </label>
      {children}
    </div>
  )
}
