import { z } from "zod";

export const ageRanges = ["18-21", "22-25", "26-30", "31+"] as const;
export const deviceOptions = ["laptop", "desktop", "phone", "none"] as const;
export const internetSpeedOptions = ["fiber", "regular", "mobile"] as const;
export const hoursPerDayOptions = ["2-4", "4-6", "6-8", "8+"] as const;
export const weekendOptions = ["both", "saturday", "sunday", "no"] as const;
export const sourceOptions = ["instagram", "tiktok", "friend", "other"] as const;

export const applyStepOneSchema = z.object({
  firstName: z.string().trim().min(2).max(60),
  age: z.enum(ageRanges),
  city: z.string().trim().min(2).max(60),
  whatsapp: z
    .string()
    .trim()
    .min(7)
    .max(20)
    .regex(/^[+\d][\d\s-]*$/, "invalid_phone"),
});

export const applyStepTwoSchema = z.object({
  device: z.enum(deviceOptions),
  internetSpeed: z.enum(internetSpeedOptions),
  hoursPerDay: z.enum(hoursPerDayOptions),
  weekends: z.enum(weekendOptions),
});

export const applyStepThreeSchema = z.object({
  source: z.enum(sourceOptions),
  questions: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, { error: "consent_required" }),
});

export const applyFormSchema = applyStepOneSchema
  .merge(applyStepTwoSchema)
  .merge(applyStepThreeSchema);

export type ApplyFormValues = z.infer<typeof applyFormSchema>;
export type ApplyStepOneValues = z.infer<typeof applyStepOneSchema>;
export type ApplyStepTwoValues = z.infer<typeof applyStepTwoSchema>;
export type ApplyStepThreeValues = z.infer<typeof applyStepThreeSchema>;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(60),
  contact: z.string().trim().min(3).max(120),
  message: z.string().trim().min(5).max(2000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
