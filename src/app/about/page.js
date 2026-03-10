import Navbar from "@/components/Navbar";
import AboutHero from "./AboutHero";
import InspiringProjects from "@/components/InspiringProjects";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import IntroSection from "@/components/IntroSection";
import ContactCTA from "@/components/ContactCTA";
import AboutFAQ from "@/components/AboutFAQ";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <InspiringProjects />
      <ServicesGrid />
      <StatsSection/>
      <IntroSection />
      <ContactCTA />
      <AboutFAQ />
    </>
  );
}
