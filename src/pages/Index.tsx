
import React from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ServicesGrid from "@/components/ServicesGrid"; // updated import
import PortfolioHighlights from "@/components/PortfolioHighlights";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import FounderHighlight from "@/components/FounderHighlight";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Header />
      <main>
        <HeroBanner />
        <ServicesGrid />
        <PortfolioHighlights />
        <PartnerEcosystem />
        <FounderHighlight />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
