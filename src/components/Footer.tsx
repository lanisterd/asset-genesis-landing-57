
import React from "react";
import AboutSection from "./footer/AboutSection";
import QuickLinksSection from "./footer/QuickLinksSection";
import ServicesSection from "./footer/ServicesSection";
import NewsletterSection from "./footer/NewsletterSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white py-16 animate-fade-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <AboutSection />
          <QuickLinksSection />
          <ServicesSection />
          <NewsletterSection />
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 sm:mb-0">
            &copy; {currentYear} 1 Asset Exchange. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-royalgold transition-colors" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="#" className="hover:text-royalgold transition-colors" aria-label="Terms of Service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
