import { z } from 'zod';

export const threadSchema = z.object({
  content: z.string().min(1, 'Thread content is required'),
  imageUrl: z.string().optional(),
});
export type threadInputs = z.infer<typeof threadSchema>;
  