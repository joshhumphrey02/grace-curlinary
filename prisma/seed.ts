import { getImageUrls } from '@/actions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
	// Create Categories
	const pastryCategory = await prisma.productCategory.create({
		data: { name: 'Pastries', slug: 'pastries' },
	});

	const bakedGoodsSubCategory = await prisma.productSubCategory.create({
		data: {
			name: 'Baked Goods',
			slug: 'baked-foods',
			category: { connect: { id: pastryCategory.id } },
		},
	});

	const dessertsSubCategory = await prisma.productSubCategory.create({
		data: {
			name: 'Desserts',
			slug: 'desserts',
			category: { connect: { id: pastryCategory.id } },
		},
	});

	// Create Products
	const products = [
		{
			name: 'Croissant',
			description: 'A buttery, flaky, and delicious croissant.',
			price: 250000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Chocolate Eclair',
			description: 'Choux pastry filled with cream and topped with chocolate.',
			price: 300000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Apple Tart',
			description: 'A classic tart made with fresh apples.',
			price: 400000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Pistachio Baklava',
			description: 'Layers of phyllo pastry filled with pistachios.',
			price: 350000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Lemon Meringue Pie',
			description: 'A tangy lemon filling topped with fluffy meringue.',
			price: 450000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Cheese Danish',
			description: 'A flaky pastry filled with rich cream cheese.',
			price: 270000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Fruit Tart',
			description:
				'A colorful tart filled with custard and topped with fresh fruits.',
			price: 500000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Almond Croissant',
			description: 'A delightful almond-flavored croissant with a sweet glaze.',
			price: 320000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Raspberry Tart',
			description: 'A tart filled with fresh raspberries and cream.',
			price: 420000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Chocolate Croissant',
			description: 'A buttery croissant filled with rich chocolate.',
			price: 280000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Profiteroles',
			description:
				'Choux pastry filled with cream and drizzled with chocolate.',
			price: 370000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Vanilla Bean Tart',
			description: 'A rich tart with vanilla bean custard.',
			price: 470000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Chocolate Cake',
			description: 'A rich chocolate cake with layers of ganache.',
			price: 550000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Cinnamon Roll',
			description: 'Soft and fluffy roll topped with cream cheese frosting.',
			price: 300000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Pecan Pie',
			description: 'A classic pie filled with pecans and a sweet filling.',
			price: 400000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Tiramisu',
			description: 'A coffee-flavored dessert made with mascarpone cheese.',
			price: 420000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Mille-feuille',
			description: 'A layered pastry filled with cream and topped with icing.',
			price: 450000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Macarons',
			description: 'Delicate almond meringue cookies filled with ganache.',
			price: 150000,
			categoryId: pastryCategory.id,
			subCategoryId: dessertsSubCategory.id,
		},
		{
			name: 'Brioche',
			description: 'A soft and buttery bread perfect for breakfast.',
			price: 200000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
		{
			name: 'Puff Pastry Twists',
			description: 'Flaky twists made from puff pastry, perfect as a snack.',
			price: 220000,
			categoryId: pastryCategory.id,
			subCategoryId: bakedGoodsSubCategory.id,
		},
	];

	// Insert products and their images
	for (const product of products) {
		const createdProduct = await prisma.product.create({
			data: {
				...product,
			},
		});

		// Fetch image URLs from Unsplash
		const imageUrls = await getImageUrls(product.name);

		// Insert images for each product
		for (const { path, name, height, width } of imageUrls) {
			await prisma.fileRocord.create({
				data: {
					path,
					width,
					height,
					name,
					productId: createdProduct.id,
				},
			});
		}
	}

	console.log('Seeding completed.');
};

try {
	console.log(`Start seeding ...`);
	await prisma.$connect();

	await main();
	console.log(`Seeding finished.`);
	await prisma.$disconnect();
	process.exit();
} catch (e) {
	await prisma.$disconnect();
	console.error(e);
	process.exit(1);
}
