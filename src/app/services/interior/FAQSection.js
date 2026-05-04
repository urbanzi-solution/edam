"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "I already have a contractor. Can EDAM just manage the coordination?",
      answer:
        "Yes. We can come in as a third-party coordinator and supervisor, even if you have your own contractor. We provide an independent quality check and keep the project on timeline.",
    },
    {
      question: "What is your fee for construction coordination?",
      answer:
        "Coordination fees start from ₹50,000 for small projects and are typically 8–12% of project cost for larger builds. We provide a fixed coordination fee in writing before we start.",
    },
    {
      question: "How do you handle disputes between contractors?",
      answer:
        "We act as the neutral project authority. All contractor communications go through EDAM — you are not copied on every argument. Problems are resolved at our level.",
    },
     {
      question: "Can EDAM coordinate both interior and civil (structural) work simultaneously?",
      answer:
        "Yes. We coordinate all trades — civil, interior, MEP, painting — as a single schedule. This prevents the most common source of delays: one trade waiting on another.",
    },
     {
      question: "How often will I get updates on my project?",
      answer:
        "You receive weekly written updates with photos or a short video walkthrough. For critical milestones, we call immediately. You are never in the dark.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      <h2 className="text-3xl font-light mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="border border-white/20 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-[#d6c39a]/50"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-light">
                {faq.question}
              </h3>

              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-[#d6c39a]" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-4 text-white/70 text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
