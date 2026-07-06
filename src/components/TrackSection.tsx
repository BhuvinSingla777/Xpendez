import { Repeat, Search } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { OutlineButton } from "@/components/ui/OutlineButton";

const trackSteps = [
  {
    title: "1. Capture Data",
    desc: "Prospective receipts undergo a due diligence extraction process before gaining access to the ledger.",
  },
  {
    title: "2. Rule Configuration",
    desc: "Administrators set key parameters like merchant mapping, tax codes, and preferred accounting syncs.",
  },
  {
    title: "3. Report Generation",
    desc: "Once a cycle closes, teams receive reports directly into their designated inbox.",
  },
  {
    title: "4. Final Reconciliation",
    desc: "The engine automates accounting. Administrators simply review exceptions at the end of each cycle.",
  },
];

export function TrackSection() {
  return (
    <section className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 bg-pareto-card-slate pareto-card p-12 flex flex-col justify-between min-h-[600px] order-last lg:order-first">
              <div>
                <h2 className="font-serif text-4xl text-pareto-text mb-6">
                  Track
                </h2>
                <p className="text-sm text-pareto-text/70 leading-relaxed">
                  Streamline the creation and reporting of your ledger -
                  categorize rates, lock periods, withdrawal cycles, and
                  construct the reporting line that works best for you.
                </p>
              </div>
              <div className="flex justify-center py-12">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <Repeat
                    size={120}
                    strokeWidth={0.5}
                    className="text-pareto-text absolute animate-[spin_10s_linear_infinite]"
                  />
                  <div className="w-20 h-20 bg-pareto-card-blue rounded-full border border-pareto-text z-10 flex items-center justify-center">
                    <Search size={24} className="text-pareto-text" />
                  </div>
                </div>
              </div>
              <div>
                <OutlineButton className="w-full">View Analytics</OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-x-12 gap-y-16 content-center">
              {trackSteps.map((step) => (
                <div key={step.title}>
                  <h4 className="font-serif text-xl text-pareto-text mb-4">
                    {step.title}
                  </h4>
                  <p className="text-xs text-pareto-text/70 leading-relaxed">
                    {step.desc}
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
