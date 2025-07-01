import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ExploreSuite } from "@/components/explore-suite"
import { HowZazaWorks } from "@/components/how-zaza-works"
import { CTACards } from "@/components/cta-cards"
import { Testimonials } from "@/components/testimonials"
import { CTAStrip } from "@/components/cta-strip"
import { NewsletterTeaser } from "@/components/newsletter-teaser"
import { BlogPreview } from "@/components/blog-preview"
import { FounderSection } from "@/components/founder-section"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ExploreSuite />
      <HowZazaWorks />
      <Testimonials />
      <FounderSection />
      <BlogPreview />
      <CTACards />
      <CTAStrip />
      <NewsletterTeaser />
      <Footer />
      <StickyMobileCTA />
    </div>
  )
}
