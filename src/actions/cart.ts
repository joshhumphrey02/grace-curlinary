'use server';

import { validateRequest } from '@/lib/lucia/validate-request';
import prisma from '@/lib/prisma';

type AddToCartProps = {
	productId: string;
	cartId: string;
	quantity: number;
};
type UpdateCartProps = AddToCartProps & {
	cartItemId: string;
};
export type Cart = Awaited<ReturnType<typeof getCart>>;
export async function getCart() {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return [];
		}
		const cartItems = await prisma.cart.findMany({
			where: { userId: user.id },
			select: {
				id: true,
				items: {
					select: {
						id: true,
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
								likes: {
									where: {
										userId: user.id,
									},
									select: {
										id: true,
									},
								},
							},
						},
						quantity: true,
					},
				},
			},
		});
		return cartItems;
	} catch (error) {
		console.log();
		return [];
	}
}
export async function addToCart(props: AddToCartProps) {
	try {
		const { productId, cartId, quantity } = props;
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		const existingCartItem = await prisma.cartItem.findFirst({
			where: {
				cartId,
				productId,
			},
		});
		if (existingCartItem) {
			await prisma.cartItem.update({
				where: { id: existingCartItem.id },
				data: {
					quantity,
				},
			});
		} else {
			await prisma.cartItem.create({
				data: {
					cartId,
					productId,
					quantity: quantity,
				},
			});
		}
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error adding to cart' };
	}
}

export async function updateCartItemQuantity(props: UpdateCartProps) {
	try {
		const { cartItemId, cartId, quantity } = props;
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.update({
			where: { id: cartItemId, cartId },
			data: {
				quantity,
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error updating cart item quantity' };
	}
}

export async function removeCartItem(cartItemId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.delete({
			where: { id: cartItemId },
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error removing cart item' };
	}
}

export async function removeCartItems(cartId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.deleteMany({
			where: { cartId, checked: true },
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error removing cart items' };
	}
}

export async function checkCartItem(cartId: string, cartItemId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.update({
			where: { id: cartItemId, cartId },
			data: {
				checked: true,
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error checking cart item' };
	}
}

export async function uncheckCartItem(cartId: string, cartItemId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.update({
			where: { id: cartItemId, cartId },
			data: {
				checked: false,
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error unchecking cart item' };
	}
}
export async function checkCartItems(cartId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.updateMany({
			where: { cartId },
			data: {
				checked: true,
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error checking cart items' };
	}
}

export async function uncheckCartItems(cartId: string) {
	try {
		const { session, user } = await validateRequest();
		if (!session || !user) {
			return { error: 'Unauthorized' };
		}
		await prisma.cartItem.updateMany({
			where: { cartId },
			data: {
				checked: false,
			},
		});
		return true;
	} catch (error) {
		console.log(error);
		return { error: 'Error unchecking cart items' };
	}
}
