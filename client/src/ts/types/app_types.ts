import { z } from 'zod';
import { loginSchema } from '../schemas/app_schemas';

export type LoginFormValues = z.infer<typeof loginSchema>;
