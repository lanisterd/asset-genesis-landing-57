
import React from "react";
import { Partner } from "@/components/PartnerEcosystem";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

interface EcosystemPartnerCardProps {
  partner: Partner;
}

const EcosystemPartnerCard: React.FC<EcosystemPartnerCardProps> = ({ partner }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="border border-royalgold/10 hover:border-royalgold/40 hover:shadow-glow-gold transition-all duration-300 h-full">
          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
            <div className="h-28 flex items-center justify-center mb-4">
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-20 max-w-[80%] object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="font-medium text-midnight text-sm">{partner.name}</h3>
            <div className="flex flex-wrap gap-1 mt-2 justify-center">
              {partner.category_tag.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-block bg-gray-100 text-midnight/60 rounded-full px-2 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-2 text-xs text-midnight/60">{partner.description}</div>
          </CardContent>
        </Card>
      </a>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <div>
          <h4 className="font-semibold">{partner.name}</h4>
          <p className="text-xs text-muted-foreground mt-1 mb-1">
            {partner.category_tag.join(" • ")}
          </p>
          <div className="mb-2 text-sm">{partner.description}</div>
          <div className="text-xs text-midnight/70">{partner.subpage_content}</div>
          <div className="mt-3">
            <Button 
              size="sm" 
              className="text-xs bg-royalgold text-midnight hover:bg-royalgold/80"
              onClick={e => {
                e.preventDefault();
                window.open(partner.url, '_blank');
              }}
            >
              Visit Website
            </Button>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

export default EcosystemPartnerCard;
