
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  control: any;
}

const GeneralInquirySection: React.FC<Props> = ({ control }) => (
  <div className="grid grid-cols-1 gap-6">
    <FormField
      control={control}
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
      control={control}
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
);

export default GeneralInquirySection;
