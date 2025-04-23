
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  role: z.string().optional(),
  whatsapp: z.string().optional(),
  telegram: z.string().optional(),
  inquiryType: z.enum(["bookCall", "exploreServices", "portfolio", "general"]),

  preferredDate: z.date().optional(),
  callObjective: z.enum(["productDemo", "partnerDiscussion", "technicalAdvice", "other"]).optional(),

  serviceInterest: z.enum(["AgentOps", "RapidStack", "TokenCore"]).optional(),
  orgType: z.enum(["Startup", "DAO", "Enterprise"]).optional(),
  integrationNeeds: z.string().optional(),

  ventureName: z.string().optional(),
  applicationType: z.enum(["applying", "exploring"]).optional(),
  pitchDeck: z.string().optional(),

  inquiryPurpose: z.enum(["newsletter", "media", "general", "speaking", "other"]).optional(),
  message: z.string().optional(),

  isHuman: z.boolean().refine(val => val === true, {
    message: "Please confirm you are human"
  })
});

export type FormValues = z.infer<typeof formSchema>;

export const defaultValues: Partial<FormValues> = {
  inquiryType: "general",
  isHuman: false,
};
