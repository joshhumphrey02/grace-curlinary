import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

export default function SearchForm({
	className,
	containerClassName,
}: {
	className?: string;
	containerClassName?: string;
}) {
	return (
		<form className={containerClassName}>
			<div
				className={cn(
					'w-full md:w-[200px] overflow-hidden rounded-md lg:w-[300px] px-2 text-sm bg-background border border-tertiary flex items-center space-x-2',
					className
				)}>
				<Search className=" text-tertiary  h-6 w-6 " />
				<Input
					type="search"
					placeholder="Search"
					autoFocus={false}
					className=" placeholder:text-sm bg-transparent focus-visible:border-0 focus:bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 "
				/>
			</div>
		</form>
	);
}
