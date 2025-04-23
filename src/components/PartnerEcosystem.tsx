
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import StoryProtocolLogo from "@/assets/logos/logo-story-protocol.png";

// Partner data structure that simulates a CMS collection
export interface Partner {
  name: string;
  logo: string;
  url?: string;
  category_tag: string[];
  display_priority?: number;
}

// Partner data
export const partners: Partner[] = [
  {
    name: "Story Protocol",
    logo: StoryProtocolLogo,
    url: "https://storyprotocol.xyz",
    category_tag: ["Web3", "Media"]
  },
  {
    name: "1 Asset Movies",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=150&q=80",
    url: "https://1assetmovies.com",
    category_tag: ["Media"]
  },
  {
    name: "ZeroTo3",
    logo: "https://images.unsplash.com/photo-1639322537232-5f60e1929841?auto=format&fit=crop&w=150&q=80",
    url: "https://zeroto3.io",
    category_tag: ["Web3", "Tech"]
  },
  {
    name: "TSL Studios",
    logo: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=150&q=80",
    url: "https://tslstudios.com",
    category_tag: ["Media"]
  },
  {
    name: "NC Global",
    logo: "https://images.unsplash.com/photo-1643104177201-e01a1a87c58f?auto=format&fit=crop&w=150&q=80",
    url: "https://ncglobal.io",
    category_tag: ["Fintech"]
  },
  {
    name: "Kula DAO",
    logo: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=150&q=80",
    url: "https://kuladao.xyz",
    category_tag: ["Web3", "DAO"]
  },
  {
    name: "CrowdFundJunction",
    logo: "https://images.unsplash.com/photo-1636632520810-27b466a9494b?auto=format&fit=crop&w=150&q=80",
    url: "https://crowdfundjunction.com",
    category_tag: ["Fintech", "Web3"]
  },
  {
    name: "Ceylon Cash",
    logo: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&w=150&q=80",
    url: "https://ceyloncash.io",
    category_tag: ["Fintech"]
  },
  {
    name: "CW3",
    logo: "https://images.unsplash.com/photo-1639322537232-5f60e1929841?auto=format&fit=crop&w=150&q=80",
    url: "https://cw3.network",
    category_tag: ["Web3"]
  },
  {
    name: "Singapore FinTech Festival",
    logo: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=150&q=80",
    url: "https://singaporefintech.org",
    category_tag: ["Events", "Fintech"]
  },
  {
    name: "GITEX Asia",
    logo: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&w=150&q=80",
    url: "https://gitex.asia",
    category_tag: ["Events", "Tech"]
  }
];

const PartnerEcosystem = () => (
  <section className="w-full py-16 bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 animate-fade-section" id="ecosystem">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-poppins text-midnight mb-3">Trusted by a Growing Ecosystem</h2>
        <p className="text-midnight/70 max-w-2xl mx-auto">
          Our work is strengthened by visionary partners across Web3, media, fintech, and digital infrastructure.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6">
        {partners.slice(0, 9).map((partner) => (
          <TooltipProvider key={partner.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center w-32 md:w-40 group"
                >
                  <div className="bg-white rounded-xl shadow-md border border-royalgold/10 p-3 w-full h-24 flex items-center justify-center mb-3
                    hover:shadow-glow-gold hover:border-royalgold/40 transition-all duration-300">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-16 max-w-[80%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300" 
                      loading="lazy"
                    />
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{partner.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link 
          to="/ecosystem-partners" 
          className="group inline-flex items-center gap-2 font-montserrat uppercase tracking-wide text-royalgold px-6 py-2.5 rounded-full border border-royalgold hover:bg-royalgold hover:text-midnight transition-all duration-200 shadow-gold text-sm"
        >
          View Full Ecosystem
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default PartnerEcosystem;
