"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { FeaturesGridSection } from "@/components/FeaturesGridSection";
import { ManageSection } from "@/components/ManageSection";
import { TrackSection } from "@/components/TrackSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PrivacySection } from "@/components/PrivacySection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { SupportSection } from "@/components/SupportSection";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-pareto-bg selection:bg-pareto-mint selection:text-pareto-text">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <ProductSection />
      <FeaturesGridSection />
      <ManageSection />
      <TrackSection />
      <FeaturesSection />
      <PrivacySection />
      <PricingSection />
      <FAQSection />
      <SupportSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
