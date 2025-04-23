
import React from "react";
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  control: any;
}

const ConfirmHumanSection: React.FC<Props> = ({ control }) => (
  <FormField
    control={control}
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
        <FormMessage className="mt-0" />
      </FormItem>
    )}
  />
);

export default ConfirmHumanSection;
