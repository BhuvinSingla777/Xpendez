import { Lock, Shield, Smartphone, WifiOff } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { privacy } from "@/lib/site-data";

const icons = [WifiOff, Smartphone, Shield, Lock];

export function PrivacySection() {
  return (
    <section id="privacy" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {privacy.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-3xl mx-auto font-mono">
              {privacy.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {privacy.points.map((point, i) => {
              const Icon = icons[i];
              return (
                <div key={point.title} className="bg-pareto-card-blue pareto-card p-8">
                  <Icon size={24} className="text-pareto-accent mb-4" />
                  <h3 className="font-serif text-lg text-pareto-text mb-3">
                    {point.title}
                  </h3>
                  <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-pareto-card-green pareto-card p-10">
              <h3 className="font-serif text-2xl text-pareto-text mb-2">
                {privacy.guarantee.title}
              </h3>
              <p className="text-xs text-pareto-text/50 font-mono mb-6">
                {privacy.guarantee.subtitle}
              </p>
              <ul className="space-y-3">
                {privacy.guarantee.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-pareto-text/70 font-mono flex items-start gap-2"
                  >
                    <span className="text-pareto-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-pareto-card-slate pareto-card p-10 flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-pareto-text mb-4">
                {privacy.footer.title}
              </h3>
              <p className="text-sm text-pareto-text/70 leading-relaxed font-mono">
                {privacy.footer.description}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
