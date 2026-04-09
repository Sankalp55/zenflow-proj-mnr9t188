import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZenFlow Yoga Studio | Premium Classes, Calm Space',
  description:
    'ZenFlow is a premium yoga studio offering Vinyasa, Power Flow, Foundations, Restorative, Mobility, and Breathwork. View schedule, pricing, meet instructors, and book a class.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <NavbarSticky
          logo="ZenFlow"
          navItems={[
            { label: 'HOME', href: '/' },
            { label: 'CLASSES', href: '/classes' },
            { label: 'PRICING', href: '/pricing' },
            { label: 'ABOUT', href: '/about' },
            { label: 'CONTACT', href: '/contact' },
            { label: 'BOOK', href: '/book' },
          ]}
          ctaLabel="BOOK A CLASS"
          ctaHref="/book"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="ZenFlow"
          description="Move with intention. Breathe with ease. ZenFlow is a premium, minimalist yoga studio designed for strength, mobility, and calm—guided by breath and grounded in warm, earthy design."
          columns={[
            {
              title: 'Classes',
              links: [
                { label: 'Schedule', href: '/classes' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Book a Class', href: '/book' },
              ],
            },
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Visit',
              links: [
                { label: 'Studio Hours', href: '/contact' },
                { label: 'First Visit Info', href: '/classes#faq' },
              ],
            },
          ]}
          copyright="© 2026 ZenFlow. All rights reserved."
        />
      </body>
    </html>
  )
}
