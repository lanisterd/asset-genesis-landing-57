
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UnifiedInquiryForm } from "@/components/UnifiedInquiryForm";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-midnight mb-4">
              Get in Touch with 1 Asset Exchange
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to partner with us, join our portfolio, or simply learn more about what we do,
              we're here to help. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          
          <UnifiedInquiryForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
