import { FadeIn } from "@/components/FadeIn";
import { HeroWaveBackground } from "@/components/HeroWaveBackground";
import { MintButton } from "@/components/ui/MintButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { hero, LINKS } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="relative pt-44 pb-32 px-8 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <HeroWaveBackground />

      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <FadeIn>
          <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-6">
            {hero.badge}
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="inline-flex justify-center mb-12">
            <div className="w-64 h-64 bg-white rounded-3xl p-6 shadow-2xl shadow-pareto-text/5 border border-pareto-text/5 rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-pareto-text rounded-full" />
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-pareto-text/50">
                    Dashboard
                  </div>
                  <div className="font-serif text-sm">Xpendez</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-pareto-text/10 w-full rounded" />
                <div className="h-2 bg-pareto-text/10 w-4/5 rounded" />
                <div className="h-2 bg-pareto-text/10 w-3/4 rounded" />
              </div>
              <div className="mt-8 flex justify-between">
                <div>
                  <div className="text-[8px] uppercase tracking-wider text-pareto-text/50">
                    Budget
                  </div>
                  <div className="font-serif text-sm">On Track</div>
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
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 border border-pareto-text/20 rounded-full text-[10px] uppercase tracking-widest text-pareto-text/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-pareto-text leading-[1.1] mb-4">
            {hero.title}
            <br />
            <span className="italic">{hero.brand}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-pareto-text/70 leading-relaxed mb-4 font-mono">
            {hero.description}
          </p>
          <p className="max-w-2xl mx-auto text-sm text-pareto-text/60 leading-relaxed mb-8 font-mono">
            {hero.subdescription}
          </p>
          <p className="text-xs text-pareto-text/50 mb-10 font-mono">{hero.cta}</p>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <a href={LINKS.android} target="_blank" rel="noopener noreferrer">
              <MintButton>Download Free</MintButton>
            </a>
            <OutlineButton>Watch Demo</OutlineButton>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex gap-12 justify-center flex-wrap">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-pareto-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-pareto-text/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
