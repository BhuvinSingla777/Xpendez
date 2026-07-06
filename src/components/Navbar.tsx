"use client";

import { Shield } from "lucide-react";
import { MintButton } from "@/components/ui/MintButton";

interface NavbarProps {
  isScrolled: boolean;
}

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
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-pareto-text rounded-lg flex items-center justify-center">
            <Shield size={18} className="text-pareto-bg" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight text-pareto-text">
            Xpendez
          </span>
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs font-bold uppercase tracking-widest text-pareto-text">
          <a href="#product" className="hover:opacity-50 transition-opacity">
            Product
          </a>
          <a href="#features" className="hover:opacity-50 transition-opacity">
            Features
          </a>
          <a href="#workflow" className="hover:opacity-50 transition-opacity">
            Workflow
          </a>
        </div>

        <MintButton>Enter App</MintButton>
      </div>
    </nav>
  );
}
