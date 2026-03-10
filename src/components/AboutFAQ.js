"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "What makes your interior design studio different?",
    answer:
      "Our work emphasizes planning, coordination, and execution discipline rather than trend-driven design alone.",
  },
  {
    question:
      "Do you work on both residential and commercial interiors?",
    answer:
      "Yes. We handle homes, offices, retail, and mixed-use interior projects.",
  },
  {
    question: "Is your approach suitable for renovation projects?",
    answer:
      "Yes. Our integrated process works well for both new interiors and existing spaces undergoing change.",
  },
];

export default function AboutFAQ() {
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
            Learn more about our approach, process, and interior design services.
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
