import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
	data: { title: string; value: number; image: StaticImageData };
	className?: string;
}

function GraphCard({ data: { title, value, image }, className }: CardProps) {
	return (
		<Card className={cn('min-h-40 w-full px-2 sm:px-3 py-4', className)}>
			<div className="flex h-auto justify-between items-center">
				<h2 className="text-sm text-gray-500">{title}</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className="h-[75%] self-end grid grid-cols-2">
				<div className="space-y-3 h-full flex flex-col justify-between">
					<h2 className="flex-1 items-center flex text-xl sm:text-2xl">
						{value}
					</h2>
					<p className="text-[10px] sm:text-xs text-green-300">
						Within this month
					</p>
				</div>
				<div className="w-full h-full p-2">
					<Image
						src={image}
						alt={title}
						style={{ width: '100%', height: '100%' }}
						className=" object-cover"
					/>
				</div>
			</div>
		</Card>
	);
}

export default GraphCard;
