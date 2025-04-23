
import React from "react";
import Header from "@/components/Header";
import HallOfExperts from "@/components/HallOfExperts";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const HallOfExpertsPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Helmet>
        <title>Hall of Experts | 1 Asset Exchange Team</title>
        <meta name="description" content="Meet the team of experts behind 1 Asset Exchange, dedicated to transforming digital assets and building innovative blockchain solutions." />
      </Helmet>
      <Header />
      <main>
        <HallOfExperts />
      </main>
      <Footer />
    </div>
  );
};

export default HallOfExpertsPage;
