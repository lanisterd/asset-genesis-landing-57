
import React from "react";

const projects = [
  {
    venture_name: "1 Asset Movies",
    key_impact: "Web3 streaming rights and fan experiences.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
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
];

const PortfolioHighlights = () => (
  <section className="w-full py-20 bg-[#f6f8fa] animate-fade-section">
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end mb-10 gap-4 justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-midnight mb-2">Portfolio Highlights</h2>
          <p className="text-lg text-midnight/70 font-poppins">Proven ventures, real-world adoption.</p>
        </div>
        <a href="#" className="font-montserrat uppercase tracking-wide text-royalgold px-4 py-2 rounded-full border border-royalgold hover:bg-royalgold hover:text-midnight transition-all duration-200 shadow-gold text-sm">
          Explore All Ventures
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {projects.map((p) => (
          <a
            href={`#${p.slug}`}
            key={p.slug}
            className="block bg-white rounded-xl shadow-glow-gold border border-royalgold/20 overflow-hidden hover:shadow-gold group transition-shadow duration-200"
          >
            <div className="h-44 w-full overflow-hidden">
              <img src={p.image} alt={p.venture_name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
            </div>
            <div className="p-5">
              <div className="font-semibold text-lg font-poppins mb-1 text-midnight group-hover:text-royalgold">{p.venture_name}</div>
              <div className="text-midnight/70 text-sm">{p.key_impact}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioHighlights;
