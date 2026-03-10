"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const services = [
    { id: "01", title: "Design", link: "/services/design" },
    { id: "02", title: "Concept", link: "/services/concept" },
    { id: "03", title: "Planning", link: "/services/planning" },
    { id: "04", title: "3D Visual", link: "/services/3d-visual" },
  ];

  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="/chair.jpg"  
              alt="Interior design"
              fill
              className="object-cover"
            />
          </motion.div>

        
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}


function ServiceCard({ data }) {
  return (
    <div className="relative h-[300px] border border-white/60 flex flex-col items-center justify-center text-center text-white">

 
      <span className="absolute top-6 left-6 text-white/30 text-3xl font-light">
        {data.id}
      </span>

      <h3 className="text-4xl font-light mb-4">
        {data.title}
      </h3>

    
      <p className="text-sm text-white/70 max-w-[220px] leading-relaxed">
        Explore our design ambitions and vision of modern EDAM interiors.
      </p>

    
      <Link
        href={data.link}
        className="mt-8 text-sm border-b border-white/60 hover:border-white transition"
      >
        View Services
      </Link>
    </div>
  );
}
