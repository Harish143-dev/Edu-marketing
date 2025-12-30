import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsMarquee from "@/components/PainPointsMarquee";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import PlaygroundSection from "@/components/PlaygroundSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import LargeTextSection from "@/components/LargeTextSection";
import PortfolioSection from "@/components/PortfolioSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyBanner from "@/components/StickyBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyBanner />
      <Navbar />
      <HeroSection />
      <PainPointsMarquee />
      <ProblemSection />
      <ServicesSection />
      <PlaygroundSection />
      <ExpertiseSection />
      <LargeTextSection />
      <PortfolioSection />
      <NewsletterSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
