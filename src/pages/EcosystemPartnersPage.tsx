
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { partners } from "@/components/PartnerEcosystem";
import EcosystemPartnerFilter from "@/components/ecosystem/EcosystemPartnerFilter";
import EcosystemPartnerGrid from "@/components/ecosystem/EcosystemPartnerGrid";
import CoPilotButton from "@/components/ecosystem/CoPilotButton";
import { Button } from "@/components/ui/button";

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

  // Inject Chatbase (or other) chat widget script once on mount
  useEffect(() => {
    if (document.getElementById("co-pilot-chat-widget-script")) return;
    const script = document.createElement("script");
    script.id = "co-pilot-chat-widget-script";
    script.defer = true;
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "YOUR-CHATBASE-ID"); // Change this!
    script.setAttribute("domain", window.location.hostname);
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <CoPilotButton />
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
          <EcosystemPartnerFilter
            categories={categories}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          {/* Partners Grid */}
          <EcosystemPartnerGrid partners={filteredPartners}/>
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
