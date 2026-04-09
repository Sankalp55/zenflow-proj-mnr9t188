import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <>
      <HeroSpotlight
        headline="Contact ZenFlow"
        subheadline="Questions about classes, memberships, or your first visit? Send a message and we’ll reply within 1 business day."
        primaryCta={{ label: 'BOOK A CLASS', href: '/book' }}
        secondaryCta={{ label: 'VIEW PRICING', href: '/pricing' }}
      />

      <FeaturesCards3D
        badge="STUDIO INFO"
        headline="Reach us quickly—then get back to your day."
        subheadline="For fastest help, email us with your preferred class type and the time you’re aiming for."
        features={[
          { title: 'EMAIL', description: 'hello@zenflow.studio' },
          { title: 'PHONE', description: '(555) 013-2048' },
          { title: 'LOCATION', description: '123 Calm Street, Suite 4B, Your City' },
          { title: 'HOURS', description: 'Mon–Fri 6:00 AM–8:30 PM • Sat–Sun 8:00 AM–6:00 PM' },
        ]}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="Send a message"
            subheadline="We reply within 1 business day."
            contactInfo={[
              { label: 'Email', value: 'hello@zenflow.studio' },
              { label: 'Phone', value: '(555) 013-2048' },
              { label: 'Hours', value: 'Mon–Fri 6:00 AM–8:30 PM • Sat–Sun 8:00 AM–6:00 PM' },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Note: This form sends a client-side message only (no account required). If you don’t hear back,
            email us directly at <span className="font-medium text-foreground">hello@zenflow.studio</span>.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Quick FAQ"
            subheadline="A few common questions before you arrive."
            items={[
              { question: 'IS THERE PARKING?', answer: 'Yes—street parking plus a small lot behind the building.' },
              {
                question: 'DO YOU OFFER PRIVATE SESSIONS?',
                answer: 'Yes. Private yoga and mobility sessions are available by request.',
              },
              { question: 'WHAT SHOULD I WEAR?', answer: 'Comfortable clothing you can move in. Barefoot practice.' },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Your next class is one breath away"
        description="Reserve your spot in under a minute."
        ctaLabel="BOOK NOW"
        ctaHref="/book"
      />
    </>
  )
}
