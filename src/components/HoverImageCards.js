"use client";

import { useState } from "react";
import Link from "next/link";

const cards = [
  {
    id: 1,
    title: "Interior Design",
    img: "/img1.jpg",
    link: "/services/interior-design",
  },
  {
    id: 2,
    title: "Living Areas",
    img: "/img2.jpg",
    link: "/services/construction",
  },
  {
    id: 3,
    title: "Office Areas",
    img: "/img3.jpg",
    link: "/services/mep",
  },
  {
    id: 4,
    title: "Dining Areas",
    img: "/img4.jpg",
    link: "/services/renovation",
  },
];

export default function HoverImageCards() {
  const [active, setActive] = useState(null);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? cards.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            OUR LATEST PROJECTS
          </h2>
        </div>

        {/* ================== MOBILE CAROUSEL ================== */}
        <div className="relative md:hidden overflow-hidden h-[420px]">

          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-full h-full relative flex-shrink-0"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="absolute bottom-6 left-6 right-6 bg-[#c4936d] text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white px-3 py-2 rounded-full"
          >
            ›
          </button>
        </div>

        {/* ================== DESKTOP HOVER LAYOUT ================== */}
        <div className="hidden md:flex gap-4 h-[420px]">

          {cards.map((card, index) => (
            <Link
              key={card.id}
              href={card.link}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`
                relative overflow-hidden rounded-2xl transition-all duration-500
                ${active === index ? "flex-[2]" : "flex-1"}
              `}
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 left-6 right-6 bg-[#c4936d] text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
