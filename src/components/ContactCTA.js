"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="bg-[#f6f1ea] py-24 -mt-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[320px] sm:h-[420px] lg:h-[520px]"
          >
            <Image
              src="/chair.webp"
              alt="Interior design chair"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#b87755] to-[#9c5f3f] flex items-center"
          >
            <div className="px-8 sm:px-12 lg:px-16 py-14 text-white max-w-xl">

              {/* Top label */}
              <span className="uppercase tracking-[0.25em] text-xs flex items-center gap-4 mb-6 opacity-80">
                <span className="w-10 h-[1px] bg-white/60"></span>
                Contact Us
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8">
                Ready to work <br /> with us?
              </h2>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f6f1ea] text-black px-8 py-4 text-sm font-medium tracking-wide rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md"
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