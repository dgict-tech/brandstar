import ContactSection from "@/components/contact-section"
import DeveloperSection from "@/components/developer-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PricingSection from "@/components/pricing-section"
import TryItOut from "@/components/try-it-out"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <PricingSection />
      <DeveloperSection />
      <TryItOut />
      <ContactSection />
      <Footer />
    </main>
  )
}
