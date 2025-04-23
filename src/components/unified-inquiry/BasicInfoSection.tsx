
import React from "react";
import { User, Mail, Briefcase, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";

interface Props {
  control: any;
}

const BasicInfoSection: React.FC<Props> = ({ control }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <FormField
      control={control}
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
      control={control}
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
      control={control}
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
      control={control}
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
      control={control}
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
      control={control}
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
);

export default BasicInfoSection;
