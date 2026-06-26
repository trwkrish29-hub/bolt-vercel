import type { LucideIcon } from 'lucide-react'
import {
  Droplets,
  Sparkles,
  Sun,
  Syringe,
  Waves,
  Zap,
} from 'lucide-react'

export interface Service {
  id: string
  name: string
  icon: LucideIcon
  description: string
  benefits: string
  downtime: string
  candidate: string
}

export const services: Service[] = [
  {
    id: 'botox',
    name: 'Botox & Wrinkle Relaxers',
    icon: Syringe,
    description:
      'Soften fine lines and expression wrinkles while preserving your natural, expressive look.',
    benefits: 'Smoother forehead, softened frown lines and crow’s feet.',
    downtime: 'None — return to your day immediately.',
    candidate: 'Anyone seeking subtle prevention or correction of fine lines.',
  },
  {
    id: 'fillers',
    name: 'Dermal Fillers',
    icon: Droplets,
    description:
      'Restore lost volume and refine facial balance for a refreshed, naturally lifted appearance.',
    benefits: 'Restored cheek volume, balanced contours, hydrated lips.',
    downtime: 'Minimal — mild swelling that settles within days.',
    candidate: 'Those noticing volume loss or seeking gentle definition.',
  },
  {
    id: 'laser',
    name: 'Laser Skin Rejuvenation',
    icon: Zap,
    description:
      'Improve tone, texture, and overall skin quality with precision laser technology.',
    benefits: 'Refined texture, reduced discoloration, renewed radiance.',
    downtime: 'A few days of mild redness depending on intensity.',
    candidate: 'Skin showing sun damage, uneven tone, or texture concerns.',
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    icon: Sparkles,
    description:
      'Stimulate your skin’s natural collagen to smooth texture and improve firmness.',
    benefits: 'Smoother texture, softened scarring, improved firmness.',
    downtime: 'Light redness for 24–48 hours.',
    candidate: 'Those addressing texture, fine lines, or acne scarring.',
  },
  {
    id: 'ipl',
    name: 'IPL Photofacial',
    icon: Sun,
    description:
      'Reduce the appearance of sun damage and reveal a brighter, more even complexion.',
    benefits: 'Reduced sun spots, more even tone, brighter complexion.',
    downtime: 'Minimal — spots may darken briefly before fading.',
    candidate: 'Skin with sun damage, redness, or uneven pigmentation.',
  },
  {
    id: 'hydrafacial',
    name: 'HydraFacial',
    icon: Waves,
    description:
      'Deeply cleanse, exfoliate, and hydrate for an instant, luminous glow.',
    benefits: 'Deep hydration, refined pores, immediate radiance.',
    downtime: 'None — glowing skin right away.',
    candidate: 'Anyone wanting healthy, hydrated, refreshed skin.',
  },
]
