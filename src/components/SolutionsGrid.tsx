
import React from "react";
import { Zap, Rocket, Link, ArrowRight } from "lucide-react";

const solutions = [
  {
    color: "bg-[#004AAD]/10",
    icon: Zap,
    title: "AgentOps",
    layer: "Agentic Operations & Automation Layer",
    desc: "Automate internal workflows, stakeholder CRM, and ecosystem logic with AI-powered operational stacks. For ventures scaling with precision.",
    cta: { label: "See Tools", href: "#" },
  },
  {
    color: "bg-[#FCC200]/20",
    icon: Rocket,
    title: "RapidStack",
    layer: "MVP Builder & Validation Layer",
    desc: "From idea to user-facing product in weeks. Deploy AI-enabled MVPs and pre-tokenization pilots with no-code modularity.",
    cta: { label: "Launch Now", href: "#" },
  },
  {
    color: "bg-[#6A0DAD]/10",
    icon: Link,
    title: "TokenCore",
    layer: "Token Design & Governance Infrastructure",
    desc: "Launch programmable assets with smart contract templates, DAO tooling, and tokenomics infrastructure — ready for protocol and exchange alignment.",
    cta: { label: "Explore Tokens", href: "#" },
  },
];

const SolutionsGrid = () => (
  <section className="w-full py-24 bg-white animate-fade-section" id="solutions">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-midnight">
          Real Tools. Real Results.
        </h2>
        <p className="text-lg md:text-xl text-midnight/70 font-poppins max-w-3xl mx-auto">
          From no-code MVPs to token-ready stacks, our infrastructure empowers you to move fast, stay compliant, and build what matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map(({ color, icon: Icon, title, layer, desc, cta }) => (
          <div
            key={title}
            className={`rounded-2xl bg-white shadow-md border border-royalgold/20 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-royalgold/40 group hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 flex items-center justify-center ${color} rounded-full mb-5 group-hover:scale-105 transition-transform`}>
              <Icon size={30} className="text-royalgold" />
            </div>
            <div className="text-xl font-semibold font-poppins text-midnight mb-1">{title}</div>
            <div className="text-sm font-montserrat uppercase tracking-wide text-midnight/60 mb-3">{layer}</div>
            <div className="text-base text-midnight/80 mb-7">{desc}</div>
            <a
              href={cta.href}
              className="mt-auto inline-flex items-center gap-1 rounded-xl px-4 py-2 bg-royalgold text-midnight font-semibold shadow-gold hover:shadow-glow-gold transition-all group-hover:scale-[1.04]"
            >
              {cta.label}
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsGrid;
