"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      
     
      
        <Image
          src="/hero.jpg"   
          alt="EDAM Interior Design Studio"
          fill
          priority
          className="object-cover"
        />
       

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-4xl md:text-6xl font-light leading-tight tracking-wide text-white"
          >
            Discover Our <br />
            <span className="text-white/90">Design Journey</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-sm md:text-base text-white/70 leading-relaxed"
          >
            Welcome to EDAM, crafting timeless interiors that tell your story.
            Discover a world where design meets emotion, and interiors become
            a canvas for your unique narrative. Immerse yourself in the art of
            interior design with EDAM.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
