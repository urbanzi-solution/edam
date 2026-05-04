"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function AboutHero() {
  // 🎯 Mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Raw movement
 const rawX = useTransform(x, [-500, 500], [60, -60]);
const rawY = useTransform(y, [-500, 500], [60, -60]);
  // Smooth spring
  const moveX = useSpring(rawX, {
  stiffness: 80,   // ⬆ faster response
  damping: 20,     // ⬇ less delay
});

const moveY = useSpring(rawY, {
  stiffness: 80,
  damping: 20,
});
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

      {/* 🔥 Moving Background Image */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.jpg"
          alt="EDAM Interior Design Studio"
          fill
          priority
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* CONTENT (unchanged) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">

          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-4xl md:text-5xl font-light leading-tight tracking-wide text-white"
          >
            We're EDAM —Trivandrum's Interior Design Company  <br />
            <span className="text-white/90">Built Around Execution</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-sm md:text-base text-white/70 leading-relaxed"
          >
            Design is just the beginning. We stay with your project through construction, coordination, and handover — because that's how great interiors actually happen.
          </motion.p>

        </div>
      </div>
    </section>
  );
}