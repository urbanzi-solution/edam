import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Interior Construction Coordination Services in Trivandrum",
  description:
    "Interior construction coordination services in Trivandrum ensuring accurate execution, quality control, and alignment with design intent.",
};

export default function ConstructionPage() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center">
        <Image
          src="/hero.jpg"
          alt="Interior construction coordination"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-7xl font-light max-w-5xl leading-tight">
            Interior Construction Coordination Services in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-xl md:max-w-2xl text-white/70 text-sm md:text-base leading-relaxed">
            Hire EDAM as your construction coordinator and stop spending your days chasing contractors, resolving disputes, and worrying about quality. We handle it — so you don't have to.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 space-y-12">

        <ContentBlock
          title="What Interior Construction Coordination Involves"
          text="Interior construction coordination is the process of managing and aligning civil works, contractors, and execution workflows related to interior projects. It ensures that all on-site activities reflect approved drawings, design decisions, and technical requirements. Our approach emphasizes sequencing, quality control, and coordination across teams to maintain consistency throughout the construction phase."
        />

        <ContentBlock
          title="Coordination of Interior Civil Works"
          text="Interior construction often involves multiple civil activities that must be carefully sequenced. We coordinate interior civil works to ensure smooth progress and accurate implementation."
          list={[
            "Partition and wall modifications",
            "False ceiling execution coordination",
            "Flooring and surface preparation",
            "Structural coordination where required",
          ]}
        />

        <ContentBlock
          title="Site Supervision & Quality Control"
          text="Consistent site supervision is essential to maintain execution quality. We monitor on-site work to ensure materials, workmanship, and detailing match approved designs and specifications."
          list={[
            "Verifying execution against drawings",
            "Monitoring material usage and finishes",
            "Identifying and resolving execution issues early",
            "Maintaining quality benchmarks throughout construction",
          ]}
        />

        {/* IMAGE 1 */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/so.jpg"
            alt="Interior site supervision"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Contractor & Vendor Coordination"
          text="Interior construction involves collaboration between multiple contractors and vendors. We coordinate workflows to ensure clarity of scope, alignment of responsibilities, and efficient progress on site."
          list={[
            "Aligning contractor activities with project timelines",
            "Clarifying execution details and dependencies",
            "Managing handovers between work stages",
            "Reducing delays caused by miscommunication",
          ]}
        />

        <ContentBlock
          title="Execution Sequencing & Timeline Management"
          text="Effective construction relies on correct sequencing. We plan and manage execution workflows so that each stage progresses logically and efficiently."
          list={[
            "Stage-wise execution planning",
            "Coordination between civil works and services",
            "Monitoring progress against timelines",
            "Addressing delays proactively",
          ]}
        />

        <ContentBlock
          title="Integration with Design & Services"
          text="Interior construction does not operate in isolation. We ensure continuous alignment between construction activities, design intent, and MEP services throughout execution."
          list={[
            "Preventing clashes between construction and services",
            "Preserving design accuracy on site",
            "Supporting smoother coordination with electrical, plumbing, and HVAC systems",
          ]}
        />

        <ContentBlock
          title="Why Construction Coordination Matters"
          list={[
            "Reduces execution errors and rework",
            "Protects design intent during implementation",
            "Improves overall build quality",
            "Supports predictable timelines and outcomes",
          ]}
          text="Our construction coordination services in Trivandrum are designed to provide control and clarity during one of the most critical phases of an interior project."
        />

        {/* IMAGE 2 */}
        <div className="relative w-full h-[260px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/co.jpg"
            alt="Construction coordination process"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Projects We Support"
          list={[
            "Residential interiors and apartments",
            "Commercial offices and workspaces",
            "Retail and hospitality interiors",
            "Renovation and remodelling projects",
          ]}
          text="Each project is managed based on scale, complexity, and site conditions."
        />

        <ContentBlock
          title="Construction as a Collaborative Process"
          text="Interior construction succeeds when design, planning, and execution work together. By approaching construction as a coordinated process rather than a standalone activity, we help ensure interiors are delivered as envisioned."
        />

        {/* CTA BOX */}
        <div className="border border-white/20 rounded-2xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-light mb-4">
            Discuss Construction Coordination
          </h3>
          <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
            If you are planning an interior project or moving from design into
            execution in Trivandrum, our construction coordination services can
            help guide the process with structure and clarity. We welcome a
            discussion to understand your project scope and execution needs.
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
      <h2 className="text-2xl md:text-3xl font-light mb-6">
        {title}
      </h2>

      {text && (
        <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-3xl">
          {text}
        </p>
      )}

      {list && (
        <ul className="mt-4 space-y-2 text-white/70 text-sm md:text-base list-disc list-inside">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
