import { z } from 'zod';

const schema = z.object({
	POSTGRES_URL: z.string(),
	NEXT_PUBLIC_APP_URL: z.string(),
	NODE_ENV: z.string(),
	WHITELISTED_EMAILS: z.string(),
});
export const env = schema.parse(process.env);
