import Image from "next/image";
import FAQSection from "./FAQSection";


export const metadata = {
  title: "Interior Renovation Services in Trivandrum",
  description:
    "Interior renovation services in Trivandrum focused on improving function, comfort, and spatial clarity while respecting existing structures.",
};

export default function RenovationPage() {
  return (
    <main className="bg-black text-white">

      
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/interiorhero.jpg"
          alt="Interior renovation services in Trivandrum"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light max-w-5xl">
            Interior Renovation Services in{" "}
            <span className="text-[#d6c39a]">Trivandrum</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-sm leading-relaxed">
            Renovation is about rethinking what already exists. Our interior
            renovation services focus on improving function, comfort, and
            spatial clarity—while respecting the character and structure of the
            original space. Based in Trivandrum, our studio approaches renovation
            with care and restraint, helping homes and commercial interiors adapt
            to changing needs without unnecessary disruption.
          </p>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto px-6 py-17 space-y-12">

        <ContentBlock
          title="Renovation with Purpose"
          text="A meaningful renovation begins with understanding how a space is used today—and how it should function tomorrow. Rather than replacing everything, we identify what can be refined, retained, or reconfigured to improve everyday experience. Our renovation approach prioritizes usability, material longevity, and thoughtful upgrades over cosmetic changes alone."
        />

        <ContentBlock
          title="Assessment & Planning"
          text="Every renovation starts with a detailed assessment of the existing space. We study layouts, services, structural constraints, and usage patterns before proposing design and execution strategies."
          list={[
            "Existing condition evaluation",
            "Space planning and layout improvements",
            "Service and utility assessment",
            "Design alignment with current needs",
          ]}
        />

        <ContentBlock
          title="Upgrading Layouts & Interiors"
          text="Renovation often involves improving spatial flow, storage, lighting, and finishes. We focus on changes that enhance comfort and efficiency without overcomplicating the space."
          list={[
            "Layout refinements and minor reconfigurations",
            "Updated finishes and materials",
            "Improved lighting and electrical planning",
            "Integration of modern utilities",
          ]}
        />

        
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior01.jpg"
            alt="Interior renovation upgrades"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="Coordinated Execution"
          text="Renovation projects require careful sequencing to minimize disruption—especially in occupied homes or active commercial spaces. We coordinate execution activities to ensure efficiency, safety, and consistency throughout the process."
          list={[
            "Phased execution planning",
            "Alignment with MEP and construction services",
            "On-site supervision and quality checks",
            "Managing transitions between work stages",
          ]}
        />

        <ContentBlock
          title="Residential & Commercial Renovation"
          text="Our interior renovation services in Trivandrum support a range of spaces, each approached with sensitivity to scale and usage."
          list={[
            "Homes and apartments",
            "Offices and workspaces",
            "Retail and hospitality interiors",
            "Partial and phased renovation projects",
          ]}
        />

        <ContentBlock
          title="Why Renovation Matters"
          text="Well-considered renovation extends the life of interior spaces, improves comfort and functionality, reduces the need for full reconstruction, and allows spaces to evolve with changing needs. Our renovation services aim to bring clarity and balance back into existing interiors."
        />

       
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/interior02.jpg"
            alt="Thoughtful interior renovation"
            fill
            className="object-cover"
          />
        </div>

        <ContentBlock
          title="A Thoughtful Renovation Process"
          text="Renovation is not about erasing the past—it is about building upon it. By working carefully within existing structures and systems, we help spaces transition gracefully into their next phase of use."
        />

     
        <div className="border border-white/20 rounded-2xl p-10">
          <h2 className="text-3xl font-light mb-4">
            Discuss a Renovation Project
          </h2>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            If you are considering an interior renovation in Trivandrum, we
            welcome a conversation to understand your space, priorities, and
            expectations before any work begins.
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
