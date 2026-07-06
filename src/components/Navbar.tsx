"use client";

import { Shield } from "lucide-react";
import { MintButton } from "@/components/ui/MintButton";
import { LINKS } from "@/lib/site-data";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#release-info", label: "What's New" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#support", label: "Help Center" },
];

export function Navbar({ isScrolled }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <div
        className={`max-w-[1400px] mx-auto flex justify-between items-center px-8 py-4 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-pareto-nav/95 backdrop-blur-md shadow-sm border border-pareto-text/5"
            : "bg-pareto-nav/80 backdrop-blur-sm"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pareto-text rounded-lg flex items-center justify-center">
            <Shield size={18} className="text-pareto-bg" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight text-pareto-text">
            Xpendez
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-pareto-text">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:opacity-50 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href={LINKS.android} target="_blank" rel="noopener noreferrer">
          <MintButton>Download</MintButton>
        </a>
      </div>
    </nav>
  );
}
