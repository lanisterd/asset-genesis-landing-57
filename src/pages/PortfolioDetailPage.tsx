
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPortfolioItemBySlug } from "@/data/portfolio";
import { ArrowLeft, ArrowRight, ExternalLink, Globe, Calendar, CheckCircle2 } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { toast } from "sonner";

const PortfolioDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const item = slug ? getPortfolioItemBySlug(slug) : undefined;
  
  useEffect(() => {
    // If the venture doesn't exist, redirect to the portfolio page
    if (!item) {
      toast.error("Venture not found");
      navigate("/portfolio");
    }
  }, [item, navigate]);

  if (!item) {
    return null;
  }

  // For coming soon ventures, we show a more limited view
  const isComingSoon = item.status === "coming-soon";

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
                <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{item.venture_name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back button */}
          <Link to="/portfolio" className="inline-flex items-center text-sm text-midnight/70 hover:text-midnight mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              {item.sectors.map((sector) => (
                <Badge key={sector} variant="outline" className="bg-gray-50">
                  {sector}
                </Badge>
              ))}
              {isComingSoon ? (
                <Badge className="bg-amber-100 text-amber-800 border-amber-200 ml-auto">
                  Coming Soon
                </Badge>
              ) : (
                <Badge className="bg-green-100 text-green-800 border-green-200 ml-auto">
                  {item.stage}
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-3">
              {item.venture_name}
            </h1>
            <p className="text-xl text-midnight/80 mb-6">{item.tagline}</p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              {item.website && (
                <Button 
                  className="gap-2 bg-royalgold text-midnight hover:bg-royalgold/90"
                  onClick={() => window.open(item.website, '_blank')}
                >
                  <Globe size={18} />
                  Visit Website
                </Button>
              )}

              {isComingSoon ? (
                <Button variant="outline" className="gap-2">
                  Get Notified on Launch
                </Button>
              ) : (
                <Button variant="outline" className="gap-2">
                  Explore Partnership
                </Button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                <img 
                  src={item.image} 
                  alt={item.venture_name} 
                  className="w-full h-auto object-cover" 
                />
              </div>

              {/* Description */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-midnight mb-4">About {item.venture_name}</h2>
                <p className="text-midnight/80 mb-6 text-lg">{item.description}</p>
              </div>

              {!isComingSoon && (
                <>
                  {/* Challenge & Opportunity */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-midnight mb-4">Challenge & Opportunity</h2>
                    <p className="text-midnight/80 mb-6">{item.challenge_opportunity}</p>
                  </div>

                  {/* Solution Stack */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-midnight mb-4">Solution Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {item.solution_stack.map((solution, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-100"
                        >
                          <CheckCircle2 className="text-royalgold mt-1" size={18} />
                          <span className="text-midnight/80">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  {item.results && (
                    <div className="mb-10">
                      <h2 className="text-2xl font-bold text-midnight mb-4">Results</h2>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        {item.results.stats.map((stat, index) => (
                          <div key={index} className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100">
                            <div className="text-2xl font-bold text-royalgold mb-1">{stat.value}</div>
                            <div className="text-sm text-midnight/70">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Testimonials */}
                      {item.results.testimonials && item.results.testimonials.length > 0 && (
                        <div className="bg-gradient-to-r from-midnight to-purple-900 text-white p-6 rounded-xl">
                          <div className="text-lg font-medium italic mb-4">
                            "{item.results.testimonials[0].quote}"
                          </div>
                          <div className="text-sm text-white/80">
                            {item.results.testimonials[0].author}
                            {item.results.testimonials[0].role && (
                              <span>, {item.results.testimonials[0].role}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}

              {isComingSoon && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 mb-10">
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">Coming Soon</h3>
                  <p className="text-amber-700 mb-4">
                    This venture is currently in development. Sign up to get notified when it launches.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Get Notified
                    </Button>
                    <Button variant="outline" className="text-amber-800 border-amber-300">
                      Become an Early Partner
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div>
              {/* Details Card */}
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 mb-8">
                <h3 className="text-lg font-bold text-midnight mb-4">Venture Details</h3>
                
                {/* Launch Year */}
                {item.launch_year && (
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-midnight/70">
                      <Calendar size={16} />
                      <span>Launch Year</span>
                    </div>
                    <span className="font-medium text-midnight">{item.launch_year}</span>
                  </div>
                )}
                
                {/* Stage */}
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-midnight/70">
                    <span>Stage</span>
                  </div>
                  <span className="font-medium text-midnight">{item.stage}</span>
                </div>
                
                {/* Tech Stack */}
                <div className="py-3">
                  <div className="flex items-center gap-2 text-midnight/70 mb-2">
                    <span>Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech_stack.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modules Used */}
              <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 mb-8">
                <h3 className="text-lg font-bold text-midnight mb-4">1 Asset Exchange Modules</h3>
                <ul className="space-y-3">
                  {item.modules_used.map((module, index) => (
                    <li key={index} className="flex items-center gap-2 text-midnight/80">
                      <CheckCircle2 size={16} className="text-royalgold" />
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-midnight to-purple-900 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3">Work With Us</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Interested in building something similar? Get in touch with our team to explore how we can help.
                </p>
                <Button className="w-full bg-royalgold text-midnight hover:bg-royalgold/90 mb-2">
                  Book a Discovery Call
                </Button>
                <Button variant="outline" className="w-full text-white border-white/30 hover:bg-white/10">
                  View More Ventures
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

export default PortfolioDetailPage;
