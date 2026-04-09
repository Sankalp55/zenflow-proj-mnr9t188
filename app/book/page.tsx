import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { ContactForm } from '@/components/blocks/ContactForm'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function BookPage() {
  return (
    <>
      <HeroSpotlight
        headline="Book your class"
        subheadline="Choose a class, pick a time, and reserve your mat. This is a client-side booking request—no account required. We’ll confirm availability by email."
        primaryCta={{ label: 'SUBMIT BOOKING', href: '/book#booking-form' }}
        secondaryCta={{ label: 'VIEW SCHEDULE', href: '/classes' }}
      />

      <FeaturesCards3D
        badge="HOW BOOKING WORKS"
        headline="Simple, fast, and calm."
        subheadline="Submit your request, then we’ll confirm your spot. If your first choice is full, we’ll offer the closest match."
        features={[
          { title: '1) PICK A CLASS', description: 'Choose the style that matches your energy today.' },
          { title: '2) SELECT A TIME', description: 'We’ll confirm availability by email.' },
          { title: '3) ARRIVE EARLY', description: 'Come 5–10 minutes early to settle in.' },
          { title: '4) FLOW', description: 'Breathe, move, and leave feeling better.' },
        ]}
      />

      <section id="booking-form" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Booking form"
            subheadline="Submit your request and we’ll confirm your spot."
            contactInfo={[
              { label: 'Confirmation', value: 'We reply within 1 business day' },
              { label: 'Email', value: 'hello@zenflow.studio' },
            ]}
          />
          <div className="mt-8 rounded-xl border bg-muted p-6">
            <h3 className="text-lg font-semibold">To book faster</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              In your message, include: class type (Vinyasa / Power Flow / Foundations / Restorative / Mobility /
              Breathwork), preferred date, preferred time (6:30 AM, 9:00 AM, 12:15 PM, 5:45 PM, or 7:15 PM), and any
              injuries or goals. We’ll confirm and share arrival details.
            </p>
          </div>
        </div>
      </section>

      <FeaturesCards3D
        badge="POLICIES"
        headline="Clear expectations keep the studio calm."
        subheadline="A few simple guidelines help everyone settle in and get the most out of class."
        features={[
          { title: 'CANCELLATIONS', description: 'Cancel at least 2 hours before class to avoid a late fee.' },
          { title: 'WAITLIST', description: 'If a class is full, join the waitlist—spots often open up.' },
          { title: 'LATE ARRIVAL', description: 'Doors close at class start to protect the experience.' },
          { title: 'FIRST VISIT', description: 'Let us know you’re new—we’ll help you choose the right class.' },
        ]}
      />

      <CTAVortex
        headline="Want a better value?"
        description="Memberships make consistency easier—compare plans in seconds."
        ctaLabel="VIEW PRICING"
        ctaHref="/pricing"
      />
    </>
  )
}
