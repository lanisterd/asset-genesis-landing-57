
import React from "react";
import { Zap, Rocket, Link, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Agentic Automation",
    sub: "CRM, workflows, backend AI systems",
    icon: Zap,
    cta: "See Tools",
  },
  {
    title: "MVP Prototyping",
    sub: "Build AI-enabled MVPs in weeks",
    icon: Rocket,
    cta: "Launch Now",
  },
  {
    title: "Token Infrastructure",
    sub: "Own, govern, and grow your assets",
    icon: Link,
    cta: "Explore Tokens",
  },
];

const SolutionsGrid = () => (
  <section className="w-full py-24 bg-white animate-fade-section" id="solutions">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-midnight">Real Tools. Real Results.</h2>
        <p className="text-lg md:text-xl text-midnight/70 font-poppins max-w-3xl mx-auto">
          From no-code MVPs to token-ready stacks, our infrastructure empowers you to move fast, stay compliant, and build what matters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map(({ title, sub, icon: Icon, cta }, i) => (
          <div
            key={title}
            className="rounded-2xl bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 shadow-md hover:shadow-glow-gold 
                     border border-royalgold/20 p-8 flex flex-col items-center text-center transition-all duration-300 
                     hover:border-royalgold/40 group hover:-translate-y-1"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-royalgold/10 rounded-full mb-6 group-hover:bg-royalgold/20 transition-colors">
              <Icon size={28} className="text-royalgold group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-xl font-semibold font-poppins text-midnight mb-3">{title}</div>
            <div className="text-base text-midnight/70 mb-6">{sub}</div>
            <a 
              href="#" 
              className="mt-auto inline-flex items-center gap-1 text-royalgold font-medium hover:text-midnight transition-colors group-hover:font-semibold"
            >
              {cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsGrid;
