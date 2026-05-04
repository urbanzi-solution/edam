import {
  LightBulbIcon,
  ClipboardDocumentListIcon,
  CubeTransparentIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 bg-black text-white -mt-20">
      
      {/* Title */}
      <h2 className="text-center text-5xl md:text-6xl font-light tracking-widest mb-24">
        HOW IT <span className="text-[#d6c29f]">WORKS</span>
      </h2>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 items-stretch">

        <Step
          title="Design & 3D Visualisation "
          text=" You see your home before a single wall is touched"
          icon={<LightBulbIcon className="w-7 h-7 text-black" />}
          active={false}
        />

        <Step
          title="Step 3	Approval & Planning "
          text="Materials, costs, and timelines locked before work begins"
          icon={<ClipboardDocumentListIcon className="w-7 h-7 text-black" />}
          active={true}
        />

        <Step
          title="Execution"
          text="Our team coordinates construction and fit-out on site"
          icon={<CubeTransparentIcon className="w-7 h-7 text-black" />}
          active={false}
        />

        <Step
          title="Handover "
          text=" Snagging, cleaning, and final walk through. Your home, ready to live in"
          icon={<StarIcon className="w-7 h-7 text-black" />}
          active={true}
        />

      </div>
    </section>
  );
}


function Step({ title, text, icon, active }) {
  return (
    <div className="flex flex-col items-center text-center h-full">

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 transition
        ${active ? "bg-[#d6c29f]" : "bg-white"}`}
      >
        {icon}
      </div>

      {/* Card */}
      <div className="
        backdrop-blur-xl 
        bg-white/10 
        border border-white/30 
        rounded-3xl 
        px-6 py-6 
        w-full max-w-xs 
        h-[190px] md:h-[140px]
        flex flex-col justify-between
        transition-all duration-300
        hover:-translate-y-3
        hover:border-[#d6c29f]
        hover:bg-white/20
      ">

        <h3 className="text-lg font-medium mb-2">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-white/80">
          {text}
        </p>

      </div>
    </div>
  );
}