import Image from "next/image";
import FAQSection from "./FAQSection";


export const metadata = {
  title: "Interior Design & Fit-Out Services in Trivandrum",
  description:
    "Interior design and fit-out services in Trivandrum focused on clarity, material quality, spatial balance, and long-term relevance.",
};

export default function InteriorDesignPage() {
  return (
    <main className="bg-black text-white">
      
     
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/interiorhero.jpg"
          alt="Interior design and fit-out services in Trivandrum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light max-w-5xl">
            Interior Design & Fit-Out Services in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-sm leading-relaxed">
            Interior design is the art of shaping space to support how people live,
            work, and move. Our interior design services focus on creating
            environments that feel balanced, intuitive, and enduring—spaces that
            remain relevant long after the project is complete. Based in Trivandrum,
            our studio approaches interior design as a thoughtful process, where
            proportion, materiality, light, and function come together with quiet
            clarity rather than excess.
          </p>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-17 space-y-12">
        
        <ContentBlock
          title="Design That Feels Natural"
          text="A well-designed interior does not demand attention—it feels right. We focus on spatial harmony, comfort, and usability, allowing interiors to support everyday life without visual noise or unnecessary complexity. Our interiors are shaped by how spaces are used, how light moves through them, and how materials age over time."
        />

        <ContentBlock
          title="From Concept to Finished Space"
          text="Interior design is not limited to drawings or visual ideas. We guide each project from concept development through detailed execution, ensuring continuity between what is imagined and what is built."
          list={[
            "Spatial layout and furniture planning",
            "Material and finish coordination",
            "Lighting and atmosphere development",
            "Integration with construction and services",
          ]}
        />

        <ContentBlock
          title="Material, Detail & Craft"
          text="Materials define the character of an interior. We work with finishes, textures, and details that offer both visual restraint and tactile richness."
          list={[
            "Durability and maintenance",
            "Context and environment",
            "Visual balance and proportion",
            "Compatibility with lighting and services",
          ]}
        />

        
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior1.jpg"
            alt="Interior material and detail craftsmanship"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Residential & Commercial Interiors"
          text="Our interior design services in Trivandrum support a range of project types, each approached with sensitivity to scale and purpose."
          list={[
            "Private residences and apartments",
            "Office and workplace interiors",
            "Retail and hospitality spaces",
            "Renovation and remodelling projects",
          ]}
        />

        <ContentBlock
          title="Execution with Care"
          text="Design integrity is protected during execution through continuous coordination and supervision. We work closely with craftsmen, contractors, and service teams to ensure that detailing, finishes, and proportions are executed as intended. This measured approach allows the final space to reflect the original design vision without compromise."
        />

        <ContentBlock
          title="Why Interior Design Matters"
          text="Interior design shapes experience. It influences comfort, productivity, and how a space is perceived over time. When approached with care, it creates environments that feel calm, functional, and quietly confident. Our interior design services are intended to deliver spaces that support everyday life while maintaining a strong sense of identity."
        />

        
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior2.jpg"
            alt="Timeless interior spaces"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="A Considered Interior Approach"
          text="Rather than chasing trends, we focus on interiors that age gracefully. By prioritizing proportion, material quality, and spatial clarity, we create spaces that remain relevant and meaningful over time."
        />

        
        <div className="border border-white/20 rounded-2xl p-10">
          <h2 className="text-3xl font-light mb-4">
            Begin with Interior Design
          </h2>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            If you are planning a new interior, renovation, or fit-out in Trivandrum,
            we welcome a conversation to understand your space, intentions, and
            expectations.
          </p>
        </div>
<FAQSection />
      </section>
    </main>
  );
}


function ContentBlock({ title, text, list }) {
  return (
    <div>
      <h2 className="text-3xl font-light mb-6">{title}</h2>

      {text && (
        <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
          {text}
        </p>
      )}

      {list && (
        <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc list-inside">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
