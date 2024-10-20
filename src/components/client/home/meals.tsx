import { uniqueId } from '@/lib/utils';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { FaNairaSign } from 'react-icons/fa6';
import { ShoppingCart } from 'lucide-react';
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
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{Array(8)
						.fill('')
						.map((c, i) => (
							<Link key={uniqueId()} href={'#'}>
								<Card className="p-1 space-y-4 shadow-lg transform transition duration-1000 hover:scale-105 hover:shadow-2xl">
									<div className="w-full h-40 rounded-xl overflow-hidden">
										<img
											src={i % 2 == 0 ? '/fried-rice.jpeg' : '/spag.jpeg'}
											className="w-full h-full object-cover"
											alt="burger"
										/>
									</div>
									<div className="px-3 pb-2 sm:pb-4 space-y-3">
										<h5 className="text-sm sm:text-base font-extrabold ">
											{i % 2 == 0 ? 'Fried Rice' : 'Spagetti'}
										</h5>
										<div className="flex justify-between items-center">
											<span className="flex text-base sm:text-xl font-extrabold items-center">
												<FaNairaSign className="text-foreground" />{' '}
												{i % 2 == 0 ? 2500 : 1200}
											</span>
											<span className="text-white bg-primary p-2 rounded-tl-2xl rounded-br-2xl">
												<ShoppingCart />
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
