
import type { PortfolioItem } from "./portfolio.types";
import { portfolioItems } from "./portfolio.items";

// Return a curated list of featured items (adjust as needed)
export const getFeaturedPortfolioItems = (): PortfolioItem[] =>
  portfolioItems.filter(item => item.status === "live").slice(0, 4);

export const getLivePortfolioItems = (): PortfolioItem[] =>
  portfolioItems.filter(item => item.status === "live");

export const getComingSoonPortfolioItems = (): PortfolioItem[] =>
  portfolioItems.filter(item => item.status === "coming-soon");

export const getPortfolioItemBySlug = (slug: string): PortfolioItem | undefined =>
  portfolioItems.find(item => item.slug === slug);

// Get unique sectors for filtering
export const getUniqueSectors = (): string[] => {
  const sectors = new Set<string>();
  portfolioItems.forEach(item => {
    item.sectors.forEach(sector => sectors.add(sector));
  });
  return Array.from(sectors).sort();
};

// Get unique stages for filtering
export const getUniqueStages = (): string[] => {
  const stages = new Set<string>();
  portfolioItems.forEach(item => {
    stages.add(item.stage);
  });
  return Array.from(stages).sort();
};

// Get unique tech stacks for filtering
export const getUniqueTechStacks = (): string[] => {
  const techStacks = new Set<string>();
  portfolioItems.forEach(item => {
    item.tech_stack.forEach(tech => techStacks.add(tech));
  });
  return Array.from(techStacks).sort();
};

// Get unique launch years for filtering
export const getUniqueLaunchYears = (): number[] => {
  const years = new Set<number>();
  portfolioItems.forEach(item => {
    if (item.launch_year) {
      years.add(item.launch_year);
    }
  });
  return Array.from(years).sort();
};
