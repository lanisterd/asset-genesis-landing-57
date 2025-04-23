
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import BasicInfoSection from "./BasicInfoSection";
import InquiryTypeSection from "./InquiryTypeSection";
import BookCallSection from "./BookCallSection";
import ExploreServicesSection from "./ExploreServicesSection";
import PortfolioVenturesSection from "./PortfolioVenturesSection";
import GeneralInquirySection from "./GeneralInquirySection";
import ConfirmHumanSection from "./ConfirmHumanSection";
import SuccessDialog from "./SuccessDialog";
import { formSchema, defaultValues, FormValues } from "./formSchema";

interface UnifiedInquiryFormProps {
  preSelectedType?: "bookCall" | "exploreServices" | "portfolio" | "general";
  ventureName?: string;
}

const UnifiedInquiryFormShell: React.FC<UnifiedInquiryFormProps> = ({
  preSelectedType,
  ventureName,
}) => {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
      inquiryType: preSelectedType || defaultValues.inquiryType,
      ventureName: ventureName || undefined,
    },
  });

  const inquiryType = form.watch("inquiryType");

  const onSubmit = async (data: FormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setShowSuccessDialog(true);
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-6 text-center">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Fill out this form and our team will get back to you within 3 working days
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {formStep === 0 && (
            <div className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 text-midnight">Basic Information</h3>
              <BasicInfoSection control={form.control} />
              <InquiryTypeSection control={form.control} />
              <div className="mt-8 text-right">
                <Button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="bg-royalgold hover:bg-royalgold/90 text-midnight font-medium rounded-lg px-6 py-3 flex items-center"
                >
                  Next Step <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          {formStep === 1 && (
            <div className="animate-fade-in">
              {inquiryType === "bookCall" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Book a Strategy Call</h3>
                  <BookCallSection control={form.control} />
                </>
              )}
              {inquiryType === "exploreServices" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Explore Our Services</h3>
                  <ExploreServicesSection control={form.control} />
                </>
              )}
              {inquiryType === "portfolio" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Portfolio Ventures</h3>
                  <PortfolioVenturesSection control={form.control} />
                </>
              )}
              {inquiryType === "general" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">General Inquiry</h3>
                  <GeneralInquirySection control={form.control} />
                </>
              )}
              <div className="mt-8 border-t pt-6">
                <ConfirmHumanSection control={form.control} />
                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormStep(0)}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-royalgold hover:bg-royalgold/90 text-midnight font-medium rounded-lg px-8 py-3 animate-pulse"
                  >
                    Submit & Connect Me
                  </Button>
                </div>
              </div>
            </div>
          )}
        </form>
      </Form>
      <SuccessDialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </div>
  );
};

export default UnifiedInquiryFormShell;
