import { z } from "zod";
import type { signInSchema } from "../schema/signin.schema";
export type signin = z.infer<typeof signInSchema>;
