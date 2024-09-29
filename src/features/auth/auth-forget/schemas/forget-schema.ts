import { z } from "zod";

export const forgetPasswordSchema = z.object({
    email: z.string().email(),
  });
export type forgetPasswordInputs = z.infer<typeof forgetPasswordSchema>;
  