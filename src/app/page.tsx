import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import VideoShowcase from "@/components/sections/video-showcase";
import StatsIndustries from "@/components/sections/stats-industries";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ProvenResults from "@/components/sections/proven-results";
import ProjectsGallery from "@/components/sections/projects-gallery";
import WhyPartner from "@/components/sections/why-partner";
import TeamSection from "@/components/sections/team";
import ClientsLogos from "@/components/sections/clients-logos";
import TestimonialsSection from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";
import ContactInfo from "@/components/sections/contact-info";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VideoShowcase />
      <StatsIndustries />
      <WhyChooseUs />
      <ProvenResults />
      <ProjectsGallery />
      <WhyPartner />
      <TeamSection />
      <ClientsLogos />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
      <ContactInfo />
      <Footer />
    </main>
  );
}