
import React from "react";
import { ArrowRight } from "lucide-react";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { getFeaturedPortfolioItems } from "@/data/portfolio";
import { Link } from "react-router-dom";

const PortfolioHighlights = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const featuredProjects = getFeaturedPortfolioItems();
  
  React.useEffect(() => {
    // Simulate loading state for demo purposes
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-20 bg-[#f6f8fa] animate-fade-section" id="portfolio">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end mb-10 gap-4 justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-midnight mb-2">Portfolio Highlights</h2>
            <p className="text-lg text-midnight/70 font-poppins">Proven ventures, real-world adoption.</p>
          </div>
          <Link 
            to="/portfolio" 
            className="group inline-flex items-center gap-2 font-montserrat uppercase tracking-wide text-royalgold px-4 py-2 rounded-full border border-royalgold hover:bg-royalgold hover:text-midnight transition-all duration-200 shadow-gold text-sm"
          >
            Explore All Ventures
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredProjects.map((item) => (
            <PortfolioCard
              key={item.slug}
              item={item}
              isLoading={isLoading}
              featured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
