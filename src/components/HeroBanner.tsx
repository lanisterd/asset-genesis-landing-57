
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <section className="w-full min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 relative overflow-hidden animate-fade-section">
      {/* Abstract background patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-royalgold rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-royalgold rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 z-10 text-center flex flex-col items-center gap-8 py-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold text-midnight mb-4 leading-tight tracking-tight">
          Supercharge your venture.<br className="hidden sm:block"/> Build with programmable infrastructure.
        </h1>
        <p className="text-lg sm:text-xl font-poppins text-black/70 mb-6 max-w-3xl mx-auto">
          Whether you're a founder, a creator, or a capital-ready brand — <span className="font-semibold text-midnight">we help you digitize, automate, and tokenize</span> with agentic AI and token-native tools.
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-4">
          <Link to="/contact?type=bookCall">
            <Button
              className="px-8 py-6 text-base rounded-full font-semibold font-poppins shadow-gold bg-royalgold text-midnight hover:shadow-glow-gold transition-all duration-300"
            >
              Start With a Call
            </Button>
          </Link>
          <Button
            variant="outline"
            className="px-8 py-6 text-base border-2 border-royalgold rounded-full font-semibold font-poppins text-midnight hover:bg-royalgold/10 transition-all duration-300"
            onClick={() => scrollToSection("solutions")}
          >
            Explore the Ecosystem
          </Button>
        </div>
        
        {/* Scroll down indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer hover:text-royalgold transition-colors animate-bounce"
          onClick={() => scrollToSection("solutions")}
        >
          <span className="text-sm font-medium mb-2 text-midnight/70">Discover More</span>
          <ArrowDown size={20} className="text-midnight/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
