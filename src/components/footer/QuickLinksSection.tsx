
import React from "react";
import { Link } from "react-router-dom";
import { footerQuickLinks } from "@/data/navigation";

const QuickLinksSection = () => (
  <div>
    <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
    <ul className="space-y-3 text-sm">
      {footerQuickLinks.map(link =>
        link.external ? (
          <li key={link.label}>
            <a href={link.href} className="text-white/70 hover:text-royalgold transition-colors" target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ) : (
          <li key={link.label}>
            <Link to={link.href} className="text-white/70 hover:text-royalgold transition-colors">
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  </div>
);

export default QuickLinksSection;
