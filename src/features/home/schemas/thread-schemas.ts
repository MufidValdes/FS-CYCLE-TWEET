import { z } from 'zod';

export const threadSchema = z.object({
  content: z.string().min(1, 'Thread content is required'),
  imageUrl: z.any().optional(),
});
export type threadInputs = z.infer<typeof threadSchema>;
  
export interface CreateThreadDTO {
  content: string;
  imageUrl?: File | string;
}