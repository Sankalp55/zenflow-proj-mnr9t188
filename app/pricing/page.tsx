import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <>
      <HeroSpotlight
        headline="Pricing, simplified"
        subheadline="Premium instruction and a calm space—choose the plan that supports your consistency. No long-term contracts, and you can switch tiers anytime."
        primaryCta={{ label: 'START TODAY', href: '/book' }}
        secondaryCta={{ label: 'SEE CLASSES', href: '/classes' }}
      />

      <PricingTable
        headline="Membership tiers"
        subheadline="Pick what you’ll actually use—consistency wins."
        tiers={[
          {
            name: 'DROP-IN',
            price: '$24',
            period: 'per class',
            features: ['Any scheduled class', 'Mat rental included', 'Easy online booking'],
            ctaLabel: 'BOOK DROP-IN',
            ctaHref: '/book',
          },
          {
            name: 'FLOW (8 CLASSES)',
            price: '$149',
            period: 'per month',
            features: ['8 classes / month', '1 guest pass / month', 'Priority waitlist'],
            ctaLabel: 'CHOOSE FLOW',
            ctaHref: '/book',
            highlighted: true,
          },
          {
            name: 'UNLIMITED',
            price: '$189',
            period: 'per month',
            features: ['Unlimited classes', '2 guest passes / month', '10% off workshops'],
            ctaLabel: 'GO UNLIMITED',
            ctaHref: '/book',
          },
        ]}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Compare plans</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you practice once a week, Flow is usually the sweet spot. If you practice 3+ times weekly,
              Unlimited tends to be the best value and keeps scheduling effortless.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="py-3 px-4 text-sm font-semibold text-muted-foreground">FEATURE</th>
                    <th className="py-3 px-4 text-sm font-semibold">DROP-IN</th>
                    <th className="py-3 px-4 text-sm font-semibold">FLOW (8)</th>
                    <th className="py-3 px-4 text-sm font-semibold">UNLIMITED</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground">CLASSES / MONTH</td>
                    <td className="py-3 px-4 text-sm">Pay as you go</td>
                    <td className="py-3 px-4 text-sm">8</td>
                    <td className="py-3 px-4 text-sm">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground">GUEST PASSES</td>
                    <td className="py-3 px-4 text-sm">—</td>
                    <td className="py-3 px-4 text-sm">1</td>
                    <td className="py-3 px-4 text-sm">2</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground">WORKSHOP DISCOUNT</td>
                    <td className="py-3 px-4 text-sm">—</td>
                    <td className="py-3 px-4 text-sm">—</td>
                    <td className="py-3 px-4 text-sm">10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-muted-foreground">PRIORITY WAITLIST</td>
                    <td className="py-3 px-4 text-sm">—</td>
                    <td className="py-3 px-4 text-sm">Yes</td>
                    <td className="py-3 px-4 text-sm">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-6 py-3 font-semibold shadow-sm hover:opacity-95 transition"
              >
                BOOK A CLASS
              </a>
              <a
                href="/classes"
                className="inline-flex items-center justify-center rounded-xl border px-6 py-3 font-semibold hover:bg-muted transition"
              >
                SEE CLASS TYPES
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeaturesCards3D
        badge="PROGRESS YOU CAN FEEL"
        headline="Real outcomes, built by consistency."
        subheadline="No hype—just a practice that supports your posture, strength, and calm over time."
        features={[
          { title: 'STRONGER CORE', description: 'Stability-focused flows that translate to daily life.' },
          { title: 'OPEN HIPS + SHOULDERS', description: 'Mobility sequences designed for modern bodies.' },
          { title: 'BETTER SLEEP', description: 'Restorative practices that downshift the nervous system.' },
          { title: 'CONSISTENT ROUTINE', description: 'Simple scheduling + supportive coaching.' },
        ]}
      />

      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="Pricing FAQ"
            subheadline="Everything you need to decide with confidence."
            items={[
              { question: 'IS THERE A COMMITMENT?', answer: 'No long-term contracts. Memberships are month-to-month.' },
              {
                question: 'DO UNUSED CLASSES ROLL OVER?',
                answer:
                  'Flow plan classes reset monthly to keep scheduling simple. If you travel often, consider Drop-In or Unlimited.',
              },
              {
                question: 'CAN I FREEZE MY MEMBERSHIP?',
                answer: 'Yes—one freeze per quarter for up to 14 days.',
              },
              {
                question: 'DO YOU OFFER STUDENT OR TEACHER DISCOUNTS?',
                answer:
                  'Yes—limited discounted memberships are available. Contact us for current availability.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="Start with one class. Build from there."
        description="Book a Drop-In today, or choose Flow/Unlimited when you’re ready to commit to a rhythm."
        ctaLabel="BOOK NOW"
        ctaHref="/book"
      />
    </>
  )
}
