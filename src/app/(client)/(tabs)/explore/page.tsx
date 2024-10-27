import ExploreCategories from '@/components/client/explore/categories';
import { ExploreSearch } from '@/components/client/explore/search';
import Meals from '@/components/client/shared/meals';
import SearchForm from '@/components/shared/search-form';
import { ChevronDown, MapPin } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface Props {
	searchParams: {
		search?: string;
	};
}

export default function Explore({ searchParams }: Props) {
	const borderImage = {
		borderImage:
			'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)) fill 1',
		backgroundImage: "url('/banner.webp')",
	};
	return (
		<>
			<Breadcrumb className=" py-4 sm:py-8 px-4 sm:px-16">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Explore</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="grid px-4 gap-16  sm:px-16 min-h-[50vh] font-sans">
				<div className="flex flex-col gap-4">
					<ExploreSearch />
					<div className="flex items-center gap-2 ">
						<span className="flex items-center text-nowrap">
							<MapPin className="w-5 h-5 text-tertiary mr-2" />{' '}
							<span className="text-gray-500 text-sm">Deliver to:</span>
						</span>
						<span className="text-sm font-medium line-clamp-1">
							No 20, Rumuodara, PortHarcourt Nigeria
						</span>
					</div>
					<ExploreCategories data={categorydata} />
					<div className="pb-6">
						<div className=" h-full sm:h-72 w-full overflow-hidden rounded-xl ">
							<div
								style={borderImage}
								className=" h-full w-full bg-no-repeat bg-cover sm:bg-center px-4 py-6 flex justify-end items-center ">
								<div className="flex flex-col sm:gap-3">
									<h3 className="text-2xl mb-2 sm:border-b-2 sm:border-tertiary sm:text-3xl flex flex-col sm:flex-row sm:gap-1 text-white leading-[2rem] font-extrabold">
										<span className=" ">Trending</span>
										<span className="border-b-2 border-tertiary sm:border-0">
											Tasty Meals
										</span>
									</h3>
									<span className="text-sm sm:text-base text-bold text-white/90">
										Discount up to 30% <br className="sm:hidden" /> on first
										order
									</span>
									<div className="hidden sm:flex justify-center animate-bounce text-tertiary">
										<ChevronDown className="w-10 h-10" strokeWidth={3} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pb-10">
						<Meals />
					</div>
				</div>
				<SearchForm open={!!searchParams?.search} />
			</div>
		</>
	);
}

const categorydata = [
	{
		name: 'Fast Food',
		link: '#',
		img: '/fried-rice.jpeg',
	},
	{
		name: 'Small chops',
		link: '#',
		img: '/small chops.jpeg',
	},
	{
		name: 'Snacks',
		link: '#',
		img: '/baked.jpeg',
	},
	{
		name: 'Smoothies',
		link: '#',
		img: '/parfait.jpeg',
	},
];
