
/**
 * Portfolio Data Types
 */
export interface PortfolioItem {
  venture_name: string;
  slug: string;
  tagline: string;
  website: string;
  sectors: string[];
  stage: "Idea" | "MVP" | "Funded" | "Launched" | "Closed MVP";
  tech_stack: string[];
  launch_year?: number;
  key_impact: string;
  modules_used: string[];
  image: string;
  description: string;
  challenge_opportunity: string;
  solution_stack: string[];
  results?: {
    stats: { label: string; value: string }[];
    testimonials?: { quote: string; author: string; role?: string }[];
  };
  status: "live" | "coming-soon" | "incubation-in-progress" | "graduated" | "mvp-in-progress";
  color?: string;
}
