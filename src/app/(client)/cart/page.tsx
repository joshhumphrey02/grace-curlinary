import ProductCard from '@/components/client/cart/product-card';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import Summary, { CheckAll } from '@/components/client/cart/summary';
import SearchForm from '@/components/shared/search-form';

interface Props {
	searchParams: Promise<{
		search?: string;
	}>;
}

export default async function Cart(props: Props) {
	const searchParams = await props.searchParams;
	return (
		<div className="px-4 sm:px-16 pt-4 pb-10 space-y-6">
			<Breadcrumb className="">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Cart</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="flex gap-6 items-center">
				<h2 className="text-xl sm:text-2xl font-bold ">Cart</h2>
				<CheckAll className="hidden sm:flex" />
			</div>
			<div className="grid sm:grid-cols-[65%,auto] gap-6">
				<div className="flex flex-col gap-4">
					{Array(5)
						.fill(null)
						.map((_, index) => (
							<ProductCard key={index} />
						))}
				</div>
				<Summary />
			</div>
			<SearchForm open={!!searchParams?.search} />
		</div>
	);
}
