"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why does MEP planning matter if my contractor can handle it?",
      answer:
        "Most home renovation problems in Kerala — water leaks, circuit failures, inadequate ventilation — trace back to MEP improvised without proper planning. An MEP-coordinated layout prevents rework, reduces material waste, and ensures your home meets safety codes.",
    },
    {
      question: "Can EDAM handle MEP for an ongoing construction project?",
      answer:
        "Yes. We can join as MEP coordinators at any stage of construction — pre-slab, post-slab, or during finishing — though earlier involvement gives better results.",
    },
    {
      question: "What Indian standards apply to residential MEP in Kerala?",
      answer:
        "Key standards include IS 3764 (electrical safety), IS 1732 (copper conductors), NBC Part 8 (services), and Kerala PWD Plumbing Regulations. EDAM designs to these standards by default.",
    },
    {
      question: "Do you supply MEP materials or only provide supervision?",
      answer:
        "We offer both: full supply-and-fix service using ISI-marked materials, or design-and-supervision only if you prefer your own procurement.",
    },
    {
      question: "How long does MEP work take for a 2BHK flat?",
      answer:
        "In a new build: 7–14 days for rough-in phase. In a renovation: 5–10 days. We schedule MEP work to align with civil and carpentry milestones.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
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
