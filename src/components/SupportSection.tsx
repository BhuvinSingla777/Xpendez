import { Mail, MapPin, Clock } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { support, LINKS } from "@/lib/site-data";

export function SupportSection() {
  return (
    <section id="support" className="py-24 px-8 border-t border-pareto-text/10">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold mb-4">
              Help & Support
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-pareto-text mb-4">
              {support.title}
            </h2>
            <p className="text-sm text-pareto-text/70 max-w-2xl mx-auto font-mono">
              {support.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {support.channels.map((channel) => (
              <div
                key={channel.title}
                className="bg-pareto-card-blue pareto-card p-8 flex flex-col"
              >
                <h3 className="font-serif text-xl text-pareto-text mb-1">
                  {channel.title}
                  {"subtitle" in channel && channel.subtitle && (
                    <span className="text-xs text-pareto-text/40 font-mono ml-2">
                      ({channel.subtitle})
                    </span>
                  )}
                </h3>
                <p className="text-xs text-pareto-text/70 leading-relaxed font-mono mb-6 flex-1">
                  {channel.description}
                </p>
                {channel.disabled ? (
                  <span className="text-[10px] uppercase tracking-widest text-pareto-text/30 font-mono">
                    {channel.action}
                  </span>
                ) : (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-widest text-pareto-accent font-bold hover:underline"
                  >
                    {channel.action}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-pareto-card-green pareto-card p-10">
              <h3 className="font-serif text-2xl text-pareto-text mb-2">
                Send us a message
              </h3>
              <p className="text-xs text-pareto-text/50 font-mono mb-8">
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>
              <form className="space-y-4">
                {["Name", "Email", "Subject", "Message"].map((field) => (
                  <div key={field}>
                    <label className="text-[10px] uppercase tracking-widest text-pareto-text/50 font-mono block mb-2">
                      {field}
                    </label>
                    {field === "Message" ? (
                      <textarea
                        rows={4}
                        placeholder={
                          field === "Message"
                            ? "Tell us more about your question or issue..."
                            : undefined
                        }
                        className="w-full bg-pareto-bg/60 border border-pareto-text/10 rounded-2xl px-4 py-3 text-sm font-mono text-pareto-text outline-none focus:border-pareto-accent resize-none"
                      />
                    ) : (
                      <input
                        type={field === "Email" ? "email" : "text"}
                        placeholder={
                          field === "Name"
                            ? "Your name"
                            : field === "Email"
                              ? "your@email.com"
                              : "How can we help?"
                        }
                        className="w-full bg-pareto-bg/60 border border-pareto-text/10 rounded-full px-4 py-3 text-sm font-mono text-pareto-text outline-none focus:border-pareto-accent"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-pareto-mint text-pareto-text font-mono font-bold text-xs tracking-wider uppercase px-8 py-3 rounded-full hover:scale-105 transition-transform"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-pareto-card-slate pareto-card p-10">
                <h3 className="font-serif text-2xl text-pareto-text mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-pareto-accent mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 font-mono mb-1">
                        Email
                      </div>
                      <a
                        href={LINKS.email}
                        className="text-sm text-pareto-text font-mono hover:text-pareto-accent"
                      >
                        {support.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-pareto-accent mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 font-mono mb-1">
                        Location
                      </div>
                      <p className="text-sm text-pareto-text font-mono">
                        {support.contact.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock size={18} className="text-pareto-accent mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-pareto-text/50 font-mono mb-1">
                        Response Time
                      </div>
                      <p className="text-sm text-pareto-text font-mono">
                        {support.contact.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-pareto-card-blue pareto-card p-10">
                <h3 className="font-serif text-xl text-pareto-text mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {support.quickLinks.map((link) => (
                    <li key={link}>
                      <span className="text-xs text-pareto-text/70 font-mono hover:text-pareto-accent cursor-pointer">
                        → {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
