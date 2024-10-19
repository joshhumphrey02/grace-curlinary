import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

function Visitors() {
	return (
		<Card className="w-full h-60 sm:h-full px-4 py-4">
			<div className="flex h-auto justify-between items-center">
				<h2 className="text-sm text-gray-500">Views by browser</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className="flex-1 h-[80%]">
				<div className="h-full flex justify-center items-center relative">
					<Circle
						value={5}
						browser="others"
						className=" absolute w-16 h-16 sm:w-20 sm:h-20 sm:bottom-8 sm:left-20 bottom-4 -z-0 left-16"
					/>
					<Circle value={20} browser="chrome" className="z-10" />
					<Circle
						value={15}
						browser="safari"
						className=" absolute w-24 h-24 sm:w-32 sm:h-32 sm:t-4 sm:right-10 top-0 z-20 right-8"
					/>
					<Circle
						value={10}
						browser="firefox"
						className=" absolute w-20 h-20 sm:w-28 sm:h-28 bottom-4 z-20 right-16"
					/>
				</div>
			</div>
			<div className="flex justify-center space-x-4">
				{Object.keys(colors).map((c) => (
					<div key={c} className="flex gap-1 items-center">
						<div
							className={cn(
								'w-1.5 h-1.5 rounded-full',
								colors[c as keyof typeof colors]
							)}
						/>
						<span className=" capitalize text-xs font-semibold">{c}</span>
					</div>
				))}
			</div>
		</Card>
	);
}
export default Visitors;

interface CircleProps {
	className?: string;
	value?: number;
	browser: keyof typeof colors;
}

function Circle({ className, value, browser }: CircleProps) {
	return (
		<div
			className={cn(
				'sm:w-40 sm:h-40 w-28 h-28 text-2xl font-bold bg-gray-300 text-white rounded-full flex justify-center items-center',
				colors[browser],
				className
			)}>
			<h1>{value}%</h1>
		</div>
	);
}

const colors = {
	chrome: 'bg-[#0b1058]',
	firefox: 'bg-[#a9be99]',
	safari: 'bg-[#dad3cc]',
	others: 'bg-[#c09f80]',
} as const;
