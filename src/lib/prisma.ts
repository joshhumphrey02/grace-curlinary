import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	// @ts-expect-error @typescript-eslint/ban-ts-comment
	if (!global.prisma) {
		// @ts-expect-error @typescript-eslint/ban-ts-comment
		global.prisma = new PrismaClient();
	} // @ts-expect-error @typescript-eslint/ban-ts-comment
	prisma = global.prisma;
}

export default prisma;
