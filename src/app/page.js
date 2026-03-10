import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoAreWe from "@/components/WhoAreWe";
import HowItWorks from "@/components/HowItWorks";
import OurProjects from "@/components/OurProjects";
import Services from "@/components/Services";
import HomeFAQ from "@/components/HomeFAQ";
import InspiringProjects from "@/components/InspiringProjects";
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
