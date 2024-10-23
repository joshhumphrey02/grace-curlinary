import { cn, toNaira } from '@/lib/utils';
import { FaNairaSign } from 'react-icons/fa6';

interface PriceProps {
	value: number;
	className?: string;
}

export function Price({ value, className }: PriceProps) {
	return (
		<div className={cn(' flex gap-1 text-base items-center', className)}>
			<FaNairaSign className="w-4 h-4" />
			<span className="font-mono">{toNaira(value)}</span>
		</div>
	);
}
