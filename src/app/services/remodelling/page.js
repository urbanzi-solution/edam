import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Interior Remodelling Services in Trivandrum",
  description:
    "Interior remodelling services in Trivandrum focused on spatial reconfiguration, functional clarity, and long-term adaptability.",
};

export default function RemodellingPage() {
  return (
    <main className="bg-black text-white">

      
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/interiorhero.jpg"
          alt="Interior remodelling services in Trivandrum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light max-w-5xl">
            Interior Remodelling Services in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-sm leading-relaxed">
            Remodelling is about redefining how a space works. Our interior
            remodelling services focus on reconfiguring layouts, improving
            spatial relationships, and adapting interiors to new lifestyles or
            operational needs—while maintaining clarity and long-term usability.
          </p>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-17 space-y-12">

        <ContentBlock
          title="Remodelling Beyond Surface Changes"
          text="Unlike renovation, which often refines existing elements, remodelling involves deeper spatial decisions. It may include rethinking layouts, altering circulation, or adapting spaces to entirely new functions. Our process begins by understanding how a space is used today—and how it needs to perform tomorrow."
        />

        <ContentBlock
          title="Spatial Reconfiguration & Planning"
          text="Effective remodelling starts with careful space planning. We study proportions, movement, light, and functional zones before proposing changes that improve flow and usability."
          list={[
            "Layout reconfiguration and zoning",
            "Circulation and spatial balance studies",
            "Furniture and function planning",
            "Alignment with structural and service constraints",
          ]}
        />

        <ContentBlock
          title="Adapting Interiors to New Requirements"
          text="Spaces evolve over time. Remodelling allows interiors to respond to changing personal, professional, or operational needs without abandoning the existing structure."
          list={[
            "Converting or combining rooms",
            "Updating workspaces for new workflows",
            "Improving storage and utility integration",
            "Enhancing comfort, accessibility, and flexibility",
          ]}
        />

        
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior1.jpg"
            alt="Interior space reconfiguration"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Integration with Construction & MEP Services"
          text="Remodelling decisions often affect structure, services, and execution. We integrate remodelling plans with construction coordination and MEP services to maintain technical clarity throughout the process."
          list={[
            "Avoiding service clashes",
            "Maintaining safety and compliance",
            "Reducing execution conflicts",
            "Supporting smoother on-site transitions",
          ]}
        />

        <ContentBlock
          title="Execution with Sensitivity"
          text="Remodelling within existing or occupied spaces requires restraint and sequencing. We coordinate execution in phases to maintain control, reduce disruption, and protect design intent."
          list={[
            "Phased execution planning",
            "Site supervision and quality checks",
            "Coordination across work stages",
            "Continuous alignment with approved designs",
          ]}
        />

      
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior2.jpg"
            alt="Carefully executed interior remodelling"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Residential & Commercial Remodelling"
          text="Our interior remodelling services in Trivandrum support a wide range of project types."
          list={[
            "Residential homes and apartments",
            "Office and workspace interiors",
            "Retail and mixed-use spaces",
            "Partial and full interior remodelling projects",
          ]}
        />

        <ContentBlock
          title="Why Remodelling Matters"
          text="Thoughtful remodelling improves spatial efficiency, extends the functional life of interiors, and allows spaces to adapt without relocation. It is an opportunity to realign space with purpose rather than excess."
        />

        <ContentBlock
          title="A Considered Transformation"
          text="Remodelling is not about dramatic change—it is about intention. By rethinking space carefully, we help interiors evolve with clarity and restraint, supporting the next phase of use with confidence."
        />

        
        <div className="border border-white/20 rounded-2xl p-10">
          <h2 className="text-3xl font-light mb-4">
            Discuss a Remodelling Project
          </h2>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            If you are considering interior remodelling in Trivandrum and want to
            explore how your space can adapt more effectively, we welcome a
            conversation to understand your requirements and context.
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
