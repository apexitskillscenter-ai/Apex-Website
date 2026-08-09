import { z } from "zod";

/**
 * Single Zod schema for the lead form. Used on the client (react-hook-form
 * resolver) AND the server (API route) so validation can never be bypassed.
 */
export const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  // Accepts Pakistani formats: 03001234567, +923001234567, with spaces/dashes.
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  course: z.string().max(120).optional(),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

/**
 * Schema for the standalone Admission / lead-gen form. Five conversion-focused
 * fields. On submit the data is formatted into a WhatsApp message, so the
 * shape is kept simple and human-readable.
 */
export const admissionSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/, "Phone number contains invalid characters"),
  course: z.string().min(1, "Please choose a course"),
  city: z
    .string()
    .min(2, "Please enter your city")
    .max(60, "City is too long"),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type AdmissionFormValues = z.infer<typeof admissionSchema>;
