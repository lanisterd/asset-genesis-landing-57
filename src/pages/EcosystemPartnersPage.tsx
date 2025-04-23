
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners, Partner } from "@/components/PartnerEcosystem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Extract unique categories from partners
const getAllCategories = () => {
  const categories = new Set<string>();
  partners.forEach(partner => {
    partner.category_tag.forEach(tag => categories.add(tag));
  });
  return Array.from(categories);
};

const EcosystemPartnersPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const categories = getAllCategories();

  // Filter partners based on selected category
  const filteredPartners = activeFilter 
    ? partners.filter(partner => partner.category_tag.includes(activeFilter)) 
    : partners;

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Header />
      <main className="pt-24 pb-16">
        <section className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-midnight mb-4">Ecosystem Partners</h1>
            <p className="text-lg text-midnight/70 max-w-3xl mx-auto">
              Discover our growing network of partners that help power the 1 Asset Exchange ecosystem.
            </p>
          </div>

          {/* Category Filter */}
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

          {/* Partners Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredPartners.map((partner) => (
              <HoverCard key={partner.name}>
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
                      </CardContent>
                    </Card>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div>
                      <h4 className="font-semibold">{partner.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {partner.category_tag.join(" • ")}
                      </p>
                      <div className="mt-3">
                        <Button 
                          size="sm" 
                          className="text-xs bg-royalgold text-midnight hover:bg-royalgold/80"
                          onClick={() => window.open(partner.url, '_blank')}
                        >
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center bg-midnight/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins text-midnight mb-4">
              Become Our Ecosystem Partner
            </h2>
            <p className="text-midnight/70 mb-6 max-w-2xl mx-auto">
              Join our growing network of innovators and technology leaders. Let's build the future of digital infrastructure together.
            </p>
            <Button 
              className="bg-royalgold text-midnight hover:bg-royalgold/80 hover:shadow-gold px-8 py-6 h-auto rounded-full text-base"
            >
              Apply to Partner With Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EcosystemPartnersPage;
