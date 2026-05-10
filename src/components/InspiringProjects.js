"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function InspiringProjects() {
  return (
    <section className="bg-[#f6f1eb] py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            EDAM Inspiring <br /> Projects
          </h2>

          <div className="mt-10 flex gap-6">
            
            <Link href="/projects">
              <button className="self-start md:self-end border-2 border-[#d6c39a]/50 bg-[#d6c39a] hover:bg-[#d7c190] text-black text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-colors duration-200">
                View Projects
              </button>
            </Link>

            <Link href="/about">
              <button className="self-start md:self-end border-2 border-[#d6c39a]/50 hover:border-[#d6c39a] text-[#0c0c0c] text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-colors duration-200">
                About Us
              </button>
            </Link>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="flex gap-24 mb-10 font-bold">
            <Counter number={250} suffix="+" label="Successful Projects" />
            <Counter number={550} suffix="+" label="Satisfied Clients" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-black/80 max-w-xl"
          >
            At EDAM, we take immense pride in our commitment to design excellence
            and innovation. Over the years, our dedication has been recognized
            and celebrated through a myriad of prestigious awards and accolades.
            These honors reflect our unwavering pursuit of creativity, our
            devotion to detail, and our ability to transform visions into
            awe-inspiring interiors.
          </motion.p>

        </motion.div>

      </div>
    </section>
  );
}

function Counter({ number, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(number);
    }
  }, [inView, number, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div className="flex flex-col">
      <h3 ref={ref} className="text-4xl font-bold text-black">
        0{suffix}
      </h3>
      <p className="mt-2 text-sm text-black/70">
        {label}
      </p>
    </div>
  );
}