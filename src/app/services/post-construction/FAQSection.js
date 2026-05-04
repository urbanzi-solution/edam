"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "My builder says the home is ready. Do I still need a snagging inspection?",
      answer:
        "Always. Independent snagging by EDAM regularly finds 30–80 defects in newly completed homes in Trivandrum — ranging from minor paint issues to serious plumbing misalignments. ",
    },
    {
      question: "Can you do post-construction for a project that EDAM did not design?",
      answer:
        "Yes. Our post-construction service is available independently of whether EDAM handled the design or construction. We provide an unbiased assessment.",
    },
    {
      question: "How long does the post-construction process take?",
      answer:
        "Snagging inspection: 1–2 days. Defect rectification (by contractor): 3–10 days. Deep cleaning: 1–2 days. Full post-construction package: typically 7–14 days from start to key handover.",
    },
    {
      question: "What is post-construction cleaning and why does it cost more than regular cleaning?",
      answer:
        "Construction leaves fine silica dust embedded in floors, adhesive on tiles, paint spatter on fixtures, and cement residue in bathrooms. Post-construction cleaning uses specialised chemicals and equipment — it is not comparable to regular house cleaning.",
    },
    {
      question: "What if defects are found after we move in?",
      answer:
        "If EDAM executed the project, all defect rectifications within 12 months of handover are covered under our post-project warranty (subject to fair wear and tear). We put this in writing.",
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
