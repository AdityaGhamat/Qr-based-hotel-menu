import { z } from "zod";

export const signInSchema = z.object({
  name: z.string().min(6, "Name is too small").max(256, "Name is too large"),
  email: z.string().min(6, "Email is too small").max(256, "Email is too large"),
});
