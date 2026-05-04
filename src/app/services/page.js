import ServicesHero from "@/components/ServicesHero";
import ServiceExpertise from "@/components/ServiceExpertise";
import HoverImageCards from "@/components/HoverImageCards";
import ServicesFAQ from "@/components/ServicesFAQ";

// ✅ SEO Metadata
export const metadata = {
  title:
    "Interior Design Services in Trivandrum | Renovation, Construction & 3D Design — EDAM",
  description:
    "Looking for interior design services in Trivandrum? EDAM offers home interiors, renovation, construction and 3D visualization with end-to-end execution.",
  keywords: ["interior design services in Trivandrum"],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.edamdesignstudio.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceExpertise />
      <HoverImageCards />
      <ServicesFAQ />
    </>
  );
}