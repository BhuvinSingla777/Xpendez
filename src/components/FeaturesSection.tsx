import { Activity, ArrowUpRight, Settings, Users, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const collapsedFeatures = [
  { icon: Activity, title: "End-to-end transparency", bg: "bg-pareto-card-slate" },
  { icon: Users, title: "Built for Enterprise", bg: "bg-pareto-card-green" },
  { icon: Settings, title: "Flexible configuration", bg: "bg-pareto-card-slate" },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 sticky top-32 self-start">
              <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
                Our Advantage
              </div>
              <h2 className="font-serif text-4xl text-pareto-text mb-6">
                Choose Efficiency
              </h2>
              <p className="text-sm text-pareto-text/70 font-mono">
                Infrastructure built for the future,
                <br /> available today.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="bg-pareto-card-green pareto-card p-8 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <Zap size={24} className="text-pareto-text" />
                    <h3 className="font-serif text-2xl text-pareto-text">
                      Lower operational drag
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                  A centralized infrastructure that compresses the costs of
                  traditional off-platform management and uses intelligent
                  routing to reduce the intermediary delays and complexity of
                  finance operations.
                </p>
              </div>

              {collapsedFeatures.map(({ icon: Icon, title, bg }) => (
                <div
                  key={title}
                  className={`${bg} pareto-card p-6 flex justify-between items-center hover:bg-pareto-card-blue-hover cursor-pointer transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-pareto-text" size={24} />
                    <h3 className="font-serif text-xl text-pareto-text">
                      {title}
                    </h3>
                  </div>
                  <ArrowUpRight size={20} className="text-pareto-text/50" />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
