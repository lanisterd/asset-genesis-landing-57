
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Expert interface
interface Expert {
  id: string;
  name: string;
  title: string;
  location: string;
  linkedIn?: string;
  imageSrc?: string;
}

// Sample experts data
const experts: Expert[] = [
  {
    id: "aneesha-reihana",
    name: "Aneesha Reihana",
    title: "Visionary Founder",
    location: "Singapore",
    linkedIn: "https://www.linkedin.com/in/aneeshareihana/",
    imageSrc: "/lovable-uploads/e62b98bf-311b-42a7-938b-f49f82269ca3.png"
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    title: "Blockchain Architect",
    location: "Hong Kong",
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    title: "Digital Asset Strategist",
    location: "London",
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: "raj-patel",
    name: "Raj Patel",
    title: "Tokenization Specialist",
    location: "Mumbai",
    linkedIn: "https://www.linkedin.com/",
  },
  {
    id: "emma-wilson",
    name: "Emma Wilson",
    title: "Regulatory Affairs Lead",
    location: "Sydney",
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "Security Protocols Engineer",
    location: "Seoul",
    linkedIn: "https://www.linkedin.com/",
  },
];

// Expert Card component
const ExpertCard = ({ expert }: { expert: Expert }) => {
  const hasLinkedIn = Boolean(expert.linkedIn);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-softplatinum border-transparent hover:border-royalgold/20 rounded-2xl relative group">
      <div className="h-64 relative">
        <AspectRatio ratio={1 / 1} className="bg-midnight/5">
          <Avatar className="h-full w-full rounded-none">
            {expert.imageSrc ? (
              <AvatarImage 
                src={expert.imageSrc} 
                alt={expert.name}
                className="object-cover object-center"
                loading="lazy"
              />
            ) : (
              <AvatarFallback className="text-5xl h-full w-full bg-gradient-to-br from-midnight/10 to-royalgold/10 text-midnight">
                {expert.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          
          {hasLinkedIn && (
            <div className="absolute inset-0 bg-midnight/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-royalgold text-royalgold hover:bg-royalgold hover:text-midnight font-montserrat tracking-wide"
                asChild
              >
                <a href={expert.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" /> Connect
                </a>
              </Button>
            </div>
          )}
        </AspectRatio>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-midnight">{expert.name}</h3>
            {hasLinkedIn && (
              <a 
                href={expert.linkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-royalgold hover:text-midnight transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn profile of {expert.name}</span>
              </a>
            )}
          </div>
          <p className="text-sm font-semibold text-royalgold">{expert.title}</p>
          <div className="flex items-center pt-2">
            <Badge 
              variant="outline" 
              className="bg-transparent border-midnight/20 text-midnight/80"
            >
              {expert.location}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Main Hall of Experts component
const HallOfExperts = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="hall-of-experts">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-midnight mb-4">
            Hall of Experts
          </h2>
          <p className="text-lg text-midnight/80 max-w-3xl mx-auto">
            Meet our team of specialists dedicated to transforming digital assets
            and building innovative blockchain solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic font-medium text-midnight">
            "We don't just build startups — we build the future, one token at a time."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default HallOfExperts;
