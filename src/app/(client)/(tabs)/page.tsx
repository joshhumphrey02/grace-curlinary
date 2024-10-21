import Hero from '@/components/client/home/hero';
import Categories from '@/components/client/home/categories';
import Meals from '@/components/client/shared/meals';
import SearchForm from '@/components/shared/search-form';

interface Props {
	searchParams: {
		search?: string;
	};
}

export default function Home({ searchParams }: Props) {
	return (
		<div className="grid p-4 gap-16  sm:px-16 pt-8 min-h-[50vh] font-sans">
			<div className="flex flex-col gap-4">
				<Hero />
				<Categories data={categorydata} />
				<Meals />
			</div>
			<SearchForm open={!!searchParams?.search} />
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
