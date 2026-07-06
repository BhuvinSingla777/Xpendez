import { FadeIn } from "@/components/FadeIn";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { howItWorks, LINKS } from "@/lib/site-data";

export function ManageSection() {
  return (
    <section id="how-it-works" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {howItWorks.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-2xl mx-auto font-mono">
              {howItWorks.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 bg-pareto-card-blue pareto-card p-12 flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="font-serif text-4xl text-pareto-text mb-6">
                  Get Started
                </h3>
                <p className="text-sm text-pareto-text/70 leading-relaxed font-mono">
                  From importing your bank statements to generating insights —
                  Xpendez makes financial management effortless in just minutes.
                </p>
              </div>
              <div className="flex justify-center py-12">
                <div className="relative w-48 h-48">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 -translate-x-1/2 border-2 border-pareto-text bg-pareto-bg rounded-full w-32 h-12 shadow-[0_4px_0_#0B1A16]"
                      style={{ bottom: `${i * 20}px`, zIndex: 10 - i }}
                    />
                  ))}
                  <div className="absolute right-0 top-0 font-serif text-6xl text-pareto-text italic">
                    ₹
                  </div>
                </div>
              </div>
              <a href={LINKS.android} target="_blank" rel="noopener noreferrer">
                <OutlineButton className="w-full">Download Free</OutlineButton>
              </a>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-x-12 gap-y-10 content-center">
              {howItWorks.steps.map((step) => (
                <div key={step.step}>
                  <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-2">
                    {step.step}
                  </div>
                  <h4 className="font-serif text-xl text-pareto-text mb-3">
                    {step.title}
                  </h4>
                  <p className="text-xs text-pareto-text/70 leading-relaxed font-mono">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
