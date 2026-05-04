import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "MEP Services for Interior Projects in Trivandrum",
  description:
    "Mechanical, Electrical & Plumbing services for interior projects in Trivandrum, ensuring performance, safety, and seamless integration with interior design.",
};

export default function MEPServicesPage() {
  return (
    <main className="bg-black text-white">

      
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/mep-hero.jpg"
          alt="MEP services for interior projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light max-w-5xl">
            MEP Services for Interior Projects in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-sm leading-relaxed">
            Mechanical, Electrical, and Plumbing (MEP) systems are the invisible backbone of every well-built home. EDAM plans, coordinates, and supervises MEP works to comply with Indian standards — no improvised wiring, no leaking pipes.
          </p>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-17 space-y-12">

        <ContentBlock
          title="What MEP Services Involve in Interior Projects"
          text="MEP services in interior projects go beyond technical installation. They involve careful planning, coordination, and alignment with layouts, finishes, and spatial requirements. Our approach ensures that mechanical, electrical, and plumbing systems are planned early, coordinated accurately, and executed in harmony with interior design and construction activities."
        />

        <ContentBlock
          title="Electrical Planning & Lighting Coordination"
          text="Electrical planning is central to how an interior functions and feels. We coordinate electrical layouts and lighting systems to support usability, safety, and visual comfort."
          list={[
            "Power point and switch planning",
            "Lighting layout coordination",
            "Fixture positioning and integration",
            "Load planning and safety considerations",
          ]}
        />

        <ContentBlock
          title="Plumbing & Sanitary Coordination"
          text="Plumbing systems must be planned with accuracy to support long-term functionality and maintenance. We coordinate plumbing and sanitary layouts in alignment with interior planning and construction requirements."
          list={[
            "Water supply and drainage planning",
            "Sanitary fixture coordination",
            "Access and maintenance considerations",
            "Integration with finishes and cabinetry",
          ]}
        />

        
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/plumbing.jpg"
            alt="Plumbing and sanitary coordination"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Mechanical Systems & HVAC Coordination"
          text="Mechanical systems, including HVAC and ventilation, directly affect comfort and energy efficiency. We coordinate mechanical services to ensure optimal performance while maintaining clean interior aesthetics."
          list={[
            "HVAC layout integration",
            "Ventilation and airflow planning",
            "Equipment placement and access",
            "Alignment with ceiling and spatial constraints",
          ]}
        />

        <ContentBlock
          title="Integration with Interior Design & Construction"
          text="MEP services are closely linked to design and construction. We ensure continuous coordination between layouts, finishes, construction sequencing, and service requirements throughout the project."
          list={[
            "Avoid clashes between services and interiors",
            "Preserve design intent during execution",
            "Improve site efficiency and coordination",
            "Reduce delays caused by late-stage adjustments",
          ]}
        />

        <ContentBlock
          title="Compliance, Safety & Performance"
          text="MEP planning must adhere to safety standards and building requirements. We ensure that service coordination aligns with applicable codes and functional performance expectations."
          list={[
            "Safety and accessibility considerations",
            "System efficiency and reliability",
            "Clear documentation for execution and maintenance",
          ]}
        />

      
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/mep.jpg"
            alt="Integrated MEP systems"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Why Integrated MEP Planning Matters"
          list={[
            "Improve interior functionality and comfort",
            "Reduce execution conflicts and rework",
            "Support cleaner visual outcomes",
            "Enhance long-term maintenance and efficiency",
          ]}
          text="Our MEP services in Trivandrum are designed to support interiors that perform reliably over time."
        />

        <ContentBlock
          title="Projects We Support"
          list={[
            "Residential homes and apartments",
            "Commercial offices and workspaces",
            "Retail and hospitality interiors",
            "Renovation and remodelling projects",
          ]}
        />

        <ContentBlock
          title="MEP as Part of a Unified Process"
          text="When MEP services are treated as part of a unified design and execution process, interiors function better and age more gracefully. Our approach ensures that technical systems support, rather than compete with, interior design."
        />

        
        <div className="border border-white/20 rounded-2xl p-10">
          <h3 className="text-3xl font-light mb-4">
            Discuss MEP Services for Your Interior Project
          </h3>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            If you are planning an interior project in Trivandrum that requires
            coordinated mechanical, electrical, and plumbing services, we welcome
            a discussion to understand your requirements and project context.
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
