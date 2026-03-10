"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/firsthero.jpg"
          alt="Interior Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 flex flex-col md:flex-row justify-between items-end h-full">

        <div className="text-white max-w-xl mb-20">

          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="text-5xl md:text-7xl font-light tracking-wide"
          >
            LIGHT.{" "}
            <span className="text-[#d6c39a]">
              SPACE.
            </span>{" "}
            ATMOSPHERE.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-300 text-sm leading-relaxed"
          >
            PHOTOREALISTIC VISUALIZATIONS THAT SHOWCASE
            YOUR IDEAS BEFORE THEY REBUILD
          </motion.p>

        </div>
      </div>
    </section>
  );
}
