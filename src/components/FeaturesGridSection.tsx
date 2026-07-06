import { FadeIn } from "@/components/FadeIn";
import { features, featuresSection } from "@/lib/site-data";

export function FeaturesGridSection() {
  return (
    <section id="features" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {featuresSection.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-2xl mx-auto font-mono">
              {featuresSection.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-pareto-card-blue pareto-card p-8 hover:bg-pareto-card-blue-hover transition-colors"
              >
                <span className="text-[9px] uppercase tracking-widest text-pareto-accent font-bold mb-4 block">
                  {feature.badge}
                </span>
                <h3 className="font-serif text-xl text-pareto-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
