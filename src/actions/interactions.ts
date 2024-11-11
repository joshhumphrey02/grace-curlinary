'use server';

import { validateRequest } from '@/lib/lucia/validate-request';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getLikedItems() {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return [];
		}
		const likedItems = await prisma.likes.findMany({
			where: {
				userId: user.id,
			},
			select: {
				product: {
					select: {
						id: true,
						name: true,
						price: true,
						images: {
							select: {
								path: true,
								width: true,
								height: true,
							},
							take: 1,
						},
						category: {
							select: {
								name: true,
								slug: true,
							},
						},
						subCategory: {
							select: {
								name: true,
								slug: true,
							},
						},
					},
				},
			},
		});
		return likedItems;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export type GetLikedItems = Awaited<ReturnType<typeof getLikedItems>>;

export async function likeAnItem(productId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}

		// if (user?.userType === 'GUEST') return { error: 'Unauthorized' };
		const existingLike = await prisma.likes.findFirst({
			where: {
				userId: user.id,
				productId,
			},
		});
		if (existingLike) {
			await prisma.likes.delete({ where: { id: existingLike.id } });
		} else {
			await prisma.likes.create({ data: { userId: user.id, productId } });
		}
		revalidatePath('/layout');
		return {
			res: existingLike
				? 'Item saved successfully'
				: 'Item removed successfully',
		};
	} catch (error) {
		console.log(error);
		return { error: 'Error occured' };
	}
}

export async function recordViewedItem(productId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return false;
		}
		await prisma.$transaction(async (tx) => {
			const existingView = await tx.viewed.findFirst({
				where: {
					userId: user.id,
					productId,
				},
			});
			{
				!existingView &&
					(await tx.viewed.create({
						data: { userId: user.id, productId },
					}));
			}
		});
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
