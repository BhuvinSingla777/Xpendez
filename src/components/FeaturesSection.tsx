"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { principles } from "@/lib/site-data";

export function FeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-32 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 sticky top-32 self-start">
              <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
                {principles.label}
              </div>
              <h2 className="font-serif text-4xl text-pareto-text mb-6">
                {principles.title}
              </h2>
              <p className="text-sm text-pareto-text/70 font-mono">
                {principles.description}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {principles.items.map((item, index) => {
                const isOpen = openIndex === index;
                const bg =
                  index % 2 === 0
                    ? "bg-pareto-card-green"
                    : "bg-pareto-card-slate";

                return (
                  <div
                    key={item.title}
                    className={`${bg} pareto-card p-6 cursor-pointer transition-colors hover:bg-pareto-card-blue-hover`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-start gap-4">
                        <span className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mt-1">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="font-serif text-xl text-pareto-text">
                            {item.title}
                          </h3>
                          <p className="text-xs text-pareto-text/50 font-mono mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp size={20} className="text-pareto-text/50 shrink-0" />
                      ) : (
                        <ArrowUpRight size={20} className="text-pareto-text/50 shrink-0" />
                      )}
                    </div>
                    {isOpen && (
                      <p className="text-xs text-pareto-text/70 leading-relaxed font-mono mt-4 ml-10">
                        {item.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
