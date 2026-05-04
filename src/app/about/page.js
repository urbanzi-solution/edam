import Navbar from "@/components/Navbar";
import AboutHero from "./AboutHero";
import InspiringProjects from "@/components/InspiringProjects";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import IntroSection from "@/components/IntroSection";
import ContactCTA from "@/components/ContactCTA";
import AboutFAQ from "@/components/AboutFAQ";

// ✅ SEO Metadata
export const metadata = {
  title: "About EDAM | Interior Design Company in Trivandrum, Kerala",
  description:
    "Learn about EDAM, a trusted interior design company in Trivandrum. Meet our designers, explore our process, and see how we create functional modern spaces.",
  keywords: ["interior design company in Trivandrum"],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.edamdesignstudio.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <InspiringProjects />
      <ServicesGrid />
      <StatsSection />
      <IntroSection />
      <ContactCTA />
      <AboutFAQ />
    </>
  );
}