
import React from "react";
import EcosystemPartnerCard from "./EcosystemPartnerCard";
import { Partner } from "@/components/PartnerEcosystem";

interface EcosystemPartnerGridProps {
  partners: Partner[];
}

const EcosystemPartnerGrid: React.FC<EcosystemPartnerGridProps> = ({ partners }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {partners.map((partner) => (
      <EcosystemPartnerCard key={partner.name} partner={partner} />
    ))}
  </div>
);

export default EcosystemPartnerGrid;
