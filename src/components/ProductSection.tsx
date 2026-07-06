import { Database, Lock, Shield } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { OutlineButton } from "@/components/ui/OutlineButton";

export function ProductSection() {
  return (
    <section id="product" className="py-24 px-8">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 bg-pareto-card-blue pareto-card p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="max-w-xl">
                <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-6">
                  XPD, the automated expense engine
                </h2>
                <p className="text-sm text-pareto-text/70 leading-relaxed mb-10">
                  Xpendez is a systematic protocol backed by real-time
                  institutional-grade data parsing. It centralizes your
                  financial outflow.
                </p>
                <div className="flex gap-4">
                  <OutlineButton>View Documentation</OutlineButton>
                </div>
              </div>

              <div className="flex gap-6 w-full md:w-auto">
                <div className="bg-pareto-bg/60 p-6 rounded-2xl border border-pareto-text/5 backdrop-blur-sm min-w-[140px]">
                  <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 mb-2">
                    Time Saved
                  </div>
                  <div className="font-serif text-3xl">40%</div>
                </div>
                <div className="bg-pareto-bg/60 p-6 rounded-2xl border border-pareto-text/5 backdrop-blur-sm min-w-[140px]">
                  <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 mb-2">
                    Visibility
                  </div>
                  <div className="font-serif text-3xl">100%</div>
                </div>
              </div>
            </div>

            <div className="bg-pareto-card-blue pareto-card p-10">
              <div className="w-16 h-16 rounded-full border-2 border-pareto-text flex items-center justify-center mb-8 relative">
                <div className="absolute inset-2 border border-pareto-text rounded-full border-dashed" />
                <Database size={24} />
              </div>
              <h3 className="font-serif text-2xl text-pareto-text mb-4">
                Composable
              </h3>
              <p className="text-xs text-pareto-text/70 leading-relaxed">
                Data is transferable, accessible, and seamlessly integrates
                into existing ERPs and accounting software for enhanced
                efficiency.
              </p>
            </div>

            <div className="bg-pareto-card-blue pareto-card p-10">
              <div className="w-16 h-16 flex items-center justify-center mb-8 relative">
                <Shield
                  size={64}
                  strokeWidth={1}
                  className="text-pareto-text absolute"
                />
                <span className="font-serif text-xl z-10">1/1</span>
              </div>
              <h3 className="font-serif text-2xl text-pareto-text mb-4">
                Verified
              </h3>
              <p className="text-xs text-pareto-text/70 leading-relaxed">
                Every transaction is mapped 1:1. Budgets are fully
                collateralized by real-time bank feeds and receipt OCR.
              </p>
            </div>

            <div className="bg-pareto-card-blue pareto-card p-10">
              <div className="w-16 h-16 rounded-2xl border-2 border-pareto-text flex items-center justify-center mb-8 relative bg-pareto-icon-bg">
                <Lock size={24} />
              </div>
              <h3 className="font-serif text-2xl text-pareto-text mb-4">
                Secure
              </h3>
              <p className="text-xs text-pareto-text/70 leading-relaxed">
                Although built for speed, infrastructure is protected by
                role-based access, shielding sensitive data in organizational
                hierarchies.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
