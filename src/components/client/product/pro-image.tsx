'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { cn, uniqueId } from '@/lib/utils';
import { Dot } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ProductImage() {
	const images = [
		'/banner.jpeg',
		'/chin chin.jpeg',
		'/parfait.jpeg',
		'/spag.jpeg',
	];
	const [image, setImage] = React.useState(images[0]);
	const [imageD, setImageD] = React.useState(images[0]);
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<div className="w-full h-full">
				<Zoom zoomMargin={50} canSwipeToUnzoom >
					<div className="w-full bg-gray-300 rounded-md overflow-hidden hidden sm:flex h-96">
						<img src={imageD} className="w-full h-full object-cover" alt="" />
					</div>
				</Zoom>
				<div className="w-full h-full space-y-2 pt-3 sm:hidden">
					<Carousel
						setApi={(api) => {
							if (!api) {
								return;
							}

							setImage(images[api.selectedScrollSnap()]);

							api.on('select', () => {
								setImage(images[api.selectedScrollSnap()]);
							});
						}}
						className="w-full">
						<CarouselContent>
							{Array.from({ length: images.length }).map((_, index) => (
								<CarouselItem key={index}>
									<div className="w-full h-48 rounded-xl">
										<img
											src={images[index]}
											className="w-full h-full rounded-xl object-cover"
											alt=""
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<div className="flex justify-center gap-2">
						{images.map((i) => (
							<span key={uniqueId()}>
								<Dot
									strokeWidth={5}
									className={cn('w-6 h-6', i === image && 'text-tertiary')}
								/>
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="hidden sm:grid grid-cols-4 gap-4">
				{images.map((i, d) => (
					<div
						key={uniqueId()}
						onClick={() => setImageD(images[d])}
						className="w-full h-32 p-3 rounded-xl bg-gray-300 overflow-hidden">
						<img
							src={i}
							className="w-full rounded-xl h-full object-cover"
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}

import * as React from 'react';
