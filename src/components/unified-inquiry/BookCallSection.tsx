
import React from "react";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Props {
  control: any;
}

const BookCallSection: React.FC<Props> = ({ control }) => (
  <div className="grid grid-cols-1 gap-6">
    <FormField
      control={control}
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
      control={control}
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
);

export default BookCallSection;
