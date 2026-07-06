import { Shield } from "lucide-react";

const resources = ["Blog", "Documentation", "Brand Kit", "Governance"];
const products = ["XPD_CORE", "XPD_ANALYTICS", "XPD_CARDS"];
const socials = ["X", "M", "D", "IN", "G", "W"];

export function Footer() {
  return (
    <footer className="bg-pareto-footer text-pareto-footer-text pt-24 pb-12 px-8 font-mono border-t border-pareto-text">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-16 text-pareto-bg">
              <Shield size={24} />
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Xpendez
              </span>
            </div>

            <div className="mb-4 text-xs">Subscribe to our newsletter</div>
            <div className="flex border-b border-pareto-footer-text/30 pb-2 max-w-sm">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-none outline-none text-pareto-bg text-sm w-full placeholder:text-pareto-footer-text/50"
              />
              <button className="text-[10px] uppercase tracking-widest hover:text-pareto-bg transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs mb-8">Resources</div>
            <ul className="space-y-6 text-[10px] uppercase tracking-widest text-pareto-bg">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-pareto-mint transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs mb-8">Products</div>
            <ul className="space-y-6 text-[10px] uppercase tracking-widest text-pareto-bg">
              {products.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-pareto-mint transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-t border-pareto-footer-text/20 pt-8 text-[10px] uppercase tracking-widest">
          <div className="flex gap-4">
            {socials.map((social) => (
              <div
                key={social}
                className="w-8 h-8 rounded-full border border-pareto-footer-text/50 flex items-center justify-center hover:border-pareto-bg hover:text-pareto-bg cursor-pointer transition-all"
              >
                {social}
              </div>
            ))}
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-pareto-bg transition-colors">
              Enter App
            </a>
            <a href="#" className="hover:text-pareto-bg transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-pareto-bg transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-[9px] leading-relaxed text-pareto-footer-text/50 text-justify">
          All content available on this Website is general in nature, not
          directed or tailored to any particular person, and is for
          informational purposes only. Neither the Website nor any of its
          content is offered as financial advice and should not be deemed as
          financial advice or a recommendation to purchase or sell any specific
          software. The information contained herein reflects the opinions and
          projections of Xpendez as of the date hereof, which are subject to
          change without notice at any time. Xpendez does not represent that any
          opinion or projection will be realized. Neither Xpendez nor any of
          its advisors, officers, directors, or affiliates represents that the
          information presented on this Website is accurate, current, or
          complete, and such information is subject to change without notice.
          Individuals are urged to consult with their own technical or legal
          advisers before entering into any enterprise contract.
        </div>
      </div>
    </footer>
  );
}
