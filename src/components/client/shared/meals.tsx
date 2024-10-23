import { uniqueId } from '@/lib/utils';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { FaNairaSign } from 'react-icons/fa6';
import { Dot, Heart } from 'lucide-react';
import { StarFilledIcon } from '@radix-ui/react-icons';
interface Props {
	children?: string;
	data?: {
		name: string;
		link: string;
		img: string;
	}[];
}

export default function Meals(props: Props) {
	const { data } = props;
	return (
		<>
			<div className="space-y-4 my-6">
				<div className="flex justify-between items-center">
					<h3 className="text-base text-muted-foreground font-bold">
						Popular Meals
					</h3>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
					{Array(8)
						.fill('')
						.map((c, i) => (
							<Link key={uniqueId()} href={`/p/cat/123`}>
								<Card className="p-2 space-y-3 shadow-lg group rounded-xl transform transition duration-1000 hover:scale-105 hover:shadow-2xl">
									<div className="w-full h-28 sm:h-40 bg-gray-200 rounded-xl overflow-hidden">
										<img
											src={i % 2 == 0 ? '/fried-rice.jpeg' : '/spag.jpeg'}
											className="w-full h-full object-cover"
											alt="burger"
										/>
									</div>
									<div className="px-1 pb-2 space-y-2">
										<h5 className="text-sm font-medium font-roboto">
											{i % 2 == 0
												? 'Fried rice with turkey'
												: 'Spagetti jellof'}
										</h5>
										<div className="flex items-center gap-1 font-mono font-medium text-xs">
											<span className="flex items-center gap-1">
												<StarFilledIcon className="w-4 h-4 text-tertiary" />{' '}
												<span>{i % 2 == 0 ? 4.2 : 3.1}</span>
											</span>
											<Dot className="w-4 h-4 text-gray-500" strokeWidth={3} />
											<span>{i % 2 == 0 ? 24 : 11} sold</span>
										</div>
										<div className="flex justify-between items-center">
											<span className="flex text-base sm:text-xl font-mono font-extrabold items-center">
												<FaNairaSign className="text-foreground" />{' '}
												{i % 2 == 0 ? 2500 : 1200}
											</span>
											<span className="relative text-white bg-primary bg-animate group-hover:animate p-2 rounded-tl-xl rounded-br-xl">
												<Heart className="w-4 h-4 relative z-10" />
											</span>
										</div>
									</div>
								</Card>
							</Link>
						))}
				</div>
			</div>
		</>
	);
}
