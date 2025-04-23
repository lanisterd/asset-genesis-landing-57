
import React from "react";
import { Button } from "@/components/ui/button";
import { getUniqueSectors, getUniqueStages, getUniqueTechStacks, getUniqueLaunchYears } from "@/data/portfolio";
import { X } from "lucide-react";

interface PortfolioFiltersProps {
  activeFilters: {
    sector: string | null;
    stage: string | null;
    techStack: string | null;
    year: number | null;
  };
  setFilters: (filters: {
    sector: string | null;
    stage: string | null;
    techStack: string | null;
    year: number | null;
  }) => void;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({ activeFilters, setFilters }) => {
  // Get unique values for each filter
  const sectors = getUniqueSectors();
  const stages = getUniqueStages();
  const techStacks = getUniqueTechStacks();
  const years = getUniqueLaunchYears();

  // Helper to clear a specific filter
  const clearFilter = (filterType: 'sector' | 'stage' | 'techStack' | 'year') => {
    setFilters({
      ...activeFilters,
      [filterType]: null
    });
  };

  // Helper to clear all filters
  const clearAllFilters = () => {
    setFilters({
      sector: null,
      stage: null,
      techStack: null,
      year: null
    });
  };

  // Check if any filters are active
  const hasActiveFilters = Object.values(activeFilters).some(value => value !== null);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-midnight mb-2">Filter Ventures</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-sm text-midnight/70 hover:text-midnight flex items-center gap-1"
          >
            <X size={14} />
            Clear all filters
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.sector && (
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
              Sector: {activeFilters.sector}
              <X size={12} className="cursor-pointer" onClick={() => clearFilter('sector')} />
            </div>
          )}
          {activeFilters.stage && (
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
              Stage: {activeFilters.stage}
              <X size={12} className="cursor-pointer" onClick={() => clearFilter('stage')} />
            </div>
          )}
          {activeFilters.techStack && (
            <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
              Tech: {activeFilters.techStack}
              <X size={12} className="cursor-pointer" onClick={() => clearFilter('techStack')} />
            </div>
          )}
          {activeFilters.year && (
            <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs flex items-center gap-1">
              Year: {activeFilters.year}
              <X size={12} className="cursor-pointer" onClick={() => clearFilter('year')} />
            </div>
          )}
        </div>
      )}

      {/* Sector Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-midnight/70 mb-2">Sector</h3>
        <div className="flex flex-wrap gap-2">
          {sectors.map(sector => (
            <Button
              key={sector}
              variant={activeFilters.sector === sector ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-xs ${
                activeFilters.sector === sector 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "bg-transparent text-midnight/70 hover:text-midnight hover:bg-blue-50"
              }`}
              onClick={() => setFilters({
                ...activeFilters,
                sector: activeFilters.sector === sector ? null : sector
              })}
            >
              {sector}
            </Button>
          ))}
        </div>
      </div>

      {/* Stage Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-midnight/70 mb-2">Stage</h3>
        <div className="flex flex-wrap gap-2">
          {stages.map(stage => (
            <Button
              key={stage}
              variant={activeFilters.stage === stage ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-xs ${
                activeFilters.stage === stage 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-transparent text-midnight/70 hover:text-midnight hover:bg-green-50"
              }`}
              onClick={() => setFilters({
                ...activeFilters,
                stage: activeFilters.stage === stage ? null : stage
              })}
            >
              {stage}
            </Button>
          ))}
        </div>
      </div>

      {/* Tech Stack Filter */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-midnight/70 mb-2">Technology</h3>
        <div className="flex flex-wrap gap-2">
          {techStacks.map(tech => (
            <Button
              key={tech}
              variant={activeFilters.techStack === tech ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-xs ${
                activeFilters.techStack === tech 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "bg-transparent text-midnight/70 hover:text-midnight hover:bg-purple-50"
              }`}
              onClick={() => setFilters({
                ...activeFilters,
                techStack: activeFilters.techStack === tech ? null : tech
              })}
            >
              {tech}
            </Button>
          ))}
        </div>
      </div>

      {/* Launch Year Filter */}
      {years.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-midnight/70 mb-2">Launch Year</h3>
          <div className="flex flex-wrap gap-2">
            {years.map(year => (
              <Button
                key={year}
                variant={activeFilters.year === year ? "default" : "outline"}
                size="sm"
                className={`rounded-full text-xs ${
                  activeFilters.year === year 
                    ? "bg-amber-600 hover:bg-amber-700" 
                    : "bg-transparent text-midnight/70 hover:text-midnight hover:bg-amber-50"
                }`}
                onClick={() => setFilters({
                  ...activeFilters,
                  year: activeFilters.year === year ? null : year
                })}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioFilters;
