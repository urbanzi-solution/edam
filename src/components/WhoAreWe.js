"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const downVariant = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0 },
};

const upVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function WhoAreWe() {
  return (
    <section className="mt-20 relative bg-black py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative">

        {/* MOBILE STACK | DESKTOP ORIGINAL */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-20 md:gap-0 relative z-10">

          {/* IMAGE 1 */}
          <motion.div
            variants={downVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[260px] h-[380px] md:-mt-32 rounded-[32px] overflow-hidden"
          >
            <Image src="/who-1.jpg" alt="" fill className="object-cover" />
          </motion.div>

          {/* WHO + IMAGE */}
          <div className="flex flex-col items-center relative">
            <span className="text-[72px] md:text-[96px] font-light tracking-widest text-[#d6c39a]">
              WHO
            </span>

            <motion.div
              variants={upVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative w-[260px] h-[380px] rounded-[32px] overflow-hidden"
            >
              <Image src="/who-2.jpg" alt="" fill className="object-cover" />
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
              <Image src="/who-3.jpg" alt="" fill className="object-cover" />
            </motion.div>

            <span className="mt-10 text-[72px] md:text-[96px] font-light tracking-widest text-white/80">
              WE
            </span>
          </div>

          {/* ARE + IMAGE */}
          <div className="flex flex-col items-center relative">
            <span className="text-[72px] md:text-[96px] font-light tracking-widest text-white/80">
              ARE
            </span>

            <motion.div
              variants={upVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative w-[260px] h-[380px] rounded-[32px] overflow-hidden"
            >
              <Image src="/who-4.jpg" alt="" fill className="object-cover" />
            </motion.div>
          </div>
        </div>

        {/* GLASS CARD CENTER */}
        <div className="mt-16 md:absolute md:left-1/2 md:top-1/3 md:-translate-x-1/2 md:-translate-y-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-4 max-w-60 text-center text-white z-20 mx-auto md:mx-0">
          <p className="text-sm leading-relaxed">
            We are a creative studio specializing in architectural visualization
            and 3D design.
          </p>
        </div>

        {/* LEFT GLASS CARD */}
        <div className="mt-6 md:mt-0 md:absolute md:left-[15%] md:bottom-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 max-w-60 text-white z-20 mx-auto md:mx-0">
          <p className="text-sm leading-relaxed">
            Our mission is to transform ideas into compelling visual narratives
            that inspire clients, investors, and future homeowners.
          </p>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="mt-6 md:mt-0 md:absolute md:right-[15%] md:bottom-50 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-3 max-w-60 text-white z-20 mx-auto md:mx-0">
          <p className="text-sm leading-relaxed">
            Driven by precision and realism, we craft visuals that not only
            illustrate spaces but evoke emotion and atmosphere.
          </p>
        </div>

      </div>
    </section>
  );
}
