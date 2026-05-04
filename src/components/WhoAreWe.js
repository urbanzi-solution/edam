"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const downVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const upVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function WhoAreWe() {
  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden mt-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">

        {/* ── MOBILE LAYOUT ── */}
        <div className="flex flex-col items-center gap-10 md:hidden">

          {/* Big title */}
         {/* Big title */}
<div className="flex items-center justify-center gap-3 flex-wrap">
  <span className="text-[40px] font-light tracking-widest text-[#d6c39a]">WHO</span>
  <span className="text-[40px] font-light tracking-widest text-white/80">ARE</span>
  <span className="text-[40px] font-light tracking-widest text-white/80">WE</span>
</div>
          {/* 2x2 image grid */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {["/who1.jpg", "/who2.jpg", "/who3.jpg", "/who4.jpg"].map((src, i) => (
              <motion.div
                key={src}
                variants={i % 2 === 0 ? downVariant : upVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          {/* Glass cards stacked */}
          <div className="flex flex-col gap-4 w-full">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white text-center">
              <p className="text-[13px] leading-relaxed">
                We work on homes across Trivandrum — from apartments in Pattom and villas in Kazhakuttom to full renovations in Technopark-adjacent residential areas.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white">
              <p className="text-[13px] leading-relaxed">
                EDAM is a Trivandrum-based interior design studio that handles every stage of your project — from the first 3D concept to the final coat of paint.
              </p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white">
              <p className="text-[13px] leading-relaxed">
                 Unlike studios that hand over drawings and disappear, we stay involved through construction coordination, MEP planning, and post-construction snagging.
              </p>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (original) ── */}
        <div className="hidden md:block relative">
          <div className="flex md:justify-between items-center md:items-start gap-20 md:gap-0 relative z-10">

            {/* IMAGE 1 */}
            <motion.div
              variants={downVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[260px] h-[380px] md:-mt-32 rounded-[32px] overflow-hidden"
            >
              <Image src="/who1.jpg" alt="" fill className="object-cover" />
            </motion.div>

            {/* WHO + IMAGE */}
            <div className="flex flex-col items-center relative">
              <span className="text-[96px] font-light tracking-widest text-[#d6c39a]">WHO</span>
              <motion.div
                variants={upVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="relative w-[260px] h-[380px] rounded-[32px] overflow-hidden"
              >
                <Image src="/who2.jpg" alt="" fill className="object-cover" />
              </motion.div>
            </div>

            {/* IMAGE + WE */}
            <div className="flex flex-col items-center md:-mt-32 relative">
              <motion.div
                variants={downVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="relative w-[260px] h-[380px] rounded-[32px] overflow-hidden"
              >
                <Image src="/who3.jpg" alt="" fill className="object-cover" />
              </motion.div>
              <span className="mt-10 text-[96px] font-light tracking-widest text-white/80">WE</span>
            </div>

            {/* ARE + IMAGE */}
            <div className="flex flex-col items-center relative">
              <span className="text-[96px] font-light tracking-widest text-white/80">ARE</span>
              <motion.div
                variants={upVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                className="relative w-[260px] h-[380px] rounded-[32px] overflow-hidden"
              >
                <Image src="/who4.jpg" alt="" fill className="object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Glass cards — desktop absolute positions */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 max-w-60 text-center text-white z-20">
            <p className="text-sm leading-relaxed">
              We work on homes across Trivandrum — from apartments in Pattom and villas in Kazhakuttom to full renovations in Technopark-adjacent residential areas.
            </p>
          </div>

          <div className="absolute left-[15%] bottom-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 max-w-60 text-white z-20">
            <p className="text-sm leading-relaxed">
              EDAM is a Trivandrum-based interior design studio that handles every stage of your project — from the first 3D concept to the final coat of paint.
            </p>
          </div>

          <div className="absolute right-[15%] bottom-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 max-w-60 text-white z-20">
            <p className="text-sm leading-relaxed">
             Unlike studios that hand over drawings and disappear, we stay involved through construction coordination, MEP planning, and post-construction snagging.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}