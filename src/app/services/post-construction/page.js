import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Post-Construction Interior Support Services in Trivandrum",
  description:
    "Post-construction interior support services in Trivandrum ensuring smooth handover, snag resolution, aftercare, and long-term usability.",
};

export default function PostConstructionSupportPage() {
  return (
    <main className="bg-black text-white">

      
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/mep-hero.jpg"
          alt="Post-construction interior support services in Trivandrum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light max-w-5xl">
            Post-Construction Interior Support Services in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-sm leading-relaxed">
            The completion of construction is not the end of an interior
            project—it is the beginning of daily use. Our post-construction
            support services focus on ensuring that completed interiors
            transition smoothly from execution to occupancy, with clarity,
            reliability, and long-term usability.
          </p>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-17 space-y-12">

        <ContentBlock
          title="Support Beyond Project Completion"
          text="Interior projects involve multiple systems, finishes, and details working together. Post-construction support ensures that these elements perform as intended once the space is in use. Rather than stepping away at handover, we remain involved to assist with refinements, adjustments, and guidance that support long-term performance."
        />

        <ContentBlock
          title="Final Inspection & Snag Resolution"
          text="Before and after handover, we assist with identifying and resolving minor issues that may arise during final execution or early use."
          list={[
            "Final walkthrough inspections",
            "Identification of snags and minor defects",
            "Coordination for corrective actions",
            "Verification of completed adjustments",
          ]}
        />

       
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/mep-plumbing.jpg"
            alt="Final inspection and snag resolution"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Handover & Documentation Support"
          text="Clear handover is essential for smooth occupancy. We support clients with guidance and documentation related to their completed interiors."
          list={[
            "Review of installed elements and systems",
            "Basic operational guidance for fixtures and fittings",
            "Coordination of relevant service information",
            "Clarifying maintenance considerations",
          ]}
        />

        <ContentBlock
          title="Maintenance Guidance & Aftercare"
          text="Every interior requires care to age well. We provide practical maintenance guidance to help clients preserve finishes, materials, and systems over time."
          list={[
            "Material care and cleaning recommendations",
            "Usage guidance for interior elements",
            "Advice on routine upkeep",
            "Preventive considerations to avoid wear and damage",
          ]}
        />

        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/mep-systems.jpg"
            alt="Interior aftercare and maintenance guidance"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Minor Adjustments & Refinements"
          text="As spaces begin to be used, small refinements may be needed. We assist with minor adjustments that improve comfort, functionality, and usability."
          list={[
            "Adjustments to fittings or fixtures",
            "Minor layout or functional refinements",
            "Coordination for small corrective works",
          ]}
        />

        <ContentBlock
          title="Support for Future Upgrades"
          text="Interiors evolve over time. Our post-construction support includes advisory assistance for future changes or upgrades, ensuring consistency with the original design intent and overall coherence."
        />

        <ContentBlock
          title="Why Post-Construction Support Matters"
          text="Effective post-construction support ensures a smoother transition into completed spaces, protects execution quality, builds long-term confidence, and supports durability and performance. Our post-construction support services in Trivandrum are designed to provide reassurance well beyond project delivery."
        />

        
        <div className="border border-white/20 rounded-2xl p-10">
          <h2 className="text-3xl font-light mb-4">
            Discuss Post-Construction Support
          </h2>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            If you would like continued support after your interior project is
            complete in Trivandrum, we welcome a conversation to understand how
            we can assist during occupancy and beyond.
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
