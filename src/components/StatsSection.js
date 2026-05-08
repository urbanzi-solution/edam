"use client";

import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDaysIcon,
  BuildingOfficeIcon,
  UsersIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  return (
    <section className="bg-[#f6efe8] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

          {/* LEFT */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              icon={CalendarDaysIcon}
              value={24}
              suffix=""
              label="Years of experience in interior design"
            />
            <StatCard
              icon={BuildingOfficeIcon}
              value={1400}
              suffix="+"
              label="Successfully completed projects"
            />
            <StatCard
              icon={UsersIcon}
              value={100}
              suffix="+"
              label="Interior design and architecture experts"
            />
            <StatCard
              icon={TrophyIcon}
              value={12}
              suffix=""
              label="Awards for excellence in interior design"
            />
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[520px]"
          >
            <Image
              src="/interior.webp"
              alt="Interior design"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}


function StatCard({ icon: Icon, value, suffix, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.floor(v));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="bg-[#f1e9e0] p-8 flex flex-col justify-between"
    >
      <Icon className="w-7 h-7 text-black mb-6" />

      <div>
        <h3 className="text-5xl font-bold text-black mb-3">
          {count}{suffix}
        </h3>
        <p className="text-sm text-black/70 leading-relaxed max-w-[220px]">
          {label}
        </p>
      </div>
    </div>
  );
}