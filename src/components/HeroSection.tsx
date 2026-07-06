import { FadeIn } from "@/components/FadeIn";
import { HeroWaveBackground } from "@/components/HeroWaveBackground";

export function HeroSection() {
  return (
    <section className="relative pt-44 pb-32 px-8 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <HeroWaveBackground />

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <FadeIn>
          <div className="inline-flex justify-center mb-12">
            <div className="w-64 h-64 bg-white rounded-3xl p-6 shadow-2xl shadow-pareto-text/5 border border-pareto-text/5 rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pareto-text rounded-full" />
                <div className="h-4 bg-pareto-text/10 w-24 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-pareto-text/10 w-full rounded" />
                <div className="h-2 bg-pareto-text/10 w-4/5 rounded" />
                <div className="h-2 bg-pareto-text/10 w-3/4 rounded" />
              </div>
              <div className="mt-8 flex justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-pareto-text/50">
                    Status
                  </div>
                  <div className="font-serif text-sm">Active</div>
                </div>
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-pareto-text/50">
                    Cycle
                  </div>
                  <div className="font-serif text-sm">Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            {["Enterprise Grade", "Automated", "Secure"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 border border-pareto-text/20 rounded-full text-[10px] uppercase tracking-widest text-pareto-text/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-pareto-text leading-[1.1] mb-8">
            Radically transforming <br /> expenses, automated.
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-pareto-text/70 leading-relaxed mb-12 font-mono">
            Building a centralized infrastructure of scalable financial controls
            that displace legacy spreadsheet workflows and manual origination
            processes at each stage of the expense lifecycle.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
