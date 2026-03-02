import { z } from 'zod';

const incidentTypeSchema = z.enum(['auto-accidents', 'truck-accidents', 'slip-and-fall', 'wrongful-death']);

export const contactIntakeSchema = z
  .object({
    firstName: z.string().trim().min(1, 'Name is required.').max(60),
    phone: z.string().trim().min(7, 'Phone number is required.').max(30),
    email: z.string().trim().email('Provide a valid email address.').max(120),
    phoneOrEmail: z.string().trim().max(120).optional().or(z.literal('')),
    county: z.string().trim().max(80).optional().or(z.literal('')),
    incidentType: incidentTypeSchema,
    dateOfIncident: z.string().trim().min(1, 'Date of incident is required.').max(30),
    treatmentStatus: z.string().trim().max(120).optional().or(z.literal('')),
    briefDescription: z.string().trim().min(10, 'Brief description is required.').max(500, 'Keep description under 500 characters.'),
    consent: z.boolean().refine((value) => value === true, { message: 'Consent is required.' }),
    smsConsent: z.boolean().optional(),
    hpField: z.string().max(0).optional().or(z.literal(''))
  });

export const chatIntakeSchema = z
  .object({
    firstName: z.string().trim().max(60).optional().or(z.literal('')),
    phone: z.string().trim().max(30).optional().or(z.literal('')),
    email: z.string().trim().email('Provide a valid email address.').max(120).optional().or(z.literal('')),
    phoneOrEmail: z.string().trim().max(120).optional().or(z.literal('')),
    county: z.string().trim().max(80).optional().or(z.literal('')),
    incidentType: incidentTypeSchema,
    dateOfIncident: z.string().trim().max(30).optional().or(z.literal('')),
    treatmentStatus: z.string().trim().max(120).optional().or(z.literal('')),
    briefDescription: z
      .string()
      .trim()
      .max(500, 'Keep description under 500 characters.')
      .optional()
      .or(z.literal('')),
    consent: z.boolean().refine((value) => value === true, { message: 'Consent is required.' }),
    smsConsent: z.boolean().optional(),
    hpField: z.string().max(0).optional().or(z.literal(''))
  })
  .refine((data) => Boolean(data.phone?.trim() || data.email?.trim() || data.phoneOrEmail?.trim()), {
    message: 'Provide a reachable phone number or email.',
    path: ['phone']
  });

export type ContactIntakePayload = z.infer<typeof contactIntakeSchema>;
export type ChatIntakePayload = z.infer<typeof chatIntakeSchema>;
export type IntakePayload = ContactIntakePayload | ChatIntakePayload;
