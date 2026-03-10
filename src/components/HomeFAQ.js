"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question:
      "What types of interior projects do you handle in Trivandrum?",
    answer:
      "We work on residential, commercial, renovation, and remodelling projects, offering integrated design and execution services tailored to each space.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Yes. Our studio manages design, planning, coordination, and execution as a continuous process to maintain clarity and quality.",
  },
  {
    question: "When should I contact an interior designer?",
    answer:
      "Ideally, before construction or renovation begins. Early involvement helps improve planning, budgeting, and execution outcomes.",
  },
  {
    question: "Do you take projects outside Trivandrum?",
    answer:
      "Our primary focus is Trivandrum, but select projects may be considered based on scope and requirements.",
  },
];

export default function HomeFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-28">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-white/60 text-sm leading-relaxed">
            Clear answers to common questions about our interior design services in Trivandrum.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-6"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-white text-lg font-medium"
              >
                {faq.question}

                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-white/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
