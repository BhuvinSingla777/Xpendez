import { Shield } from "lucide-react";
import { footer, LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-pareto-footer text-pareto-footer-text pt-24 pb-12 px-8 font-mono border-t border-pareto-text">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-8 text-pareto-bg">
              <Shield size={24} />
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Xpendez
              </span>
            </div>
            <p className="text-xs text-pareto-footer-text leading-relaxed mb-12 max-w-md">
              {footer.tagline}
            </p>

            <div className="flex gap-4">
              {[
                { label: "Twitter", href: LINKS.twitter },
                { label: "Facebook", href: LINKS.facebook },
                { label: "Instagram", href: LINKS.instagram },
                { label: "YouTube", href: LINKS.youtube },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-pareto-footer-text/50 flex items-center justify-center hover:border-pareto-bg hover:text-pareto-bg transition-all text-[10px]"
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs mb-8 text-pareto-bg">Product</div>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-pareto-bg">
              {footer.product.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-pareto-mint transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs mb-8 text-pareto-bg">Support</div>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-pareto-bg mb-8">
              {footer.support.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-pareto-mint transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-xs mb-4 text-pareto-bg">Contact</div>
            <a
              href={LINKS.email}
              className="text-[10px] text-pareto-bg hover:text-pareto-mint transition-colors block mb-2"
            >
              moneyexpensemanager@gmail.com
            </a>
            <p className="text-[10px] text-pareto-footer-text">
              Indore, India
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-pareto-footer-text/20 pt-8 text-[10px] uppercase tracking-widest">
          <p className="text-pareto-footer-text">{footer.copyright}</p>
          <div className="flex gap-8">
            {footer.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-pareto-bg hover:text-pareto-mint transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
