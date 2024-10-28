'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Dot } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { ProductType } from '@/actions/product';
import Image from 'next/image';

interface Props {
	className?: string;
	data: ProductType;
}

export default function ProductImage({ data, className }: Props) {
	const images = React.useMemo(() => {
		return data?.images || [];
	}, [data?.images]);
	const [image, setImage] = React.useState(images[0]);
	const [imageD, setImageD] = React.useState(images[0]);
	return (
		<div className="w-full h-full flex flex-col gap-4">
			<div className="w-full h-full">
				<Zoom zoomMargin={50} canSwipeToUnzoom>
					<div className="w-full bg-gray-300 rounded-md overflow-hidden hidden sm:flex h-96">
						<Image
							src={imageD.path}
							width={imageD.width!}
							height={imageD.height!}
							className="w-full h-full object-cover"
							alt={imageD.name}
						/>
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
									<Zoom zoomMargin={50} canSwipeToUnzoom>
										<div className="w-full h-48 overflow-hidden rounded-xl">
											<Image
												src={image.path}
												width={image.width!}
												height={image.height!}
												className="w-full h-full object-cover"
												alt={image.name}
											/>
										</div>
									</Zoom>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<div className="flex justify-center gap-2">
						{images.map((i) => (
							<span key={i.path}>
								<Dot
									strokeWidth={5}
									className={cn('w-6 h-6', i === image && 'text-tertiary')}
								/>
							</span>
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'hidden sm:grid grid-cols-4 gap-4',
					images.length > 4 && 'grid-cols-5'
				)}>
				{images.map((i, d) => (
					<div
						key={i.path}
						onClick={() => setImageD(images[d])}
						className={cn(
							'w-full h-32  rounded-xl bg-gray-300 cursor-pointer shadow-md overflow-hidden',
							images.length > 4 && 'h-24 p-0'
						)}>
						<Image
							src={i.path}
							width={i.width!}
							height={i.height!}
							className="w-full h-full object-cover"
							alt={i.name}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

import * as React from 'react';
