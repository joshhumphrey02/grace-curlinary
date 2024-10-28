import { getProductData } from '@/actions/product';
import ProductDetails from '@/components/client/product/pro-details';
import ProductImage from '@/components/client/product/pro-image';
import ProductReviews from '@/components/client/product/pro-reviews';
import MealsGridLayout from '@/components/client/shared/meals-grid-layout';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { redirect } from 'next/navigation';

interface Props {
	params: Promise<{
		cat: string;
		proId: string;
	}>;
}

export default async function Product({ params }: Props) {
	const { cat, proId } = await params;
	const p = await getProductData(proId);
	if (!p) return redirect('/explore');
	return (
		<div>
			<Breadcrumb className=" py-3 sm:py-6 px-4 sm:px-16">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/explore">Explore</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/p/pastries">Pastries</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{p?.name}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="px-4 sm:px-16 pb-10 flex flex-col gap-8">
				<div className="grid sm:grid-cols-2 gap-6  border-b border-border pb-4">
					<ProductImage data={p} />
					<ProductDetails data={p} />
				</div>
				<div className="flex flex-col gap-2  sm:w-1/2">
					<h3 className="text-base sm:text-lg font-semibold">
						Product Description
					</h3>
					<p className="text-sm font-normal text-foreground/80">
						{p?.description}
					</p>
				</div>
				<ProductReviews />
				<div className="sm:pb-10 ">
					{/* <Meals /> */}

					<MealsGridLayout
						className="sm:grid-cols-4"
						data={p.category.products as any}
						title="Similar meals"
					/>
				</div>
			</div>
		</div>
	);
}
