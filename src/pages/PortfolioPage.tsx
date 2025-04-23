
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import { Button } from "@/components/ui/button";
import { portfolioItems, getLivePortfolioItems, getComingSoonPortfolioItems } from "@/data/portfolio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";

const PortfolioPage = () => {
  // State for filters
  const [filters, setFilters] = useState({
    sector: null as string | null,
    stage: null as string | null,
    techStack: null as string | null,
    year: null as number | null,
  });
  
  // Filter the portfolio items
  const filteredItems = portfolioItems.filter(item => {
    if (filters.sector && !item.sectors.includes(filters.sector)) return false;
    if (filters.stage && item.stage !== filters.stage) return false;
    if (filters.techStack && !item.tech_stack.includes(filters.techStack)) return false;
    if (filters.year && item.launch_year !== filters.year) return false;
    return true;
  });

  // Separate live and coming soon ventures
  const liveVentures = filteredItems.filter(item => item.status === "live");
  const comingSoonVentures = filteredItems.filter(item => item.status === "coming-soon");

  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Portfolio</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-3">Our Ventures</h1>
            <p className="text-lg text-midnight/70 max-w-3xl">
              Discover our portfolio of innovative ventures across multiple sectors, from early-stage concepts to launched products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters - Left Column */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <PortfolioFilters activeFilters={filters} setFilters={setFilters} />
              
              {/* Apply for Incubation CTA */}
              <div className="bg-gradient-to-r from-midnight to-purple-900 text-white rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3">Have a Concept?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Apply for our incubation program and turn your idea into a venture with our support.
                </p>
                <Button className="bg-royalgold text-midnight hover:bg-royalgold/90 w-full">
                  Apply for Incubation
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>

            {/* Portfolio Grid - Right Column */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Live Ventures */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-midnight mb-6">Live Ventures</h2>
                {liveVentures.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <p className="text-midnight/60">No live ventures match your filters.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {liveVentures.map((item) => (
                      <PortfolioCard key={item.slug} item={item} />
                    ))}
                  </div>
                )}
              </div>

              {/* Coming Soon Ventures */}
              {comingSoonVentures.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-midnight mb-6">Coming Soon</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {comingSoonVentures.map((item) => (
                      <PortfolioCard key={item.slug} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {/* Submit Your Venture CTA */}
              <div className="mt-16 text-center py-8 px-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-xl font-bold text-midnight mb-2">Already Building Something?</h3>
                <p className="text-midnight/70 mb-6 max-w-lg mx-auto">
                  Submit your venture for partnership opportunities and unlock resources to help you scale.
                </p>
                <Button className="bg-midnight text-white hover:bg-midnight/90">
                  Submit Your Venture
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
