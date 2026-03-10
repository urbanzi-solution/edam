"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] bg-black overflow-hidden">
      
      
      <Image
        src="/zero.jpg" 
        alt="Interior services"
        fill
        priority
        className="object-cover"
      />

   
      <div className="absolute inset-0 bg-black/60" />

      
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-2xl text-white"
          >
            <span className="uppercase tracking-widest text-sm text-white/70">
              Our Services
            </span>

            <h1 className="mt-4 text-5xl md:text-7xl font-light leading-tight">
              Crafting spaces <br />
              with purpose & emotion
            </h1>

            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              From concept to completion, EDAM delivers refined interior and
              architectural solutions that elevate everyday living.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
