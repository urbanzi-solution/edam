import {
  PlayCircleIcon,
  CubeIcon,
  HomeIcon,
  FilmIcon,
  ViewfinderCircleIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  return (
    <section className="bg-black py-20 md:py-32 text-white -mt-30">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE ABOVE GRID */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-[#d6c29f]">
            SERVICES
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* SERVICES GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ServiceCard
              icon={<PlayCircleIcon />}
              title="Interior Visualization"
              desc="Showcase lighting, textures, and atmosphere of spaces before construction begins."
              light
            />

            <ServiceCard
              icon={<CubeIcon />}
              title="3D Modeling & Post-Production"
              desc="From accurate models to polished final renders."
              gold
            />

            <ServiceCard
              icon={<FilmIcon />}
              title="3D Animation & Walkthroughs"
              desc="Step inside the project with cinematic presentations."
              gold
            />

            <ServiceCard
              icon={<HomeIcon />}
              title="Exterior Visualization"
              desc="Bring facades, landscapes, and master plans to life with photorealistic renders."
              light
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col justify-between">

            <div className="text-sm uppercase tracking-wider leading-loose text-white/70">
              Explore our <span className="text-white">selected projects</span><br />
              to see how we transform ideas<br />
              into vivid <span className="text-white">3D realities</span>.
            </div>

            <div className="relative bg-white text-black rounded-[32px] p-8
                  border border-black/10
                  min-h-[260px]
                  flex flex-col justify-between mt-10">

              <div>
                <ViewfinderCircleIcon className="w-8 h-8 mb-5" />

                <h3 className="font-semibold text-lg">
                  VR / AR Experiences
                </h3>

                <p className="text-sm text-black/70 mt-2 leading-relaxed">
                  Immersive tools for interactive project exploration.
                </p>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full
                    border border-black/20
                    flex items-center justify-center">
                <ArrowUpRightIcon className="w-5 h-5 text-black/70" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, light, gold }) {
  return (
    <div
      className={`relative rounded-[32px] p-8 min-h-[260px]
        ${light ? "bg-white text-black" : ""}
        ${gold ? "bg-[#d6c29f] text-black" : ""}`}
    >
      <div className="w-8 h-8 mb-6">{icon}</div>

      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm mt-3 opacity-80 leading-relaxed">{desc}</p>

      <ArrowUpRightIcon className="w-6 h-6 absolute top-6 right-6 opacity-70" />
    </div>
  );
}
