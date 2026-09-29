import { z } from 'zod';

const step3Schema = z.object({
    // Har category ke liye common: Mahana aamdani aur afrad
    monthlyIncome: z
        .string()
        .trim()
        .min(1, 'Mahana aamdani likhna zaroori hai (agar 0 hai to 0 likhein)'),

    familyMembers: z
        .string()
        .trim()
        .min(1, 'Khandan ke kul afrad ki tadaad darj karein'),

    // Category specific fields (optional ya conditional)
    instituteName: z.string().optional(),
    classGrade: z.string().optional(),
    diseaseName: z.string().optional(),
    hospitalName: z.string().optional(),
    description: z
        .string()
        .trim()
        .min(10, 'Kam az kam 10 haroof mein apni zaroorat / halaat wazeh karein'),
});

export { step3Schema }