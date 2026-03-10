"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-[#f6f1ea] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

         
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[420px] lg:h-[520px]"
          >
            <Image
              src="/chair.jpg"   
              alt="Interior design chair"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

         
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#b87755] flex items-center"
          >
            <div className="px-10 lg:px-16 py-16 text-white max-w-xl">

              <span className="uppercase tracking-widest text-sm flex items-center gap-4 mb-6">
                <span className="w-10 h-[1px] bg-white/70"></span>
                Contact Us
              </span>

              <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-10">
                Ready to work <br /> together?
              </h2>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f6f1ea] text-black px-10 py-4 text-sm tracking-wide hover:bg-white transition"
              >
                VIEW CONTACTS →
              </Link>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
