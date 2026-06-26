import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { CustomCursor } from "@/components/ui/custom-cursor"
import { Hero } from "@/components/sections/hero"
import { DoctorTrust } from "@/components/sections/doctor-trust"
import { Assessment } from "@/components/sections/assessment"
import { BeforeAfter } from "@/components/sections/before-after"
import { Reviews } from "@/components/sections/reviews"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ContactForm } from "@/components/sections/contact-form"
import { FAQ } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/site-footer"

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <DoctorTrust />
        <Assessment />
        <BeforeAfter />
        <Reviews />
        <Services />
        <WhyChooseUs />
        <ContactForm />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
