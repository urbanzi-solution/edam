"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question:
      "How much does interior design cost in Trivandrum?",
    answer:
      "Costs vary by scope. A standard 2BHK interior design package in Trivandrum typically starts from ₹3.5–5 lakh for design + execution. Renovation and full fit-out projects range from ₹7–20 lakh depending on materials, area, and finishes. We provide a detailed, itemised estimate after a free site visit.",
  },
  {
    question: "How long does an interior design project take?",
    answer:
      "A standard 2BHK fit-out takes 45–75 days from design approval to handover. Renovation projects vary based on structural changes — typically 30–90 days. We provide a project timeline before work begins.",
  },
  {
    question: ": Do you provide a 3D visualisation before starting?",
    answer:
      "Yes. Every project begins with photorealistic 3D renders so you can see exactly how your space will look before any physical work starts. Revisions are included in the design phase.",
  },
  {
    question: "What areas of Trivandrum do you serve?",
    answer:
      "We serve all areas of Trivandrum including Pattom, Kazhakuttom, Technopark, Kowdiar, Vazhuthacaud, Vattiyoorkavu, Thiruvallam, and surrounding regions.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. EDAM is an end-to-end studio. We handle design, 3D visualisation, construction coordination, MEP services, and post-construction handover — all under one roof.",
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
