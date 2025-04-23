
// Types for navigation and services data

export interface Service {
  label: string;
  href: string;
}

export interface QuickLink {
  label: string;
  href: string;
  external?: boolean;
}

// Service section for the footer - can easily be updated elsewhere
export const footerServices: Service[] = [
  { label: "AgentOps", href: "#services" },
  { label: "RapidStack", href: "#services" },
  { label: "TokenCore", href: "#services" }
];

// Quick links section
export const footerQuickLinks: QuickLink[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Partners", href: "#ecosystem" },
  { label: "About Us", href: "#about" }
];

