import Hero from '@/components/client/home/hero';
import Categories from '@/components/client/home/categories';
import SearchForm from '@/components/shared/search-form';
import { getProducts } from '@/actions/product';
import Meal from '@/components/client/shared/meal';
import MealsGridLayout from '@/components/client/shared/meals-grid-layout';

interface Props {
	searchParams: Promise<{
		search?: string;
		take?: string;
		skip?: string;
		orderBy?: 'desc' | 'asc';
	}>;
}

export default async function Home(props: Props) {
	const { search, take, skip, orderBy } = await props.searchParams;
	const data = await getProducts({
		take: 15,
		skip: 0,
		orderBy: {
			createdAt: 'desc',
		},
	});
	return (
		<div className="grid p-4 gap-16  sm:px-16 pt-8 min-h-[50vh] font-sans">
			<div className="flex flex-col gap-4">
				<Hero />
				<Categories data={categorydata} />
				<MealsGridLayout title="Popular Meals" data={data} />
			</div>
			<SearchForm open={!!search} />
		</div>
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
