import { FadeIn } from "@/components/FadeIn";
import { experience, missionVision } from "@/lib/site-data";

export function TrackSection() {
  return (
    <>
      <section className="py-24 px-8 border-t border-pareto-text/10">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-pareto-card-green pareto-card p-12">
                <h3 className="font-serif text-3xl text-pareto-text mb-6">
                  {missionVision.mission.title}
                </h3>
                <p className="text-sm text-pareto-text/70 leading-relaxed font-mono">
                  {missionVision.mission.text}
                </p>
              </div>
              <div className="bg-pareto-card-slate pareto-card p-12">
                <h3 className="font-serif text-3xl text-pareto-text mb-6">
                  {missionVision.vision.title}
                </h3>
                <p className="text-sm text-pareto-text/70 leading-relaxed font-mono">
                  {missionVision.vision.text}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="screenshots" className="py-24 px-8 border-t border-pareto-text/10">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
                  {experience.label}
                </div>
                <h2 className="font-serif text-4xl text-pareto-text mb-6">
                  {experience.title}
                </h2>
                <p className="text-sm text-pareto-text/70 leading-relaxed font-mono">
                  {experience.description}
                </p>
              </div>
              <div className="lg:col-span-7 bg-pareto-card-blue pareto-card p-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  {experience.highlights.map((item) => (
                    <div
                      key={item}
                      className="bg-pareto-bg/60 rounded-2xl p-4 border border-pareto-text/5"
                    >
                      <span className="text-xs text-pareto-text/70 font-mono">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
