"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const initialProjects = [
  { title: "Lumiere Residences", img: "/projects/p1.jpg" },
  { title: "Elysium Villas", img: "/projects/p2.jpg" },
  {
    title: "The Grand Maison",
    img: "/projects/p3.jpg",
    desc: "Showcase lighting, textures, and atmosphere of spaces before construction begins.",
  },
  { title: "Serenity Villas", img: "/projects/p4.jpg" },
  { title: "Arbor Estate", img: "/projects/p5.jpg" },
  { title: "Nova Heights", img: "/projects/p6.jpg" },
];

export default function OurProjects() {
  const [projects, setProjects] = useState(initialProjects);

  const rotateLeft = () => {
    setProjects((prev) => [...prev.slice(1), prev[0]]);
  };

  const rotateRight = () => {
    setProjects((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, prev.length - 1),
    ]);
  };

  // ✅ AUTO ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      rotateLeft();
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 md:py-32 text-white relative overflow-hidden">
      
      <h2 className="text-center text-4xl md:text-6xl font-light tracking-widest mb-14 md:mb-20">
        <span className="text-[#d6c29f]">OUR</span> PROJECTS
      </h2>

      {/* Arrows */}
      <button
        onClick={rotateLeft}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronLeftIcon className="w-8 h-8 md:w-10 md:h-10 text-white/70 hover:text-white" />
      </button>

      <button
        onClick={rotateRight}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20"
      >
        <ChevronRightIcon className="w-8 h-8 md:w-10 md:h-10 text-white/70 hover:text-white" />
      </button>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-end gap-8">
        {projects.slice(0, 5).map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            featured={index === 2}
          />
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden justify-center">
        <ProjectCard project={projects[2]} featured={true} />
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`relative rounded-[32px] overflow-hidden transition-all duration-500
        ${featured ? "w-[380px] h-[540px]" : "w-[240px] h-[420px]"}`}
    >
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md px-5 py-4">
        <h3 className={`${featured ? "text-xl" : "text-base"} font-medium`}>
          {project.title}
        </h3>

        {featured && (
          <p className="text-sm text-white/70 mt-2">
            {project.desc}
          </p>
        )}
      </div>
    </div>
  );
}
