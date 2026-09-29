import { z } from 'zod';

export const ASSISTANCE_CATEGORIES = [
    { id: 'rashan', title: 'Rashan / Mahana Khushk Rashan' },
    { id: 'education', title: 'Taleemi Imdad (Fees, Kitabein, Wagheira)' },
    { id: 'medical', title: 'Ilaj / Tibbi Imdad (Dawain ya Medical test)' },
    { id: 'widow_orphan', title: 'Beva / Yateem Mali Imdad' },
    { id: 'other', title: 'Deegar (Other zaroorat)' },
];

const step2Schema = z.object({
    category: z.enum(
        ['rashan', 'education', 'medical', 'widow_orphan', 'other'],
        {
            errorMap: () => ({ message: 'Baraye meherbani imdad ki qisam muntakhib karein' }),
        }
    ),
});

export { step2Schema };