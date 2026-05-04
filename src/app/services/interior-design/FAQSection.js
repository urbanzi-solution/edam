"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is included in an interior design package from EDAM?",
      answer:
        "Our standard package includes: initial consultation, concept design, 3D visualisation (2 rounds of revisions), material selection, bill of quantities, contractor coordination, site supervision, and post-completion snagging. We do not disappear after handing over drawings.",
    },
    {
      question: "How long does a 2BHK interior project take in Trivandrum?",
      answer:
        "Typically 45–75 days from design approval to handover. The design phase takes 2–3 weeks. Execution (civil, carpentry, electrical, painting) takes 5–8 weeks. We provide a detailed milestone schedule before work starts.",
    },
    {
      question: "Can I choose my own materials or furniture?",
      answer:
        "Yes. We present curated options within your budget, but client preferences always take priority. We have sourcing relationships in Trivandrum and can also work with materials you have already purchased.",
    },
     {
      question: "Do you handle only design, or also the physical work?",
      answer:
        "We handle both. EDAM manages the complete fit-out — civil, carpentry, electrical, plumbing, painting, and furniture placement. You deal with one team throughout.",
    },
     {
      question: "What if I want changes after seeing the 3D visualisation?",
      answer:
        "Two rounds of revisions are included in the design phase at no extra charge. Additional revisions are billed at ₹2,000–5,000 per round depending on scope.",
    },
     {
      question: "Do you take on small projects — single rooms or just kitchens?",
      answer:
        "Yes. We take on individual room makeovers (bedrooms, kitchens, bathrooms) as well as full-home projects. Minimum project value is ₹75,000.",
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
