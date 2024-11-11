import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { uniqueId } from '@/lib/utils';
interface Props {
	children?: string;
	data: {
		name: string;
		link: string;
		img: string;
	}[];
}

export default function Categories(props: Props) {
	const { data } = props;
	return (
		<>
			<div className="space-y-4 my-6 w-full ">
				<div className="flex justify-between items-center">
					<h3 className="text-lg text-muted-foreground font-bold">
						Find by Category
					</h3>
					<span className="text-sm hidden sm:flex text-tertiary font-medium">
						See All
					</span>
				</div>
				<div className="hidden sm:grid grid-cols-4 gap-4">
					{data.map((c, i) => (
						<Link key={uniqueId()} href={`/p/${c.name}`}>
							<Card className="p-1 space-y-4 outline-tertiary transition-all duration-1000 hover:outline rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl">
								<div className="w-full h-16 sm:h-40 rounded-xl overflow-hidden">
									<img
										src={c.img}
										className="w-full h-full object-cover"
										alt="burger"
									/>
								</div>
								<div>
									<h5 className="text-xs capitalize font-bold text-center text-gray-400 text-nowrap px-1 pb-2">
										{c.name}
									</h5>
								</div>
							</Card>
						</Link>
					))}
				</div>
				<div className="flex max-w-[22rem] py-1 sm:hidden whitespace-nowrap space-x-4 overflow-x-auto w-full scroll-smooth">
					{[...data, ...data].map((c, i) => (
						<Link key={uniqueId()} href={`/p/${c.name.toLowerCase()}`}>
							<Card className="px-4 py-2 w-fit h-16 flex rounded-xl shadow-md items-center gap-4">
								<div className="w-12 h-10 rounded-xl overflow-hidden">
									<img
										src={c.img}
										className="w-full h-full object-cover"
										alt="burger"
									/>
								</div>
								<div className="">
									<h5 className="text-sm text-gray-400 text-nowrap">
										{c.name}
									</h5>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
