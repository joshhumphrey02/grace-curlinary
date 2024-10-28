import Link from 'next/link';
import { Card } from '@/components/ui/card';
interface Props {
	children?: string;
	data: {
		name: string;
		link: string;
		img: string;
	}[];
}

export default function ExploreCategories(props: Props) {
	const { data } = props;
	return (
		<>
			<div className="w-full py-6 flex sm:justify-center">
				<div className="grid grid-cols-4 sm:flex flex-wrap gap-4 sm:gap-8">
					{data.map((c, i) => (
						<Link key={c.name} href={`/p/${c.name}`}>
							<Card className="p-1 flex flex-col items-center space-y-4 border-0 backdrop-blur-sm bg-white/30 dark:bg-transparent transition-all duration-1000 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl">
								<div className="w-full sm:w-40 h-16 sm:h-32 border-2 border-[#ebdbeb] rounded-full sm:rounded-2xl overflow-hidden">
									<img
										src={c.img}
										className="w-full h-full object-cover"
										alt="burger"
									/>
								</div>
								<div>
									<h5 className="text-[11px] sm:text-xs font-normal sm:font-medium font-mono capitalize text-center text-nowrap px-1 pb-2">
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
