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

          
          <div className="mt-10 flex gap-6">
            <Link href="/projects">
              <button className="self-start md:self-end border-2 border-[#d6c39a]/50 bg-[#d6c39a] hover:bg-[#d7c190] text-[#000000] text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-colors duration-200">
                View Projects
              </button>
            </Link>

            <Link href="/about">
              <button className="self-start md:self-end border-2 border-[#d6c39a]/50 hover:border-[#d6c39a] text-[#0c0c0c] text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 rounded-lg transition-colors duration-200">
                About Us
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
