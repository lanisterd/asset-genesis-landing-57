
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface Props {
  control: any;
}

const InquiryTypeSection: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
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
);

export default InquiryTypeSection;
