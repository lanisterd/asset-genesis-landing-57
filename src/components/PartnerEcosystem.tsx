import React from "react";
import StoryProtocolLogo from "@/assets/logos/logo-story-protocol.png";

const partners = [
  {
    name: "Story Protocol",
    logo: StoryProtocolLogo
  },
  {
    name: "IXSwap",
    logo: "https://images.unsplash.com/photo-1639322537232-5f60e1929841?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Hash Legal",
    logo: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Fjord Foundry",
    logo: "https://images.unsplash.com/photo-1643104177201-e01a1a87c58f?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "SUI",
    logo: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "PEAQ",
    logo: "https://images.unsplash.com/photo-1636632520810-27b466a9494b?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "River Venture",
    logo: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?auto=format&fit=crop&w=150&q=80"
  },
];

const PartnerEcosystem = () => (
  <section className="w-full py-16 bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 animate-fade-section" id="ecosystem">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-poppins text-midnight mb-3">Partner Ecosystem</h2>
        <p className="text-midnight/70 max-w-2xl mx-auto">
          We work with leading protocols and services to provide a complete infrastructure for your venture.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center w-32 md:w-40 group"
          >
            <div className="bg-white rounded-xl shadow-md border border-royalgold/10 p-3 w-full h-24 flex items-center justify-center mb-3
              hover:shadow-glow-gold hover:border-royalgold/40 transition-all duration-300">
              <span className="text-sm font-montserrat font-bold text-midnight group-hover:text-royalgold transition-colors">
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerEcosystem;
