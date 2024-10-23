'use client';
import { Button } from '@/components/ui/button';
import { Rating } from '@/components/ui/rating';
import { Separator } from '@/components/ui/separator';
import { Heart, Minus, Plus } from 'lucide-react';
import React from 'react';
import { FaNairaSign } from 'react-icons/fa6';
import AnimatedButton from '../shared/animated-button';

export default function ProductDetails() {
	const [qty, setQty] = React.useState(1);
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3">
				<div className="flex justify-between gap-4">
					<h2 className="text-lg flex-1 sm:text-2xl font-extrabold font-roboto">
						Crunchy Flavoured Chin Chin
					</h2>
					<span className="text-tertiary">
						<Heart className="w-5 h-5" />
					</span>
				</div>
				<div className="flex items-center gap-2">
					<Rating value={4.5} />
					<span>(20)</span>
				</div>
			</div>
			<Separator />
			<div className="py-2 grid grid-cols-2">
				<div className="flex flex-col gap-1">
					<div className=" font-mono text-xl items-center font-bold flex gap-1 ">
						<FaNairaSign />
						<span>1500</span>
					</div>
					<span className="text-xs font-bold">
						Price per item <sup className="text-tertiary">*</sup>
					</span>
				</div>
				<div className="bg-gray-300 justify-self-end sm:hidden text-black font-bold px-5 py-2 gap-4 rounded-[1.3rem] flex items-center">
					<span
						className={qty <= 1 ? 'text-gray-600' : ''}
						onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>
						<Minus className="w-4 h-4" />
					</span>
					<span className="font-mono">{qty}</span>

					<span
						className={qty >= 11 ? 'text-gray-600' : ''}
						onClick={() => setQty(qty < 12 ? qty + 1 : qty)}>
						<Plus className="w-4 h-4" />
					</span>
				</div>
			</div>
			<Separator className=" hidden sm:flex" />
			<div className=" flex-col gap-10">
				<div className=" gap-4  hidden sm:flex">
					<div className="bg-gray-300 text-black font-bold px-4 py-2 gap-4 rounded-[1.3rem] flex items-center">
						<span
							className={qty <= 1 ? 'text-gray-600' : ''}
							onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>
							<Minus className="w-4 h-4" />
						</span>
						<span className="font-mono">{qty}</span>

						<span
							className={qty >= 11 ? 'text-gray-600' : ''}
							onClick={() => setQty(qty < 12 ? qty + 1 : qty)}>
							<Plus className="w-4 h-4" />
						</span>
					</div>
					<div className="space-y-1">
						<span className="text-xs font-semibold flex gap-1 items-center">
							Only <span className="text-primary font-mono">12 items</span> in
							stock
						</span>
						<span className="text-xs font-semibold">Don't miss it</span>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 sm:relative fixed w-full left-0 right-0 -bottom-1 sm:bottom-0 bg-background sm:bg-transparent rounded-t-2xl sm:rounded-none sm:p-0 py-5 px-4">
					<AnimatedButton title="Buy Now" />
					<AnimatedButton theme="blue" title="Buy Now" />
				</div>
			</div>
		</div>
	);
}
