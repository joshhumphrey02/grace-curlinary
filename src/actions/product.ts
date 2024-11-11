'use server';

import { revalidatePath } from 'next/cache';
// import { ProductFormInput, ProductFormSchema } from '../validators/auth';
import prisma from '@/lib/prisma';
import { ActionResponse } from '@/types';
import { validateRequest } from '@/lib/lucia/validate-request';

export async function getProducts(args: {
	cursor?: string;
	take: number;
	skip: number;
	orderBy: {
		createdAt: 'asc' | 'desc';
	};
}) {
	try {
		const { user } = await validateRequest();
		const { take, skip, orderBy } = args;
		const products = await prisma.product.findMany({
			...(args.cursor && { cursor: { id: args.cursor } }),
			take,
			orderBy,
			include: {
				category: {
					select: {
						name: true,
						slug: true,
					},
				},
				likes: {
					where: {
						userId: user?.id,
					},
					select: {
						id: true,
					},
					take: 1,
				},
				subCategory: {
					select: {
						name: true,
						slug: true,
					},
				},
				images: {
					select: {
						path: true,
						name: true,
						width: true,
						height: true,
					},
					take: 1,
				},
			},
		});
		return products;
	} catch (error) {
		console.error(error);
		return [];
	}
}
export type ProductsType = Awaited<ReturnType<typeof getProducts>>;
export async function getProductData(
	productId?: string,
	selectCategory?: boolean
) {
	try {
		if (!productId) return null;
		const product = await prisma.product.findUnique({
			where: { id: productId },
			select: {
				id: true,
				name: true,
				description: true,
				price: true,
				createdAt: true,
				images: {
					select: {
						path: true,
						name: true,
						width: true,
						height: true,
					},
					take: 5,
				},
				subCategory: {
					select: {
						name: true,
						slug: true,
					},
				},
				category: {
					select: {
						name: true,
						slug: true,
						products: {
							select: {
								id: true,
								name: true,
								description: true,
								price: true,
								images: {
									select: {
										path: true,
										name: true,
										width: true,
										height: true,
									},
									take: 1,
								},
								likes: {
									select: {
										userId: true,
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
							take: 4,
							orderBy: {
								createdAt: 'desc',
							},
						},
					},
				},
			},
		});
		return product;
	} catch (error) {
		console.log(error);
		return null;
	}
}
export type ProductType = Awaited<ReturnType<typeof getProductData>>;

// export async function createProduct(
// 	_: any,
// 	data: ProductFormInput
// ): Promise<ActionResponse<ProductFormInput>> {
// 	try {
// 		const parsed = ProductFormSchema.safeParse(data);
// 		if (!parsed.success) {
// 			const err = parsed.error.flatten();
// 	return {
// 		fieldError: {
// 			name: err.fieldErrors.name?.[0],
// 			description: err.fieldErrors.description?.[0],
// 			category: err.fieldErrors.category?.[0],
// 			images: err.fieldErrors.images?.[0],
// 		},
// 	};
// }
// const { id, images, name, description, category } = data;
// if (id) {
// 	await prisma.products.update({
// 		where: {
// 			id,
// 		},
// 		data: {
// 			name,
// 			description,
// 			category: {
// 				connect: {
// 					name: category,
// 				},
// 			},
// ...(subCategory
// 	? {
// 			subcategory: {
// 				connect: {
// 					name: subCategory,
// 				},
// 			},
// 	  }
// 	: {}),
// ...(images?.length
// 	? {
// 			images: {
// 				connectOrCreate: images.map(({ path }) => ({
// 					where: {
// 						url,
// 					},
// 					create: {
// 						url,
// 					},
// 				})),
// 			},
// 	  }
// 	: {}),
// ...(features?.length
// 	? {
// 			features: {
// 				deleteMany: {},
// 				create: features.map(({ name, content }) => ({
// 					name,
// 					content,
// 				})),
// 			},
// 	  }
// 	: {}),
// ...(specs?.length
// 	? {
// 			specs: {
// 				deleteMany: {},
// 				create: specs.map(({ name, content, group }) => ({
// 					name,
// 					content,
// 					spec: {
// 						connect: {
// 							name: group,
// 						},
// 					},
// 				})),
// 			},
// 	  }
// 	: {}),
// 	},
// });
// revalidatePath('/admin/products');
// return {
// 	data: true,
// };
// } else {
// await prisma.product.create({
// 	data: {
// 		name,
// 		description,
// 		category: {
// 			connect: {
// 				name: category,
// 			},
// 		},
// ...(subCategory
// 	? {
// 			subcategory: {
// 				connect: {
// 					name: subCategory,
// 				},
// 			},
// 	  }
// 	: {}),
// ...(images
// 	? {
// 			images: {
// 				create: images.map(({ url }) => ({ url })),
// 			},
// 	  }
// 	: {}),
// ...(features?.length
// 	? {
// 			features: {
// 				create: features.map(({ name, content }) => ({
// 					name,
// 					content,
// 				})),
// 			},
// 	  }
// 	: {}),
// ...(specs?.length
// 	? {
// 			specs: {
// 				create: specs.map(({ name, content, group }) => ({
// 					name,
// 					content,
// 					spec: {
// 						connect: {
// 							name: group,
// 						},
// 					},
// 				})),
// 			},
// 	  }
// 	: {}),
// 		},
// 	});
// 	revalidatePath('/admin/products');
// 	return {
// 		data: true,
// 	};
// }
// 	} catch (error) {
// 		console.log(error);
// 		return {
// 			formError: 'Error occurred',
// 		};
// 	}
// }

// export async function deleteProduct(productId: string) {
// 	try {
// 		if (!productId) return false;
// 		await prisma.products.delete({
// 			where: { id: productId },
// 		});
// 		revalidatePath('/admin/products');
// 		return true;
// 	} catch (error) {
// 		console.log(error);
// 		return false;
// 	}
// }
