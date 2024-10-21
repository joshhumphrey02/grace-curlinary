import ProductDetails from '@/components/client/product/pro-details';
import ProductImage from '@/components/client/product/pro-image';
import ProductReviews from '@/components/client/product/pro-reviews';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Product() {
	return (
		<div>
			<Breadcrumb className=" py-3 sm:py-6 px-4 sm:px-16">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/explore">Explore</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/pastries">Pastries</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Chin chin</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="px-4 sm:px-16 pb-10 flex flex-col gap-8">
				<div className="grid sm:grid-cols-2 gap-6  border-b border-border pb-4">
					<ProductImage />
					<ProductDetails />
				</div>
				<div className="flex flex-col gap-2  sm:w-1/2">
					<h3 className="text-base sm:text-lg font-semibold">
						Product Description
					</h3>
					<p className="text-sm font-normal text-foreground/80">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
						mollitia itaque doloribus eius vero aliquam modi illum atque
						doloremque id.
					</p>
				</div>
				<ProductReviews />
			</div>
		</div>
	);
}
