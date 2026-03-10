"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HomeIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export default function StatsSection() {
  return (
    <section className="bg-[#f6efe8] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">

       
          <div className="grid grid-cols-2 gap-6">
            <StatCard
              icon={HomeIcon}
              value="24"
              label="Years of experience in interior design"
            />
            <StatCard
              icon={BuildingOffice2Icon}
              value="1400+"
              label="Successfully completed projects"
            />
            <StatCard
              icon={UserGroupIcon}
              value="100+"
              label="Interior design and architecture experts"
            />
            <StatCard
              icon={TrophyIcon}
              value="12"
              label="Awards for excellence in interior design"
            />
          </div>

         
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full h-[520px]"
          >
            <Image
              src="/interior.jpg" 
              alt="Interior design"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}


function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-[#f1e9e0] p-8 flex flex-col justify-between">
      <Icon className="w-7 h-7 text-black mb-6" />

      <div>
        <h3 className="text-5xl font-light text-black mb-3">
          {value}
        </h3>
        <p className="text-sm text-black/70 leading-relaxed max-w-[220px]">
          {label}
        </p>
      </div>
    </div>
  );
}
