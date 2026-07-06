import { FadeIn } from "@/components/FadeIn";
import { OutlineButton } from "@/components/ui/OutlineButton";

const manageSteps = [
  {
    title: "1. Define Hierarchies",
    desc: "Each workflow is uniquely structured based on employee profiles, supported departments, and limits.",
  },
  {
    title: "2. Execute Policies",
    desc: "Formalize spending rules by digitizing agreements that outline employee limits and manager rights.",
  },
  {
    title: "3. Card Deployment",
    desc: "Allocate digital or physical cards to teams, receive real-time notifications in return.",
  },
  {
    title: "4. Seamless Verification",
    desc: "Access eligibility is verified through continuous OCR, ensuring compliance and tax readiness.",
  },
];

export function ManageSection() {
  return (
    <section id="workflow" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 bg-pareto-card-blue pareto-card p-12 flex flex-col justify-between min-h-[600px]">
              <div>
                <h2 className="font-serif text-4xl text-pareto-text mb-6">
                  Manage
                </h2>
                <p className="text-sm text-pareto-text/70 leading-relaxed">
                  Expand your operational capacity with structured approval
                  strategies tailored to diverse team profiles. Self-onboard
                  seamlessly via our compliant architecture, so you can focus
                  on optimizing growth.
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
                    %
                  </div>
                </div>
              </div>
              <div>
                <OutlineButton className="w-full">
                  Initialize Setup
                </OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-x-12 gap-y-16 content-center">
              {manageSteps.map((step) => (
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
