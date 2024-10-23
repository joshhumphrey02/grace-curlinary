import { Price } from '@/components/shared/price';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus, Trash } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard() {
	return (
		<Card className="">
			<div className="flex gap-4 py-3 sm:py-4 px-2 sm:px-4">
				<div className="flex items-center gap-2">
					<Checkbox className="w-4 h-4" />
					<div className="w-24 sm:w-40 h-24 sm:h-32 rounded-xl">
						<img
							src="/chin chin.jpeg"
							className="rounded-xl w-full h-full object-cover"
							alt="image"
						/>
					</div>
				</div>
				<div className="flex flex-1 flex-col sm:flex-row gap-2">
					<div className="flex-1 grid items-start gap-3">
						<Link
							href={`/p/pastries/123`}
							className="hover:border-b border-primary w-fit">
							<h3 className="text-base font-semibold">Premium chin chin</h3>
						</Link>
						<div className="flex gap-4 items-center">
							<Price value={250000} />
							<Separator
								orientation="vertical"
								className="hidden sm:flex h-5 w-px"
							/>
							<span className="text-xs font-bold text-primary hidden sm:flex">
								In stock
							</span>
						</div>
						<div className="hidden sm:flex">
							<div className="bg-gray-300 w-fit text-black font-bold px-3 sm:px-5 py-1 sm:py-2 gap-4 rounded-[1.3rem] flex items-center">
								<span
									className={' cursor-pointer'}
									// onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
								>
									<Minus className="w-4 h-4" />
								</span>
								<span className="font-mono">1</span>

								<span
									className={' cursor-pointer'}
									// onClick={() => setQty(qty < 12 ? qty + 1 : qty)}
								>
									<Plus className="w-4 h-4" />
								</span>
							</div>
						</div>
					</div>
					<div className="flex sm:flex-col justify-between gap-2 sm:ml-auto sm:gap-8">
						<Price
							value={250000}
							className="text-lg hidden sm:flex font-bold justify-end"
						/>
						<div className="flex gap-4 sm:pb-4">
							<div className=" cursor-pointer text-tertiary flex items-center gap-1">
								<Heart className="w-5 h-5" />
								<span className=" hidden sm:flex text-sm">Save</span>
							</div>
							<Separator orientation="vertical" className="hidden sm:flex" />
							<div className=" cursor-pointer text-primary flex items-center gap-1">
								<Trash className="w-5 h-5" />
								<span className=" hidden sm:flex text-sm">Delete</span>
							</div>
						</div>

						<div className=" sm:hidden">
							<div className=" w-fit gap-4  flex items-center">
								<span
									className={'border border-border rounded p-px'}
									// onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
								>
									<Minus className="w-4 h-4" />
								</span>
								<span className="font-mono text-foreground text-sm">1</span>

								<span
									className={'border border-border rounded p-px'}
									// onClick={() => setQty(qty < 12 ? qty + 1 : qty)}
								>
									<Plus className="w-4 h-4" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
