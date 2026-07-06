"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { faqs } from "@/lib/site-data";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[900px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
              FAQ
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-pareto-text/70 font-mono">
              Everything you need to know about Xpendez. Can&apos;t find the
              answer you&apos;re looking for? Feel free to contact our support
              team.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-pareto-card-blue pareto-card overflow-hidden"
                >
                  <button
                    className="w-full p-6 flex justify-between items-center text-left gap-4"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="font-serif text-lg text-pareto-text">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`text-pareto-text/50 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-pareto-text/50 mt-10 font-mono">
            Still have questions?{" "}
            <a href="#support" className="text-pareto-accent hover:underline">
              Contact our support team →
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
