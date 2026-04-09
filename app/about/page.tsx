import type { ReactNode } from 'react'
import { AboutHero } from '@/components/blocks/AboutHero'

// Local icon placeholders to satisfy the `Feature` type requirement.
const DotIcon = (): ReactNode => null

export default function AboutPage() {
  return (
    <main>
      <AboutHero
        headline="Movement that lasts."
        subheadline="We teach what works: breath-led pacing, alignment you can trust, and programming that supports longevity."
        features={[
          {
            icon: <DotIcon />,
            title: 'BREATH-LED',
            description:
              'We teach pacing and breath so movement feels grounded—especially on busy days when your nervous system needs a reset.',
          },
          {
            icon: <DotIcon />,
            title: 'ALIGNMENT YOU CAN TRUST',
            description:
              'Clear cues and smart progressions so you feel stable, strong, and confident—without guessing.',
          },
          {
            icon: <DotIcon />,
            title: 'LONGEVITY-FIRST',
            description:
              'Training that supports your joints, your energy, and your life—so you can keep showing up for what matters.',
          },
        ]}
      />
    </main>
  )
}
