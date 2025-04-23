
import React from "react";
import { Zap, Rocket, Link } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
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

const ServicesGrid = () => (
  <section className="w-full py-24 bg-white animate-fade-section" id="services">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-midnight">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-midnight/70 font-poppins max-w-3xl mx-auto">
          From no-code MVPs to token-ready stacks, our infrastructure empowers you to move fast, stay compliant, and build what matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc) => (
          <ServiceCard key={svc.title} {...svc} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
