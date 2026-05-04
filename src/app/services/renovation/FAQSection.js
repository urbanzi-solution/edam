"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between renovation and remodelling?",
      answer:
        "Renovation refers to restoring or upgrading an existing space — new tiles, fresh paint, updated fixtures, improved layouts. Remodelling involves structural changes like removing walls or changing room functions. EDAM handles both, and our initial site visit will identify which approach your home needs.",
    },
    {
      question: "Can I stay in my home during a renovation?",
      answer:
        "For partial renovations (one room at a time), yes — we plan the work sequence to minimise disruption. For full-home renovations involving structural work, we recommend vacating for 3–6 weeks.",
    },
    {
      question: "How do you prevent renovation costs from exceeding the budget?",
      answer:
        "We lock a detailed Bill of Quantities (BOQ) before work begins. No work outside the agreed scope is started without written approval. We also maintain a 5–10% contingency buffer in all renovation estimates.",
    },
     {
      question: "Do you handle government approvals for structural changes?",
      answer:
        "For structural work requiring permits, we assist with documentation and liaise with the relevant Kerala local body authority. Permit fees are passed through at cost.",
    },
     {
      question: "What areas of Trivandrum do you handle renovation projects in?",
      answer:
        "We cover all areas including Pattom, Kazhakuttom, Kowdiar, Vazhuthacaud, Vattiyoorkavu, Technopark vicinity, Thiruvallam, Attingal, and Neyyattinkara.",
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
