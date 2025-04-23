
import React from "react";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import AssetMoviesLogo from "@/assets/logos/1assetmovies-logo.png";

const projects = [
  {
    venture_name: "1 Asset Movies",
    key_impact: "Web3 streaming rights and fan experiences.",
    image: AssetMoviesLogo,
    slug: "1-asset-movies",
  },
  {
    venture_name: "BigWater",
    key_impact: "Decentralized water rights platform.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
    slug: "bigwater",
  },
  {
    venture_name: "Expert Circles",
    key_impact: "Tokenized access to expertise networks.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    slug: "expert-circles",
  },
  {
    venture_name: "RDM Wallet",
    key_impact: "Programmable consent layers for financial decisions.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80",
    slug: "rdm-wallet",
  },
];

const PortfolioHighlights = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  
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
          <a 
            href="#" 
            className="group inline-flex items-center gap-2 font-montserrat uppercase tracking-wide text-royalgold px-4 py-2 rounded-full border border-royalgold hover:bg-royalgold hover:text-midnight transition-all duration-200 shadow-gold text-sm"
          >
            Explore All Ventures
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {projects.map((p) => (
            <a
              href={`#${p.slug}`}
              key={p.slug}
              className="block bg-white rounded-xl shadow-md border border-royalgold/10 overflow-hidden 
                        hover:shadow-glow-gold hover:border-royalgold/30 group transition-all duration-300
                        hover:-translate-y-1"
            >
              <div className="h-44 w-full overflow-hidden relative flex items-center justify-center">
                {isLoading ? (
                  <Skeleton className="w-full h-full" />
                ) : (
                  // If 1 Asset Movies, show logo at a good size/fit, else show cover image
                  p.venture_name === "1 Asset Movies" ? (
                    <img 
                      src={p.image} 
                      alt={p.venture_name} 
                      className="max-h-28 max-w-[80%] object-contain mx-auto transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <img 
                      src={p.image} 
                      alt={p.venture_name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                  )
                )}
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg font-poppins mb-1 text-midnight group-hover:text-royalgold transition-colors">
                  {isLoading ? <Skeleton className="h-6 w-3/4" /> : p.venture_name}
                </div>
                <div className="text-midnight/70 text-sm">
                  {isLoading ? <Skeleton className="h-4 w-full" /> : p.key_impact}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHighlights;
