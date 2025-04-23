
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners, Partner } from "@/components/PartnerEcosystem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

// Add this type declaration to inform TypeScript about the Chatbase widget
declare global {
  interface Window {
    ChatbaseWidget?: {
      open: () => void;
    };
  }
}

// Extract unique categories from partners
const getAllCategories = () => {
  const categories = new Set<string>();
  partners.forEach(partner => {
    partner.category_tag.forEach(tag => categories.add(tag));
  });
  return Array.from(categories);
};

const CHAT_WIDGET_SCRIPT = `<script src="https://www.chatbase.co/embed.min.js" chatbotId="YOUR-CHATBASE-ID" domain="yourdomain.com" defer></script>`;
// Replace YOUR-CHATBASE-ID with your bot's ID from Chatbase dashboard

const EcosystemPartnersPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const categories = getAllCategories();

  // Filter partners based on selected category
  const filteredPartners = activeFilter 
    ? partners.filter(partner => partner.category_tag.includes(activeFilter)) 
    : partners;

  // Inject Chatbase (or other) chat widget script once on mount
  useEffect(() => {
    // Prevent duplicate injection
    if (document.getElementById("co-pilot-chat-widget-script")) return;

    const script = document.createElement("script");
    script.id = "co-pilot-chat-widget-script";
    script.defer = true;

    // YOUR EMBED CODE; for Chatbase:
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "YOUR-CHATBASE-ID"); // Change to your real chatbot ID
    script.setAttribute("domain", window.location.hostname);

    document.body.appendChild(script);

    // Clean up script on unmount (optional)
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Floating Co-Pilot Button */}
      <button
        type="button"
        onClick={() => {
          // For Chatbase sidebar: open on click (if needed)
          // Most widgets open when button is clicked or can be auto-opened if configured in Chatbase.
          // Here, we simulate a click if their global function is available.
          if (window.ChatbaseWidget) {
            window.ChatbaseWidget.open();
          }
        }}
        className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full shadow-lg text-base font-semibold bg-royalgold text-midnight hover:shadow-glow-gold animate-fade-in"
        style={{ border: "2px solid #010c43" }}
        aria-label="Open Co-Pilot chat"
      >
        🧭 Ask the Co-Pilot
      </button>
      {/* --- Chatbase script will add its own widget; our button helps trigger opening if desired --- */}

      {/* Page Content */}
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
            {filteredPartners
              .sort((a, b) => a.display_priority - b.display_priority)
              .map((partner) => (
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
