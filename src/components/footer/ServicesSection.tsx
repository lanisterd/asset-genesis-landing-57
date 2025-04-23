
import React from "react";
import { footerServices } from "@/data/navigation";

const ServicesSection = () => (
  <div>
    <h4 className="text-lg font-semibold mb-6">Services</h4>
    <ul className="space-y-3 text-sm">
      {footerServices.map(service => (
        <li key={service.label}>
          <a href={service.href} className="text-white/70 hover:text-royalgold transition-colors">
            {service.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default ServicesSection;
