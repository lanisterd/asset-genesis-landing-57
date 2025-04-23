
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  control: any;
}

const ExploreServicesSection: React.FC<Props> = ({ control }) => (
  <div className="grid grid-cols-1 gap-6">
    <FormField
      control={control}
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
      control={control}
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
      control={control}
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
);

export default ExploreServicesSection;
