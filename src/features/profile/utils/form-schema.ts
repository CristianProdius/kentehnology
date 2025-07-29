import * as z from 'zod';

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
];

export const clientSchema = z.object({
  // Avatar is optional
  avatar: z
    .any()
    .optional()
    .refine(
      (files) =>
        !files || files?.length === 0 || files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) =>
        !files ||
        files?.length === 0 ||
        ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      '.jpg, .jpeg, .png and .webp files are accepted.'
    ),

  // Basic Information
  name: z
    .string()
    .min(2, { message: 'Client name must be at least 2 characters' })
    .max(100, { message: 'Client name must not exceed 100 characters' }),

  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .max(255, { message: 'Email must not exceed 255 characters' }),

  phone: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 characters' })
    .max(20, { message: 'Phone number must not exceed 20 characters' })
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      message: 'Please enter a valid phone number'
    }),

  // Company Information
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(100, { message: 'Company name must not exceed 100 characters' }),

  industry: z
    .string()
    .min(1, { message: 'Please select an industry' })
    .refine(
      (value) =>
        [
          'Technology',
          'Healthcare',
          'Finance',
          'Retail',
          'Manufacturing',
          'Education',
          'Real Estate',
          'Consulting'
        ].includes(value),
      { message: 'Please select a valid industry' }
    ),

  status: z
    .string()
    .min(1, { message: 'Please select a status' })
    .refine(
      (value) => ['Active', 'Inactive', 'Pending', 'Lead'].includes(value),
      { message: 'Please select a valid status' }
    )
});

export type ClientFormValues = z.infer<typeof clientSchema>;

// You can also export the options as constants
export const INDUSTRY_OPTIONS = [
  'Technology',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Education',
  'Real Estate',
  'Consulting'
] as const;

export const STATUS_OPTIONS = [
  'Active',
  'Inactive',
  'Pending',
  'Lead'
] as const;
