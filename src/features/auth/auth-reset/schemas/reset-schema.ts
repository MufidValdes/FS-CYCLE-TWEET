import { z } from "zod";

export const resetPasswordSchema = z.object({
    token: z.string(),
  password: z.string().min(6),
});
export type resetPasswordInputs = z.infer<typeof resetPasswordSchema>;
  