"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: "01",
    title: "CONSTRUCTION",
    desc: "Interior construction is where planning meets reality. Our construction coordination services focus on translating approved designs into built interiors with accuracy, control, and consistency.",
    img: "/who-1.jpg",
    link: "/services/interior",
  },
  {
    id: "02",
    title: "MEP SERVICES",
    desc: "Our MEP services focus on integrating these systems seamlessly within interior layouts—ensuring performance, safety, and efficiency without compromising design intent.",
    img: "/who-2.jpg",
    link: "/services/mep-services",
  },
  {
    id: "03",
    title: "INTERIOR DESIGN",
    desc: "Our interior design services focus on creating environments that feel balanced, intuitive, and enduring—spaces that remain relevant long after the project is complete.",
    img: "/who-3.jpg",
    link: "/services/interior-design",
  },
  {
    id: "04",
    title: "RENOVATION",
    desc: "Our interior renovation services focus on improving function, comfort, and spatial clarity—while respecting the character and structure of the original space.",
    img: "/who-4.jpg",
    link: "/services/renovation",
  },
  {
    id: "05",
    title: "REMODELLING",
    desc: "Our interior remodelling services focus on reconfiguring layouts, improving spatial relationships, and adapting interiors to new lifestyles or operational needs.",
    img: "/5.jpg",
    link: "/services/remodelling",
  },
  {
    id: "06",
    title: "POST-CONSTRUCTION SUPPORT",
    desc: "Our post-construction support services focus on ensuring that completed interiors transition smoothly from execution to occupancy, with clarity, reliability, and long-term usability.",
    img: "/who-6.jpg",
    link: "/services/post-construction",
  },
];

export default function ServiceExpertise() {
  return (
    <section className="bg-black text-white py-28">
      <div className="max-w-8xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-14 md:mb-20">
          OUR DESIGN EXPERTISE
        </h2>

        <div className="space-y-10">
          {services.map((item) => (
            <ServiceCard key={item.id} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ data }) {
  return (
    <Link href={data.link} className="block">
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="hover" // Mobile tap support
        animate="rest"
        className="relative border-t border-white/20 pt-14 pb-16 overflow-hidden group cursor-pointer"
      >
        
        {/* Hover Background Image */}
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 1.05 },
            hover: { opacity: 0.35, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={data.img}
            alt={data.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-6 md:gap-8 items-start md:items-center">

          {/* ID */}
          <div className="col-span-12 md:col-span-1 text-xl md:text-3xl text-white/60 font-light">
            {data.id} /
          </div>

          {/* Title */}
          <div className="col-span-12 md:col-span-3">
            <h3 className="text-2xl md:text-4xl font-semibold leading-snug">
              {data.title}
            </h3>
          </div>

          {/* Description */}
          <div className="col-span-12 md:col-span-6 text-white/70 text-sm md:text-base max-w-xl leading-relaxed">
            {data.desc}
          </div>

          {/* Arrow */}
          <div className="col-span-12 md:col-span-1 flex justify-end mt-4 md:mt-0">
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.15 },
              }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 md:w-14 md:h-14 border border-white/60 rounded-full flex items-center justify-center overflow-hidden"
            >
              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRightIcon className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}
