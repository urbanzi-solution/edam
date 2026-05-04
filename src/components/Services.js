"use client";

import {
  PlayCircleIcon,
  CubeIcon,
  HomeIcon,
  FilmIcon,
  ViewfinderCircleIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="bg-black py-20 md:py-32 text-white -mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-[#d6c29f]">
            SERVICES
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">

          {/* LEFT GRID */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-6">

            <ServiceCard
              icon={<PlayCircleIcon />}
              title="Interior Design & Fit-Out "
              desc="Full room-by-room design with 3D visualisation and execution"
              light
              delay={0}
            />

            <ServiceCard
              icon={<CubeIcon />}
              title="Home Renovation "
              desc="Structural and aesthetic upgrades with fixed timelines"
              gold
              delay={0.1}
            />

            <ServiceCard
              icon={<FilmIcon />}
              title="MEP Services "
              desc="Electrical, plumbing, and mechanical coordination by certified engineers"
              gold
              delay={0.2}
            />

            <ServiceCard
              icon={<HomeIcon />}
              title="Construction Coordination "
              desc="We manage contractors, timelines, and quality on site"
              light
              delay={0.3}
            />

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col justify-between"
          >

            <div className="text-sm uppercase tracking-wider leading-loose text-white/70">
              Explore our <span className="text-white">selected projects</span><br />
              to see how we transform ideas<br />
              into vivid <span className="text-white">3D realities</span>.
            </div>

            {/* ✅ FIXED CARD */}
            <div className="relative bg-white text-black rounded-[32px] p-8 border border-black/10 min-h-[240px] md:min-h-[260px] flex flex-col justify-between mt-10 transition hover:-translate-y-2">

              <div>
                <ViewfinderCircleIcon className="w-8 h-8 mb-5" />

                <h3 className="font-semibold text-lg">
                 Post-Construction 
                </h3>

                <p className="text-sm text-black/70 mt-2 leading-relaxed">
                  Snagging, deep cleaning, and final handover
                </p>
              </div>

              {/* ✅ FIXED ICON */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
                <ArrowUpRightIcon className="w-5 h-5 text-black/70" />
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}


function ServiceCard({ icon, title, desc, light, gold, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className={`relative rounded-[32px] p-6 md:p-8 min-h-[220px] md:min-h-[260px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] ${
        light ? "bg-white text-black" : ""
      } ${gold ? "bg-[#d6c29f] text-black" : ""}`}
    >
      <div>
        <div className="w-8 h-8 mb-6">{icon}</div>

        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm mt-3 opacity-80 leading-relaxed">
          {desc}
        </p>
      </div>

      <ArrowUpRightIcon className="w-6 h-6 absolute top-6 right-6 opacity-70" />
    </motion.div>
  );
}