import { Sparkles } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { whatsNew } from "@/lib/site-data";

export function ProductSection() {
  return (
    <section id="release-info" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
              {whatsNew.label}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {whatsNew.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-2xl mx-auto font-mono">
              {whatsNew.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsNew.items.map((item) => (
              <div
                key={item.title}
                className="bg-pareto-card-blue pareto-card p-8 hover:bg-pareto-card-blue-hover transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <Sparkles size={20} className="text-pareto-accent mt-1" />
                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-widest bg-pareto-mint text-pareto-text px-3 py-1 rounded-full font-bold">
                      {item.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-pareto-text mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
