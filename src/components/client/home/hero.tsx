import { Button } from '@/components/ui/button';
import SearchTrigger from '../shared/search-trigger';
import bgImage from '@/assets/header-image1.jpeg';
import { ChevronRight } from 'lucide-react';
interface Props {
	children?: string;
}

export default function Hero(props: Props) {
	const borderImage = {
		borderImage:
			'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .5), rgba(0, 0, 0, .7)) fill 1',
		backgroundImage: "url('/banner.webp')",
	};

	return (
		<div className="grid gap-6 sm:gap-1 sm:grid-cols-2">
			<div className="flex justify-between sm:flex-col gap-6">
				<h1 className="text-4xl self-start sm:text-[4.1rem] lg:text-[4.5rem] font-roboto font-extrabold leading-[3rem] sm:leading-[5rem] flex flex-col gap-1 ">
					<span className="">Satisfy Your</span>
					<span className="ml-12 sm:ml-20">
						<span
							style={{ backgroundImage: `url('${bgImage.src}')` }}
							className="bg-clip-text text text-transparent">
							Taste
						</span>{' '}
						Budz
					</span>
				</h1>
				<p className="text-xs hidden sm:flex font-mono leading-[2rem] pr-16 font-normal">
					Savor the taste of unforgettable flavors crafted to perfection.
					Discover fresh, delightful dishes that turn every meal into a
					celebration!
				</p>
				<SearchTrigger className=" sm:hidden rounded-full p-4 bg-card shadow text-primary h-fit w-fit" />
				<SearchTrigger className=" mt-4 hidden sm:flex flex-row-reverse rounded-[2rem] shadow-md  py-1" />
			</div>
			<div className=" h-full w-full overflow-hidden rounded-xl ">
				<div
					style={borderImage}
					className=" h-full w-full bg-no-repeat bg-cover px-4 py-6 flex justify-end items-center ">
					<div className="flex flex-col">
						<h3 className="text-2xl mb-2 sm:text-3xl flex flex-col text-white leading-[2rem] font-extrabold">
							<span className=" ">Trending</span>
							<span className="border-b-2 border-tertiary">Teasty Meals</span>
						</h3>
						<span className="text-sm sm:text-base text-bold text-white/90">
							Discount up to 30% <br /> on first order
						</span>
						<Button
							variant="link"
							className="w-fit p-0 flex text-white/80 items-center hover:text-tertiary group text-sm font-medium">
							Order now{' '}
							<ChevronRight className="w-4 group-hover:ml-1 transition-all h-4 ml-1" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
