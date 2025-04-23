
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Placeholder logo image (replace with real assets as needed)
const defaultLogo = "https://placehold.co/120x120/FFD700/010c43?text=LOGO";

// Partner data structure updated to match provided CSV/example
export interface Partner {
  name: string;
  logo: string;
  url: string;
  category_tag: string[];
  display_priority: number;
  description: string;
  subpage_content: string;
}

// Updated partner data based on user's latest submission
export const partners: Partner[] = [
  {
    name: "ZeroTo3",
    logo: defaultLogo,
    url: "https://zeroto3.com",
    category_tag: ["Partner", "Legal", "Advisory"],
    display_priority: 1,
    description: "Legal & Startup Advisory Studio",
    subpage_content: "ZeroTo3 provides foundational support for legal structuring and IP development, making it an integral partner for startups navigating early-stage complexities in Web3 and entertainment.",
  },
  {
    name: "HashLegal",
    logo: defaultLogo,
    url: "https://hashlegal.com",
    category_tag: ["Partner", "Legal", "Web3"],
    display_priority: 2,
    description: "Web3-Native Legal Counsel",
    subpage_content: "HashLegal delivers cutting-edge legal strategies and compliance solutions for tokenized ecosystems and decentralized platforms.",
  },
  {
    name: "IXSwap",
    logo: defaultLogo,
    url: "https://ixswap.io",
    category_tag: ["Partner", "Exchange", "DeFi"],
    display_priority: 3,
    description: "Decentralized Exchange & Token Liquidity",
    subpage_content: "IXSwap enables liquidity for tokenized assets through a hybrid liquidity pool and regulatory-first AMM framework.",
  },
  {
    name: "Story Protocol",
    logo: defaultLogo,
    url: "https://storyprotocol.xyz",
    category_tag: ["Partner", "IP", "Web3"],
    display_priority: 4,
    description: "IP Registry & Licensing Layer",
    subpage_content: "Story Protocol empowers creators by decentralizing IP rights management using a programmable, transparent IP layer.",
  },
  {
    name: "PEAQ",
    logo: defaultLogo,
    url: "https://www.peaq.network",
    category_tag: ["Partner", "Protocol", "DePIN"],
    display_priority: 5,
    description: "DePIN Infrastructure & Protocol Partner",
    subpage_content: "PEAQ supports the infrastructure backbone for decentralized physical networks, driving real-world asset connectivity at scale.",
  },
  {
    name: "India Blockchain Alliance",
    logo: defaultLogo,
    url: "https://www.indiablockchainalliance.org",
    category_tag: ["Partner", "Policy", "Blockchain Alliance"],
    display_priority: 6,
    description: "Policy Advocacy & Ecosystem Network",
    subpage_content: "IBA connects policymakers, enterprises, and innovators to foster blockchain education, awareness, and adoption in India and beyond.",
  },
  {
    name: "ICP (Internet Computer Protocol)",
    logo: defaultLogo,
    url: "https://internetcomputer.org",
    category_tag: ["Partner", "Protocol", "Infra"],
    display_priority: 7,
    description: "Internet Computer Protocol Ecosystem",
    subpage_content: "ICP enables scalable, secure, and open internet services through its blockchain-native compute model for smart contracts and dApps.",
  },
  {
    name: "4+ Ventures",
    logo: defaultLogo,
    url: "https://www.4plusventures.com",
    category_tag: ["Partner", "Web3", "Venture Builder"],
    display_priority: 8,
    description: "Technology and Web3 Venture Builder",
    subpage_content: "4+ Ventures supports the development of Web3-native startups, from ideation to scaling with protocol-native infrastructure and funding.",
  },
];

// Only show by display_priority order, first 9 for marquee, ignore fields not in new list
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
        {partners
          .sort((a, b) => a.display_priority - b.display_priority)
          .slice(0, 9)
          .map((partner) => (
            <Tooltip key={partner.name}>
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
                <div>
                  <p className="font-semibold">{partner.name}</p>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </div>
              </TooltipContent>
            </Tooltip>
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
