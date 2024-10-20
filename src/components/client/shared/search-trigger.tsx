'use client';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function SearchTrigger({ className }: { className?: string }) {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('?search=true')}
			className={cn(
				'w-full md:w-[200px] overflow-hidden rounded-md lg:w-[300px] px-2 text-sm bg-background border border-border flex items-center space-x-2',
				className
			)}>
			<span className="sm:bg-card sm:rounded-full sm:p-3">
				<Search className="  h-6 w-6  " />
			</span>
			<span className=" flex-1 hidden sm:flex  ">Find great meals</span>
		</div>
	);
}
