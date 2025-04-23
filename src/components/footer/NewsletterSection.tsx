
import React from "react";
import { ArrowRight } from "lucide-react";

const NewsletterSection = () => (
  <div>
    <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
    <p className="text-white/70 mb-4 text-sm">Subscribe to our newsletter for the latest updates.</p>
    <form className="relative mt-2" aria-label="Newsletter subscription">
      <input 
        type="email" 
        placeholder="Your email" 
        className="bg-white/10 w-full py-2 pl-3 pr-10 rounded-md text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-royalgold"
        aria-label="Enter your email"
        required
      />
      <button 
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-royalgold hover:text-white transition-colors"
        aria-label="Subscribe"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  </div>
);

export default NewsletterSection;
