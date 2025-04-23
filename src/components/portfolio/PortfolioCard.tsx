
import React from "react";
import { Link } from "react-router-dom";
import { PortfolioItem } from "@/data/portfolio";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
  isLoading?: boolean;
  featured?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, isLoading = false, featured = false }) => {
  return (
    <Link
      to={`/portfolio/${item.slug}`}
      className={`block bg-white rounded-xl shadow-md border border-royalgold/10 overflow-hidden 
                hover:shadow-glow-gold hover:border-royalgold/30 group transition-all duration-300
                hover:-translate-y-1 h-full`}
    >
      <div className="h-44 w-full overflow-hidden relative flex items-center justify-center">
        {isLoading ? (
          <Skeleton className="w-full h-full" />
        ) : (
          <img 
            src={item.image} 
            alt={item.venture_name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            loading="lazy"
          />
        )}
        {item.status === "coming-soon" && (
          <div className="absolute top-0 right-0 bg-midnight/80 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
            Coming Soon
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="font-semibold text-lg font-poppins mb-1 text-midnight group-hover:text-royalgold transition-colors">
          {isLoading ? <Skeleton className="h-6 w-3/4" /> : item.venture_name}
        </div>
        <div className="text-midnight/70 text-sm mb-3">
          {isLoading ? <Skeleton className="h-4 w-full" /> : item.tagline}
        </div>
        
        {!isLoading && (
          <>
            <div className="flex flex-wrap gap-1 mb-3">
              {item.sectors.slice(0, 2).map(sector => (
                <Badge 
                  key={sector} 
                  variant="outline" 
                  className="text-xs bg-gray-50 border-gray-200"
                >
                  {sector}
                </Badge>
              ))}
              {item.sectors.length > 2 && (
                <Badge 
                  variant="outline" 
                  className="text-xs bg-gray-50 border-gray-200"
                >
                  +{item.sectors.length - 2}
                </Badge>
              )}
            </div>
            
            {featured && (
              <div className="flex items-center justify-between mt-3 text-royalgold text-sm font-medium">
                <span>View Details</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </>
        )}
      </div>
    </Link>
  );
};

export default PortfolioCard;
