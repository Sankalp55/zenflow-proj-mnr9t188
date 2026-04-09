import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTAVortex } from '@/components/blocks/CTAVortex'

export default function ClassesPage() {
  return (
    <>
      <HeroSpotlight
        headline="Class schedule"
        subheadline="Choose your practice: strength, mobility, breath, and deep restoration—organized for clarity and ease. Book a spot in seconds, then arrive early and settle in."
        primaryCta={{ label: 'BOOK A SPOT', href: '/book' }}
        secondaryCta={{ label: 'VIEW PRICING', href: '/pricing' }}
      />

      <FeaturesCards3D
        badge="WEEKLY RHYTHM"
        headline="A consistent cadence so your practice sticks."
        subheadline="We keep the structure steady so you can build momentum. Expect familiar anchors (Foundations daily, Restore twice weekly) plus variety for strength and mobility."
        features={[
          { title: 'MONDAY', description: 'Sunrise Vinyasa • Foundations • Power Flow (Morning / Midday / Evening)' },
          { title: 'WEDNESDAY', description: 'Mobility Flow • Power Flow • Restore (Balanced intensity)' },
          { title: 'FRIDAY', description: 'Strength Flow • Breath + Stretch • Candlelight Restore (End-of-week reset)' },
          { title: 'WEEKEND', description: 'Slow Flow • Deep Stretch • Community Class (Longer holds, slower pace)' },
        ]}
      />

      <FeaturesGrid
        badge="CLASS TYPES"
        headline="Pick the vibe that matches your day."
        subheadline="Every class includes options. If you’re not sure where to start, Foundations is the most beginner-friendly on-ramp."
        features={[
          { title: 'VINYASA', description: 'Breath-led flow with creative sequencing and steady heat.' },
          { title: 'POWER FLOW', description: 'Stronger pace with core, stability, and athletic transitions.' },
          { title: 'FOUNDATIONS', description: 'Alignment, cues, and confidence-building—ideal for first-timers.' },
          { title: 'RESTORATIVE', description: 'Long holds, props, and deep downshift for recovery and sleep.' },
          { title: 'MOBILITY', description: 'Hips, shoulders, spine—move better daily with targeted drills.' },
          { title: 'BREATHWORK', description: 'Simple techniques for calm, clarity, and stress resilience.' },
        ]}
      />

      <FeaturesCards3D
        badge="WHAT TO EXPECT"
        headline="Minimal friction—arrive, breathe, move."
        subheadline="We keep the experience simple so you can focus on practice, not logistics."
        features={[
          { title: 'MATS + PROPS', description: 'Mats available; blocks/straps/bolsters included for every class.' },
          { title: 'ARRIVE EARLY', description: '5–10 minutes early helps you settle in and choose props.' },
          { title: 'BEGINNER FRIENDLY', description: 'Options offered in every class—no pressure, no ego.' },
          { title: 'STUDIO ETIQUETTE', description: 'Phones off, voices low, respect the room and each other.' },
        ]}
      />

      <section id="faq" className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="FAQ"
            subheadline="Quick answers for a calm first visit."
            items={[
              {
                question: 'DO I NEED TO BE FLEXIBLE TO START?',
                answer:
                  'No. Flexibility is a result of practice, not a requirement. We offer options and props in every class so you can meet your body where it is.',
              },
              {
                question: 'WHAT IF I’M BRAND NEW?',
                answer:
                  'Start with Foundations or Slow Flow. Let your instructor know you’re new—so we can cue more clearly and offer extra options.',
              },
              {
                question: 'CAN I CANCEL A BOOKING?',
                answer:
                  'Yes. Please cancel at least 2 hours before class to avoid a late fee and to free your spot for others.',
              },
              {
                question: 'DO YOU OFFER WORKSHOPS?',
                answer:
                  'Yes—mobility intensives, inversions, and breathwork sessions are offered monthly. Check announcements in-studio or ask our team.',
              },
            ]}
          />
        </div>
      </section>

      <CTAVortex
        headline="Book your first class—keep it simple."
        description="Choose a class type, pick a time, and we’ll confirm your spot by email."
        ctaLabel="BOOK YOUR FIRST CLASS"
        ctaHref="/book"
      />
    </>
  )
}
