import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const hireUsFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be at least 5 characters." })
    .max(100, { message: "Name must not exceed 100 characters." }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  mobileNumber: z
    .string()
    .max(11, { message: "Phone number not more than 11 digit." })
    .regex(/^(\+880\s?|0)1[3-9]\d{2}-?\d{6}$/, "Invalid phone number."),

  projectTypes: z
    .array(z.string())
    .min(1, { message: "Please select at least one project type." }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." })
    .max(1000, { message: "Description must not exceed 1000 characters." }),

  file: z
    .instanceof(File)
    .optional()
    .refine(
      (file) => !file || file.size <= MAX_FILE_SIZE,
      "File size must not exceed 10MB.",
    )
    .refine(
      (file) => !file || ALLOWED_FILE_TYPES.includes(file.type),
      "Only PDF, PPT, and Word documents are allowed.",
    ),
});

export type HireUsFormData = z.infer<typeof hireUsFormSchema>;
