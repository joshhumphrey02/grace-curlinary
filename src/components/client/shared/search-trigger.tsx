'use client';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function SearchTrigger({ className }: { className?: string }) {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('?search=true')}
			className={cn(
				'w-full md:w-[200px] overflow-hidden sm:rounded-md lg:w-[300px] sm:px-2 sm:py-1 text-sm sm:bg-card sm:border sm:border-border flex items-center space-x-2',
				className
			)}>
			<span className="sm:bg-card sm:rounded-full sm:p-2">
				<Search className="  h-6 w-6 bg-transparent " />
			</span>
			<span className=" flex-1 hidden sm:flex  ">Find great meals</span>
		</div>
	);
}
