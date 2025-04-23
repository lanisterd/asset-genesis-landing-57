import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white py-16 animate-fade-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-royalgold">1 Asset Exchange</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Build with programmable infrastructure. Digitize, automate, and tokenize your business with agentic AI tools and token-native systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-royalgold transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-royalgold transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#solutions" className="text-white/70 hover:text-royalgold transition-colors">Solutions</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-royalgold transition-colors">Portfolio</a></li>
              <li><a href="#ecosystem" className="text-white/70 hover:text-royalgold transition-colors">Partners</a></li>
              <li><a href="#about" className="text-white/70 hover:text-royalgold transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-white/70 hover:text-royalgold transition-colors">AgentOps</a></li>
              <li><a href="#services" className="text-white/70 hover:text-royalgold transition-colors">RapidStack</a></li>
              <li><a href="#services" className="text-white/70 hover:text-royalgold transition-colors">TokenCore</a></li>
            </ul>
          </div>

          {/* Column 4 - Get In Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <p className="text-white/70 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
            <form className="relative mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 w-full py-2 pl-3 pr-10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-royalgold"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-royalgold hover:text-white transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-white/50 mb-4 sm:mb-0">
            &copy; {currentYear} 1 Asset Exchange. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-royalgold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-royalgold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
