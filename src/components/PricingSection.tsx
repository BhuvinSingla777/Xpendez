import { FadeIn } from "@/components/FadeIn";
import { pricing } from "@/lib/site-data";

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
              {pricing.label}
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {pricing.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-2xl mx-auto font-mono">
              {pricing.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pricing.plans.map((plan) => (
              <div
                key={plan.name}
                className={`pareto-card p-8 flex flex-col ${
                  plan.badge === "Most Popular"
                    ? "bg-pareto-card-green border-2 border-pareto-mint"
                    : "bg-pareto-card-blue"
                }`}
              >
                {plan.badge && (
                  <span className="text-[9px] uppercase tracking-widest bg-pareto-mint text-pareto-text px-3 py-1 rounded-full font-bold mb-4 self-start">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-serif text-2xl text-pareto-text mb-1">
                  {plan.name}
                </h3>
                <p className="text-[10px] text-pareto-text/50 font-mono mb-4">
                  {plan.subtitle}
                </p>
                <div className="font-serif text-4xl text-pareto-text mb-1">
                  {plan.price}
                </div>
                {"credits" in plan && (
                  <div className="text-xs text-pareto-accent font-mono mb-1">
                    {plan.credits}
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 mb-6">
                  {plan.period}
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-[10px] text-pareto-text/70 font-mono flex items-start gap-2"
                    >
                      <span className="text-pareto-accent shrink-0">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
