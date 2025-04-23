
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClosingCTA = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-royalgold/10 via-yellow-50 to-white animate-fade-section">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-midnight mb-6 leading-tight">
          You're not too early.<br className="hidden sm:block" /> 
          The world is just catching up.
        </h2>
        <p className="text-lg text-midnight/70 mb-10 max-w-2xl mx-auto">
          Ready to build a future-ready venture? Whether you're just starting out or looking to scale, we have the infrastructure you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/contact?type=bookCall">
            <Button
              className="px-8 py-6 text-base rounded-full font-semibold font-poppins shadow-gold bg-royalgold text-midnight hover:shadow-glow-gold transition-all duration-200"
            >
              Book a Strategy Call
            </Button>
          </Link>
          <Link to="/contact?type=portfolio">
            <Button
              variant="outline"
              className="px-8 py-6 text-base border-2 border-royalgold rounded-full font-semibold font-poppins text-midnight hover:bg-royalgold/10 transition-all duration-200"
            >
              Apply for Incubation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
