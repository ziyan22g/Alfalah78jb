import { z } from 'zod';

const step1Schema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'Pura naam kam az kam 3 haroof par mushtamil ho'),
  
  fatherName: z
    .string()
    .trim()
    .min(3, 'Walid ya shohar ka naam likhna zaroori hai'),

  cnic: z
    .string()
    .trim()
    .regex(/^\d{5}-\d{7}-\d{1}$/, 'Sahi CNIC number darj karein (e.g. 33100-1234567-1)'),

  phone: z
    .string()
    .trim()
    .regex(/^03\d{9}$/, 'Sahi 11 hindson ka mobile number darj karein (e.g. 03001234567)'),

  houseNo: z
    .string()
    .trim()
    .min(1, 'Ghar number ya gali ka pata darj karein'),
});

export {step1Schema}