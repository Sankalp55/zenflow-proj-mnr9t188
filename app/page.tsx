import { HeroAurora } from '@/components/blocks/HeroAurora'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { ContactForm } from '@/components/blocks/ContactForm'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function HomePage() {
  return (
    <>
      <HeroAurora
        badge="ZENFLOW YOGA STUDIO"
        headline="Move with intention. Breathe with ease."
        subheadline="A premium, minimalist sanctuary for strength, mobility, and calm—guided by breath and grounded in warm, earthy design. Build a practice that feels clear, modern, and sustainable."
        primaryCta={{ label: 'BOOK A CLASS', href: '/book' }}
        secondaryCta={{ label: 'VIEW SCHEDULE', href: '/classes' }}
      />

      <FeaturesCards3D
        badge="TODAY’S FLOW"
        headline="A clear, calming schedule—find your pace."
        subheadline="From sunrise heat to evening downshift, our daily rhythm is designed to help you show up consistently without overthinking it."
        features={[
          {
            title: 'SUNRISE VINYASA',
            description:
              'Energizing flow to start the day with heat and focus. Mon–Fri • 6:30 AM • 45 min.',
          },
          {
            title: 'FOUNDATIONS',
            description:
              'Alignment-first practice for beginners and returning yogis. Daily • 9:00 AM • 60 min.',
          },
          {
            title: 'POWER FLOW',
            description:
              'Strength + sweat with mindful transitions and core work. Mon/Wed/Fri • 12:15 PM • 50 min.',
          },
          {
            title: 'RESTORE + SOUND',
            description:
              'Deep release with long holds and a soft soundscape. Tue/Thu • 7:15 PM • 60 min.',
          },
        ]}
      />

      <FeaturesGrid
        badge="INSTRUCTORS, NOT INFLUENCERS"
        headline="Experienced teachers with a calm, modern approach."
        subheadline="You’ll get precise cues, smart progressions, and genuine care—so you can build strength, mobility, and steadiness without the noise."
        features={[
          {
            title: 'MAYA RIVERA',
            description: 'Vinyasa + mobility focus. Clear cues, strong sequencing. RYT-500 • 10+ years.',
          },
          {
            title: 'JONAH PARK',
            description:
              'Power flow + strength integration for resilient bodies. Strength Coach • RYT-200.',
          },
          {
            title: 'ELENA SANTOS',
            description:
              'Restorative + breathwork for a nervous-system downshift. Yoga Therapy • Sound.',
          },
          {
            title: 'AISHA KHAN',
            description:
              'Foundations + alignment for beginner-friendly confidence. RYT-200 • Anatomy.',
          },
          {
            title: 'Technique-first teaching',
            description:
              'We prioritize safe alignment, smart load, and options—so your practice supports real life.',
          },
          {
            title: 'Consistency over intensity',
            description:
              'Progress comes from repeatable routines. Our programming helps you stay steady week to week.',
          },
        ]}
      />

      <PricingTable
        headline="Memberships that fit your rhythm"
        subheadline="Transparent plans. No pressure. Upgrade anytime—choose what you’ll actually use."
        tiers={[
          {
            name: 'DROP-IN',
            price: '$24',
            period: 'per class',
            features: ['Any class on the schedule', 'Mat rental included', 'Cancel up to 2 hours before'],
            ctaLabel: 'BOOK DROP-IN',
            ctaHref: '/book',
          },
          {
            name: 'FLOW (8 CLASSES)',
            price: '$149',
            period: 'per month',
            features: ['8 classes / month', '1 guest pass / month', 'Priority waitlist'],
            ctaLabel: 'CHOOSE FLOW',
            ctaHref: '/pricing',
            highlighted: true,
          },
          {
            name: 'UNLIMITED',
            price: '$189',
            period: 'per month',
            features: ['Unlimited classes', '2 guest passes / month', '10% off workshops'],
            ctaLabel: 'GO UNLIMITED',
            ctaHref: '/pricing',
          },
        ]}
      />

      <FeaturesCards3D
        badge="PROGRESS YOU CAN FEEL"
        headline="Not before/after hype—real, sustainable change."
        subheadline="ZenFlow focuses on strength, posture, and calm that show up in your day: how you sit, sleep, breathe, and move."
        features={[
          { title: 'STRONGER CORE', description: 'Stability-focused flows that translate to daily life and sport.' },
          { title: 'OPEN HIPS + SHOULDERS', description: 'Mobility sequences designed for modern bodies and desk posture.' },
          { title: 'BETTER SLEEP', description: 'Restorative practices that downshift the nervous system.' },
          { title: 'CONSISTENT ROUTINE', description: 'Simple scheduling + supportive coaching to help it stick.' },
        ]}
      />

      <TestimonialsAnimated
        headline="What members feel"
        subheadline="Real stories—more calm, more strength, more consistency."
        testimonials={[
          {
            quote:
              'ZenFlow feels premium without being intimidating. The cues are so clear and the space is beautiful.',
            name: 'Sam T.',
            role: 'Member • 6 months',
          },
          {
            quote:
              'Power Flow is the perfect mix of strength and mindfulness. I’m noticeably stronger and less stressed.',
            name: 'Jordan L.',
            role: 'Member • Unlimited',
          },
          {
            quote:
              'Restore + Sound is my weekly reset. I sleep better and my shoulders finally relaxed.',
            name: 'Alyssa K.',
            role: 'Member • Flow Plan',
          },
        ]}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to flow?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Book your first class or ask a question—our team replies within 1 business day. If you’re new,
              tell us what you want (strength, mobility, stress relief) and we’ll recommend the best class to start.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <dt className="text-sm font-semibold">STUDIO</dt>
                <dd className="mt-1 text-muted-foreground">ZenFlow Yoga Studio</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">EMAIL</dt>
                <dd className="mt-1 text-muted-foreground">hello@zenflow.studio</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">PHONE</dt>
                <dd className="mt-1 text-muted-foreground">(555) 013-2048</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold">HOURS</dt>
                <dd className="mt-1 text-muted-foreground">
                  Mon–Fri 6:00 AM–8:30 PM • Sat–Sun 8:00 AM–6:00 PM
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-sm hover:opacity-95 transition"
              >
                BOOK NOW
              </a>
            </div>
          </div>

          <ContactForm
            headline="Send a message"
            subheadline="Tell us what you’re looking for and we’ll respond within 1 business day."
            contactInfo={[
              { label: 'Email', value: 'hello@zenflow.studio' },
              { label: 'Phone', value: '(555) 013-2048' },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Your next class is one breath away."
        description="Reserve your spot in under a minute—choose a class, pick a time, and we’ll confirm by email."
        ctaLabel="BOOK A CLASS"
        ctaHref="/book"
      />
    </>
  )
}
