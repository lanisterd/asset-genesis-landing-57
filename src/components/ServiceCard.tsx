
import React from "react";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  color: string;
  icon: LucideIcon;
  title: string;
  layer: string;
  desc: string;
  cta: { label: string; href: string };
};

const ServiceCard: React.FC<ServiceCardProps> = ({ color, icon: Icon, title, layer, desc, cta }) => (
  <div
    className={`rounded-2xl bg-white shadow-md border border-royalgold/20 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-royalgold/40 group hover:-translate-y-1`}
  >
    <div className={`w-16 h-16 flex items-center justify-center ${color} rounded-full mb-5 group-hover:scale-105 transition-transform`}>
      <Icon size={30} className="text-royalgold" />
    </div>
    <div className="text-xl font-semibold font-poppins text-midnight mb-1">{title}</div>
    <div className="text-sm font-montserrat uppercase tracking-wide text-midnight/60 mb-3">{layer}</div>
    <div className="text-base text-midnight/80 mb-7">{desc}</div>
    <a
      href={cta.href}
      className="mt-auto inline-flex items-center gap-1 rounded-xl px-4 py-2 bg-royalgold text-midnight font-semibold shadow-gold hover:shadow-glow-gold transition-all group-hover:scale-[1.04]"
    >
      {cta.label}
      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

export default ServiceCard;
