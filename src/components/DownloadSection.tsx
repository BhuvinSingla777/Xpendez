import { FadeIn } from "@/components/FadeIn";
import { MintButton } from "@/components/ui/MintButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { download, LINKS } from "@/lib/site-data";

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="bg-pareto-card-blue pareto-card p-12 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
                  {download.title}
                </h2>
                <p className="text-sm text-pareto-text/70 leading-relaxed font-mono mb-8">
                  {download.description}
                </p>
                <h3 className="font-serif text-2xl text-pareto-text mb-2">
                  {download.subtitle}
                </h3>
                <p className="text-xs text-pareto-text/60 font-mono mb-8">
                  {download.subdescription}
                </p>
                <div className="flex gap-4 flex-wrap mb-8">
                  <a
                    href={LINKS.android}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MintButton>Get on Android</MintButton>
                  </a>
                  <OutlineButton disabled>iOS Coming soon...</OutlineButton>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {download.perks.map((perk) => (
                    <span
                      key={perk}
                      className="text-[10px] text-pareto-text/60 font-mono flex items-center gap-2"
                    >
                      <span className="text-pareto-accent">✓</span>
                      {perk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {download.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-pareto-bg/60 rounded-2xl p-6 text-center border border-pareto-text/5"
                    >
                      <div className="font-serif text-3xl text-pareto-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-pareto-text/50">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-pareto-text/50 text-center font-mono">
                  {download.trust}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
