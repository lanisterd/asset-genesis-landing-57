
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Calendar, Briefcase, User, Mail, Phone, MessageSquare } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  role: z.string().optional(),
  whatsapp: z.string().optional(),
  telegram: z.string().optional(),
  inquiryType: z.enum(["bookCall", "exploreServices", "portfolio", "general"]),
  
  // Book a Call fields
  preferredDate: z.date().optional(),
  callObjective: z.enum(["productDemo", "partnerDiscussion", "technicalAdvice", "other"]).optional(),
  
  // Explore Services fields
  serviceInterest: z.enum(["AgentOps", "RapidStack", "TokenCore"]).optional(),
  orgType: z.enum(["Startup", "DAO", "Enterprise"]).optional(),
  integrationNeeds: z.string().optional(),
  
  // Portfolio fields
  ventureName: z.string().optional(),
  applicationType: z.enum(["applying", "exploring"]).optional(),
  pitchDeck: z.string().optional(),
  
  // General Inquiry fields
  inquiryPurpose: z.enum(["newsletter", "media", "general", "speaking", "other"]).optional(),
  message: z.string().optional(),
  
  // Required checkbox
  isHuman: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you are human" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<FormValues> = {
  inquiryType: "general",
  isHuman: false,
};

interface UnifiedInquiryFormProps {
  preSelectedType?: "bookCall" | "exploreServices" | "portfolio" | "general";
  ventureName?: string;
}

export function UnifiedInquiryForm({ preSelectedType, ventureName }: UnifiedInquiryFormProps) {
  const { toast } = useToast();
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formStep, setFormStep] = useState(0);

  // Initialize form with preselected values if provided
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...defaultValues,
      inquiryType: preSelectedType || defaultValues.inquiryType,
      ventureName: ventureName || undefined,
    },
  });
  
  const inquiryType = form.watch("inquiryType");

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      // Simulate form submission - in a real scenario this would connect to a backend service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      // Show success message
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Your full name" 
                            className="pl-10 border-gray-300 focus:border-royalgold" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="your@email.com" 
                            className="pl-10 border-gray-300 focus:border-royalgold" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="Your company name" 
                            className="pl-10 border-gray-300 focus:border-royalgold" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role / Title</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your position" 
                          className="border-gray-300 focus:border-royalgold" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp Number</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="+1 123 456 7890" 
                            className="pl-10 border-gray-300 focus:border-royalgold" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telegram"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telegram Handle</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="@username" 
                          className="border-gray-300 focus:border-royalgold" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="inquiryType"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel>How can we help you? *</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2"
                      >
                        <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'bookCall' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                          <RadioGroupItem value="bookCall" id="bookCall" />
                          <label htmlFor="bookCall" className="cursor-pointer font-medium text-sm">Book a Call</label>
                        </div>
                        <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'exploreServices' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                          <RadioGroupItem value="exploreServices" id="exploreServices" />
                          <label htmlFor="exploreServices" className="cursor-pointer font-medium text-sm">Explore Services</label>
                        </div>
                        <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'portfolio' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                          <RadioGroupItem value="portfolio" id="portfolio" />
                          <label htmlFor="portfolio" className="cursor-pointer font-medium text-sm">Portfolio Ventures</label>
                        </div>
                        <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'general' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                          <RadioGroupItem value="general" id="general" />
                          <label htmlFor="general" className="cursor-pointer font-medium text-sm">General Inquiry</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
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
              {/* Book a Call Section */}
              {inquiryType === "bookCall" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Book a Strategy Call</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Preferred Date/Time *</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal border-gray-300 flex justify-start items-center",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select date</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <CalendarComponent
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className="p-3 pointer-events-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="callObjective"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Call Objective *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-royalgold">
                                <SelectValue placeholder="Select an objective" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="productDemo">Product Demo</SelectItem>
                              <SelectItem value="partnerDiscussion">Partner Discussion</SelectItem>
                              <SelectItem value="technicalAdvice">Technical Advice</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {/* Explore Services Section */}
              {inquiryType === "exploreServices" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Explore Our Services</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                            >
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'AgentOps' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="AgentOps" id="AgentOps" />
                                <label htmlFor="AgentOps" className="cursor-pointer font-medium text-sm">AgentOps</label>
                              </div>
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'RapidStack' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="RapidStack" id="RapidStack" />
                                <label htmlFor="RapidStack" className="cursor-pointer font-medium text-sm">RapidStack</label>
                              </div>
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'TokenCore' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="TokenCore" id="TokenCore" />
                                <label htmlFor="TokenCore" className="cursor-pointer font-medium text-sm">TokenCore</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="orgType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Organization *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
                            >
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'Startup' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="Startup" id="Startup" />
                                <label htmlFor="Startup" className="cursor-pointer font-medium text-sm">Startup</label>
                              </div>
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'DAO' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="DAO" id="DAO" />
                                <label htmlFor="DAO" className="cursor-pointer font-medium text-sm">DAO</label>
                              </div>
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'Enterprise' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="Enterprise" id="Enterprise" />
                                <label htmlFor="Enterprise" className="cursor-pointer font-medium text-sm">Enterprise</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="integrationNeeds"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Integration Needs</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your integration needs..." 
                              className="border-gray-300 focus:border-royalgold resize-none min-h-[100px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {/* Portfolio Section */}
              {inquiryType === "portfolio" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">Portfolio Ventures</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="ventureName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Venture Name *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-royalgold">
                                <SelectValue placeholder="Select a venture" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1AssetLabs">1 Asset Labs</SelectItem>
                              <SelectItem value="StoryProtocol">Story Protocol</SelectItem>
                              <SelectItem value="BigWater">BigWater</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="applicationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Are you applying or exploring? *</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
                            >
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'applying' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="applying" id="applying" />
                                <label htmlFor="applying" className="cursor-pointer font-medium text-sm">I'm applying</label>
                              </div>
                              <div className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer ${field.value === 'exploring' ? 'bg-royalgold/10 border-royalgold' : 'hover:bg-gray-50'}`}>
                                <RadioGroupItem value="exploring" id="exploring" />
                                <label htmlFor="exploring" className="cursor-pointer font-medium text-sm">Just exploring</label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pitchDeck"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pitch Deck / Link</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="URL to your pitch deck or website" 
                              className="border-gray-300 focus:border-royalgold" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription>
                            Link to your pitch deck or project website
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {/* General Inquiry Section */}
              {inquiryType === "general" && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-midnight">General Inquiry</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <FormField
                      control={form.control}
                      name="inquiryPurpose"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purpose *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-royalgold">
                                <SelectValue placeholder="Select a purpose" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="newsletter">Newsletter</SelectItem>
                              <SelectItem value="media">Media</SelectItem>
                              <SelectItem value="general">General Question</SelectItem>
                              <SelectItem value="speaking">Speaking Opportunity</SelectItem>
                              <SelectItem value="other">Something Else</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Type your message here..." 
                              className="border-gray-300 focus:border-royalgold resize-none min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}

              {/* Final section with human check and submit button */}
              <div className="mt-8 border-t pt-6">
                <FormField
                  control={form.control}
                  name="isHuman"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-royalgold data-[state=checked]:border-royalgold"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I am human *
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Thank You!</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogDescription className="text-base">
              We'll get back to you within 3 working days. For urgent matters, contact us at{" "}
              <a 
                href="mailto:token@1assetexchange.xyz" 
                className="text-royalgold font-medium hover:underline"
              >
                token@1assetexchange.xyz
              </a>.
            </DialogDescription>
          </div>
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-royalgold hover:bg-royalgold/90 text-midnight font-medium"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
