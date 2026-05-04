"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ServicesHero() {
  const [mounted, setMounted] = useState(false);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useTransform(x, [-500, 500], [20, -20]);
  const moveY = useTransform(y, [-500, 500], [20, -20]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      x.set(e.clientX - innerWidth / 2);
      y.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative h-[80vh] bg-black overflow-hidden">

      {/* ✅ Animated Image */}
      <motion.div
        style={mounted ? { x: moveX, y: moveY } : {}}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 6, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/zero.jpg"
          alt="Interior services"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
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

            <h1 className="mt-4 text-5xl md:text-5xl font-light leading-tight">
             Interior Design Services in Trivandrum  <br />
            From Concept to Completion
            </h1>

            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              EDAM offers a full range of interior design and construction services for homes and offices in Trivandrum, Kerala. One studio. One team. No handoff to strangers.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}