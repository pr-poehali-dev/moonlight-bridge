import HeroBackground from "@/components/HeroBackground"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import RestorationSection from "@/components/RestorationSection"
import PricingSection from "@/components/PricingSection"

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <RestorationSection />
      <PricingSection />
    </div>
  )
}