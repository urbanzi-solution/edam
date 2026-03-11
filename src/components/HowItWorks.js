import {
  LightBulbIcon,
  ClipboardDocumentListIcon,
  CubeTransparentIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function HowItWorks() {
  return (
    <section className="relative w-full py-32 bg-black text-white -mt-35">
      
      <h2 className="text-center text-5xl md:text-6xl font-light tracking-widest mb-24">
        HOW IT <span className="text-[#d6c29f]">WORKS</span>
      </h2>

     
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

        
        <Step
          title="Discovery & Brief"
          text="We dive into your vision, goals, and requirements to understand what truly matters."
          icon={<LightBulbIcon className="w-7 h-7 text-black" />}
          active={false}
        />

       
        <Step
          title="Concept & Planning"
          text="Creating layouts, mood boards, and concepts to visualize the direction."
          icon={<ClipboardDocumentListIcon className="w-7 h-7 text-black" />}
          active={true}
        />

       <Step
          title="3D Modeling"
          text="Transforming concepts into detailed 3D models and realistic visuals."
          icon={<CubeTransparentIcon className="w-7 h-7 text-black" />}
          active={false}
        />

       
        <Step
          title="Delivery & Review"
          text="Final high-quality visuals delivered for presentation and approvals."
          icon={<StarIcon className="w-7 h-7 text-black" />}
          active={true}
        />
      </div>
    </section>
  );
}


function Step({ title, text, icon, active }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      
      
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-8
        ${active ? "bg-[#d6c29f]" : "bg-white"}`}
      >
        {icon}
      </div>

     
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl px-6 py-6 max-w-xs">
        <h3 className="text-lg font-medium mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-white/80">
          {text}
        </p>
      </div>
    </div>
  );
}
