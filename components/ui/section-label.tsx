import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center'
}

/** Uppercase champagne eyebrow label used above section headlines. */
export function SectionLabel({
  children,
  className,
  align = 'center',
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-2 sm:gap-3',
        align === 'center' ? 'justify-center' : 'justify-start',
        className,
      )}
    >
      <span className="h-px w-6 shrink-0 bg-accent sm:w-12" aria-hidden="true" />
      <span className="min-w-0 text-sm font-medium uppercase tracking-[0.14em] text-accent sm:text-lg sm:tracking-[0.22em]">
        {children}
      </span>
      <span className="h-px w-6 shrink-0 bg-accent sm:w-12" aria-hidden="true" />
    </div>
  )
}
