import { EmergencyBanner } from "./components/EmergencyBanner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { PremiumServicesCards } from "./components/PremiumServicesCards";
import { WhyUsSection } from "./components/WhyUsSection";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { ReassuranceSection } from "./components/ReassuranceSection";
import { PremiumTestimonials } from "./components/PremiumTestimonials";
import { FAQSection } from "./components/FAQSection";
import { ContactFormSection } from "./components/ContactFormSection";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { LanguageProvider } from "./LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <EmergencyBanner />
        <Header />
        <main>
          <HeroSection />
          <TrustSection />
          <PremiumServicesCards />
          <WhyUsSection />
          <ProcessTimeline />
          <ReassuranceSection />
          <PremiumTestimonials />
          <FAQSection />
          <ContactFormSection />
          <Footer />
        </main>
        <FloatingCTA />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}
