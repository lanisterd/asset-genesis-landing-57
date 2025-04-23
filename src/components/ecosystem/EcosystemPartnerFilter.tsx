
import React from "react";
import { Button } from "@/components/ui/button";

interface EcosystemPartnerFilterProps {
  categories: string[];
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const EcosystemPartnerFilter: React.FC<EcosystemPartnerFilterProps> = ({
  categories,
  activeFilter,
  setActiveFilter,
}) => (
  <div className="flex flex-wrap gap-3 justify-center mb-12">
    <Button
      onClick={() => setActiveFilter(null)}
      className={`rounded-full px-6 text-sm ${
        activeFilter === null ? "bg-royalgold text-midnight" : "bg-gray-100 text-midnight/70 hover:bg-gray-200"
      }`}
    >
      All
    </Button>
    {categories.map((category) => (
      <Button
        key={category}
        onClick={() => setActiveFilter(category)}
        className={`rounded-full px-6 text-sm ${
          activeFilter === category ? "bg-royalgold text-midnight" : "bg-gray-100 text-midnight/70 hover:bg-gray-200"
        }`}
      >
        {category}
      </Button>
    ))}
  </div>
);

export default EcosystemPartnerFilter;
