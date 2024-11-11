import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Dot } from 'lucide-react';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { ProductsType } from '@/actions/product';
import Image from 'next/image';
import { Price } from '@/components/shared/price';
import { cn } from '@/lib/utils';
import LikeButton from './like-button';

interface Props {
	className?: string;
	data: ProductsType[0];
}

export default function Meal(props: Props) {
	const { data, className } = props;
	const image = data.images[0];
	return (
		<>
			<Link href={`/p/${data.category.slug}/${data.id}`}>
				<Card
					className={cn(
						'p-2 space-y-3 shadow-lg group rounded-xl transform transition duration-1000 hover:scale-105 hover:shadow-2xl',
						className
					)}>
					<div className="w-full h-28 sm:h-40 bg-gray-200 rounded-xl overflow-hidden">
						<Image
							src={image.path}
							width={image.width!}
							height={image.height!}
							className="w-full h-full object-cover"
							alt={image.name}
							loading="lazy"
						/>
					</div>
					<div className="px-1 pb-2 space-y-2">
						<h5 className="text-sm font-medium font-roboto">{data.name}</h5>
						<div className="flex items-center gap-1 font-mono font-medium text-xs">
							<span className="flex items-center gap-1">
								<StarFilledIcon className="w-4 h-4 text-tertiary" />{' '}
								<span>4.5</span>
							</span>
							<Dot className="w-4 h-4 text-gray-500" strokeWidth={3} />
							<span>10 sold</span>
						</div>
						<div className="flex justify-between items-center">
							<span className="flex text-base sm:text-xl font-mono font-extrabold items-center">
								<Price value={data.price} />
							</span>
							<LikeButton data={data} />
						</div>
					</div>
				</Card>
			</Link>
		</>
	);
}
