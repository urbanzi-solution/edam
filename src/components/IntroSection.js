"use client";

import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-[#f7f1ea] -mt-32">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">

          
          <h1 className="text-5xl md:text-6xl font-semibold text-black leading-tight mb-8">
            Design your dream home <br />
            together with us
          </h1>

          
          <p className="text-lg text-black/80 leading-relaxed mb-14">
            At EDAM, we're passionate about transforming spaces into unique and
            inspiring interiors. Our expert team of designers combines creativity
            and functionality to breathe life into every project. Whether you're
            looking to revamp your home, office, or any other space.
          </p>

          
          <div className="flex gap-6">
            <Link
              href="/projects"
              className="px-10 py-4 bg-[#4aa6a3] text-black font-medium tracking-wide hover:opacity-90 transition"
            >
              VIEW PROJECTS
            </Link>

            <Link
              href="/about"
              className="px-10 py-4 bg-black text-white font-medium tracking-wide hover:opacity-90 transition"
            >
              ABOUT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
