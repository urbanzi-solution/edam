import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoAreWe from "@/components/WhoAreWe";
import HowItWorks from "@/components/HowItWorks";
import OurProjects from "@/components/OurProjects";
import Services from "@/components/Services";
import InspiringProjects from "@/components/InspiringProjects";
import HomeFAQ from "@/components/HomeFAQ";

// ✅ SEO Metadata
export const metadata = {
  title: "Interior Designer in Trivandrum | Home Interiors & 3D Design — EDAM",
  description:
    "Transform your home with expert interior designers in Trivandrum. EDAM offers 3D design, home interiors, renovation and execution. Book a free consultation today.",
  keywords: ["interior designer in Trivandrum"],

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.edamdesignstudio.com/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoAreWe />
      <HowItWorks />
      <OurProjects />
      <Services />
      <InspiringProjects />
      <HomeFAQ />
    </>
  );
}