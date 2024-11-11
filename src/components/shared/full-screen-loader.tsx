import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

interface Props {
	className?: string;
	isLoading?: boolean;
	fullMode?: boolean;
}

export default function FullScreenLoader(props: Props) {
	const { className, isLoading, fullMode } = props;
	return (
		<div
			className={cn(
				'text-tertiary p-2 hidden rounded-full',
				fullMode &&
					' fixed top-0 left-0 right-0 bottom-0 w-screen bg-black/30 backdrop-blur-sm h-screen',
				isLoading && 'animate-spin flex justify-center items-center',
				className
			)}>
			<Loader className={cn(' w-4 h-4 animate-spin', fullMode && 'w-6 h-6')} />
		</div>
	);
}
