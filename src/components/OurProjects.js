"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const initialProjects = [
  { title: "Lumiere Residences", img: "/projects/p1.webp", category: "Residential" },
  { title: "Elysium Villas", img: "/projects/p2.webp", category: "Villa" },
  {
    title: "The Grand Maison",
    img: "/projects/p3.webp",
    category: "Luxury",
    desc: "Showcase lighting, textures, and atmosphere of spaces before construction begins.",
  },
  { title: "Serenity Villas", img: "/projects/p4.webp", category: "Villa" },
  { title: "Arbor Estate", img: "/projects/p5.webp", category: "Estate" },
  { title: "Nova Heights", img: "/projects/p6.webp", category: "Commercial" },
];

export default function OurProjects() {
  const [projects, setProjects] = useState(initialProjects);
  const [isHovered, setIsHovered] = useState(false);

  const rotateLeft = useCallback(() => {
    setProjects((prev) => [...prev.slice(1), prev[0]]);
  }, []);

  const rotateRight = useCallback(() => {
    setProjects((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(rotateLeft, 4000);
    return () => clearInterval(interval);
  }, [isHovered, rotateLeft]);

  return (
    <section
      className="bg-black py-20 md:py-32 text-white relative overflow-hidden -mt-25"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d6c29f]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center mb-14 md:mb-20 px-6">
        <p className="text-[10px] font-semibold tracking-[0.3em] text-[#d6c29f]/60 uppercase mb-4">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-6xl font-light tracking-widest">
          <span className="text-[#d6c29f]">OUR</span> PROJECTS
        </h2>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="h-px w-12 bg-[#d6c29f]/30" />
          <p className="text-white/30 text-[12px] tracking-widest uppercase">
            {initialProjects.length} Projects
          </p>
          <div className="h-px w-12 bg-[#d6c29f]/30" />
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={rotateRight}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 hover:border-[#d6c29f]/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white/10"
      >
        <ChevronLeftIcon className="w-5 h-5 text-white/60 hover:text-white" />
      </button>

      <button
        onClick={rotateLeft}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/20 hover:border-[#d6c29f]/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white/10"
      >
        <ChevronRightIcon className="w-5 h-5 text-white/60 hover:text-white" />
      </button>

      {/* Desktop layout */}
      <div className="hidden md:flex justify-center items-end gap-4 px-20">
        {projects.slice(0, 5).map((project, index) => (
          <ProjectCard key={project.title + index} project={project} index={index} />
        ))}
      </div>

      {/* Mobile layout — show 3 cards */}
      <div className="flex md:hidden justify-center items-end gap-3 px-4">
        {projects.slice(1, 4).map((project, index) => (
          <ProjectCard key={project.title + index} project={project} index={index + 1} mobile />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {initialProjects.map((_, i) => (
          <div
            key={i}
            className={"h-px transition-all duration-300 " + (i === 2 ? "w-8 bg-[#d6c29f]" : "w-4 bg-white/20")}
          />
        ))}
      </div>

    </section>
  );
}

function ProjectCard({ project, index, mobile = false }) {
  const featured = index === 2;

  const sizes = mobile
    ? featured
      ? "w-[160px] h-[240px]"
      : "w-[110px] h-[180px]"
    : featured
    ? "w-[340px] h-[520px]"
    : index === 1 || index === 3
    ? "w-[240px] h-[420px]"
    : "w-[180px] h-[320px]";

  return (
    <div
      className={"relative rounded-3xl overflow-hidden transition-all duration-500 group shrink-0 " + sizes}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Category badge */}
      {featured && project.category && (
        <div className="absolute top-4 left-4">
          <span className="bg-[#d6c29f]/20 backdrop-blur-sm border border-[#d6c29f]/30 text-[#d6c29f] text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 w-full px-5 py-5">
        {featured && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-px bg-[#d6c29f]/60" />
            <span className="text-[#d6c29f]/60 text-[9px] tracking-[0.2em] uppercase">Featured</span>
          </div>
        )}
        <h3 className={"font-medium leading-snug " + (featured ? "text-lg" : "text-sm")}>
          {project.title}
        </h3>
        {featured && project.desc && (
          <p className="text-white/50 text-[12px] mt-2 leading-relaxed line-clamp-2">
            {project.desc}
          </p>
        )}
        {featured && (
          <button className="mt-4 flex items-center gap-2 text-[#d6c29f] text-[11px] font-semibold tracking-wider uppercase group-hover:gap-3 transition-all duration-200">
            View Project
            <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}