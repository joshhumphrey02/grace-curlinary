import bgImage from '@/assets/header-image1.jpeg';
import NairaIcon from '@/components/icons/naira-icon';
import { Card } from '@/components/ui/card';
import { cn, uniqueId } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="grid p-4 gap-16  sm:px-20 pt-8 min-h-[50vh] font-sans">
			<div className="space-y-8">
				<div className="flex">
					<h1 className="text-4xl self-start sm:text-[5rem] font-roboto font-extrabold leading-[3rem] sm:leading-[5rem] flex flex-col gap-1 ">
						<span className="">Satisfy Your</span>
						<span className="ml-12">
							<span
								style={{ backgroundImage: `url('${bgImage.src}')` }}
								className="bg-clip-text text text-transparent">
								Taste
							</span>{' '}
							Budz
						</span>
					</h1>
				</div>
				<div className="space-y-4 my-6">
					<div className="flex justify-between items-center">
						<h3 className="text-lg font-bold">Find by Category</h3>
						<span className="text-sm text-primary font-medium">See All</span>
					</div>
					<div className="grid grid-cols-4 gap-4">
						{Array(4)
							.fill('')
							.map((c, i) => (
								<Link key={uniqueId()} href={'#'}>
									<Card className="p-1 space-y-4">
										<div className="w-full h-16 rounded-t-xl rounded-b">
											<img
												src="/burger2.jpeg"
												className="w-full h-full rounded-t-xl rounded-b object-cover"
												alt="burger"
											/>
										</div>
										<div>
											<h5 className="text-sm font-medium px-3 pb-4">Burger</h5>
										</div>
									</Card>
								</Link>
							))}
					</div>
				</div>
				<div className="space-y-4 my-6">
					<div className="flex justify-between items-center">
						<h3 className="text-base text-muted-foreground font-bold">
							Popular Meals
						</h3>
					</div>
					<div className="grid grid-cols-2 gap-4">
						{Array(8)
							.fill('')
							.map((c, i) => (
								<Link key={uniqueId()} href={'#'}>
									<Card className="p-1 space-y-4">
										<div className="w-full h-36 rounded-xl overflow-hidden">
											<img
												src={i % 2 == 0 ? '/fried-rice.jpeg' : '/spag.jpeg'}
												className="w-full h-full object-cover"
												alt="burger"
											/>
										</div>
										<div className="px-3 pb-4 space-y-3">
											<h5 className="text-base font-extrabold ">
												{i % 2 == 0 ? 'Fried Rice' : 'Spagetti'}
											</h5>
											<div className="flex justify-between items-center">
												<span className="flex gap-1">
													<NairaIcon className="text-foreground" />{' '}
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
			</div>
		</div>
	);
}
