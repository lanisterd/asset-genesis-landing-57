
// 1 Asset Exchange Landing Page

import HeroBanner from "@/components/HeroBanner";
import SolutionsGrid from "@/components/SolutionsGrid";
import PortfolioHighlights from "@/components/PortfolioHighlights";
import PartnerEcosystem from "@/components/PartnerEcosystem";
import FounderHighlight from "@/components/FounderHighlight";

const Index = () => {
  return (
    <main className="w-full min-h-screen bg-white font-poppins">
      <HeroBanner />
      <SolutionsGrid />
      <PortfolioHighlights />
      <PartnerEcosystem />
      <FounderHighlight />
    </main>
  );
};

export default Index;
