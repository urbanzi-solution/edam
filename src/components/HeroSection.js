"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rawX = useTransform(x, [-500, 500], [60, -60]);
  const rawY = useTransform(y, [-500, 500], [60, -60]);

  const moveX = useSpring(rawX, {
    stiffness: 80,
    damping: 20,
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
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* IMAGE */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/firsthero.webp"
          alt="Interior Design"
          fill
          priority
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-40 flex flex-col justify-center md:flex-row md:justify-between md:items-end min-h-screen pb-12 md:pb-20 gap-6 md:gap-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-full md:w-[860px] shrink-0 flex flex-col items-center md:items-start mt-0"
        >

          <div className="block md:hidden text-center">
            <div className="border-l-2 border-[#d6c39a] pl-4 inline-block text-left">
              <h1 className="text-[36px] font-light leading-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
                Transforming spaces{" "}
                <span className="text-[#d6c39a]">elevating lives.</span>
              </h1>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#d6c39a] opacity-50" />
            </div>

            <div className="flex gap-6 items-stretch">
              <div className="w-1 bg-[#d6c39a] rounded-full shrink-0" />

              <div className="flex flex-col gap-2">
                <span
                  className="text-[#d6c39a] leading-none select-none opacity-10"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(80px, 10vw, 140px)",
                    lineHeight: 0.8,
                    marginBottom: "-20px",
                  }}
                >
                  &ldquo;
                </span>

                <h1
                  className="font-light text-white leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(45px, 6vw, 90px)",
                    letterSpacing: "-2px",
                  }}
                >
                  Transforming spaces,
                </h1>

                <h1
                  className="font-light leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(52px, 7vw, 110px)",
                    letterSpacing: "-2px",
                    color: "#d6c39a",
                  }}
                >
                  elevating lives.
                </h1>

                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-16 bg-[#d6c39a] opacity-50" />
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6 ml-7">
              <div className="w-2 h-2 rounded-full bg-[#d6c39a] opacity-30" />
              <div className="w-3 h-3 rounded-full bg-[#d6c39a] opacity-50" />
              <div className="w-2 h-2 rounded-full bg-[#d6c39a] opacity-30" />
            </div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
          className="text-left md:text-right max-w-full md:max-w-xs flex flex-col gap-4 md:mb-6"
        >
          <div className="flex md:justify-end">
            <div className="h-px w-16 bg-[#d6c39a] opacity-50" />
          </div>

          <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed tracking-wide">
            We craft photorealistic architectural visualizations that bring your
            vision to life — before a single wall is built.
          </p>

          <div className="flex md:justify-end">
            <div className="h-px w-28 bg-[#d6c39a] opacity-25" />
          </div>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="self-start md:self-end border border-[#d6c39a]/50 hover:border-[#d6c39a] text-[#d6c39a] text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-colors duration-200"
          >
            View Our Work
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}