
import { Button } from "@/components/ui/button";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-white via-yellow-50 to-royalgold/40 relative overflow-hidden animate-fade-section">
      {/* Gradient + optional abstract bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50 to-royalgold/10 pointer-events-none -z-10" />
      <div className="container max-w-3xl mx-auto text-center flex flex-col items-center gap-7">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-midnight mb-2 leading-tight drop-shadow" style={{letterSpacing: "-.01em"}}>
          Supercharge your venture.<br className="hidden sm:block"/> Build with programmable infrastructure.
        </h1>
        <p className="text-lg sm:text-xl font-poppins text-black/70 mb-6 max-w-2xl mx-auto">
          Whether you're a founder, a creator, or a capital-ready brand — <span className="font-semibold text-midnight">we help you digitize, automate, and tokenize</span> with agentic AI and token-native tools.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a href="#" className="group">
            <Button
              className="px-6 py-3 text-base rounded-full font-semibold font-poppins shadow-gold bg-royalgold text-midnight hover:shadow-glow-gold transition-all duration-200 outline-none focus:ring-2 focus:ring-royalgold"
            >
              Start With a Call
            </Button>
          </a>
          <a href="#ecosystem" className="group">
            <Button
              variant="outline"
              className="px-6 py-3 text-base border-2 border-royalgold rounded-full font-semibold font-poppins text-midnight hover:bg-royalgold hover:text-midnight hover:shadow-gold transition-all duration-200"
            >
              Explore the Ecosystem
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
