import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { BeforeAfter } from '@/components/sections/before-after'
import { DoctorTrust } from '@/components/sections/doctor-trust'
import { Assessment } from '@/components/sections/assessment'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { Reviews } from '@/components/sections/reviews'
import { FAQ } from '@/components/sections/faq'
import { ContactForm } from '@/components/sections/contact-form'
import { SiteFooter } from '@/components/sections/site-footer'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { CursorGlow } from '@/components/ui/cursor-glow'

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <DoctorTrust />
        <Assessment />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  )
}
