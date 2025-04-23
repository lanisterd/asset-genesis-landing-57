
import React from "react";
import { Button } from "@/components/ui/button";

const FounderHighlight = () => (
  <section className="w-full py-20 bg-midnight text-white animate-fade-section" id="about">
    <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="flex-1 order-2 md:order-1">
        <div className="text-2xl md:text-3xl font-poppins font-bold mb-5 leading-snug">
          "We don't build hype. We build systems, stories,<br className="hidden md:block" />and sustainable digital ventures."
        </div>
        <div className="text-lg font-poppins mb-6 text-royalgold">
          — Aneesha Reihana, Founder
        </div>
        <Button
          className="mt-4 px-6 py-5 text-base font-montserrat uppercase tracking-wide text-midnight rounded-full bg-royalgold hover:shadow-glow-gold hover:bg-yellow-200 transition-all duration-200"
        >
          Read Our Story
        </Button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
        <div className="w-64 h-64 relative rounded-xl overflow-hidden 
          bg-gradient-to-br from-white/40 to-royalgold/40 
          border-4 border-royalgold/30 
          shadow-glow-gold
          transition-all duration-300 
          hover:border-royalgold/50 
          hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">
          {/* Placeholder for founder image */}
          <div className="absolute inset-0 flex items-center justify-center bg-midnight/5">
            <span className="font-poppins text-6xl text-midnight/20">AR</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FounderHighlight;
