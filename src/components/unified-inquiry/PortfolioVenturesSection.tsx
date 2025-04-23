
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

interface Props {
  control: any;
}

const PortfolioVenturesSection: React.FC<Props> = ({ control }) => (
  <div className="grid grid-cols-1 gap-6">
    <FormField
      control={control}
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
      control={control}
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
      control={control}
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
);

export default PortfolioVenturesSection;
