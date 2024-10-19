import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

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
					'w-full md:w-[200px] overflow-hidden rounded-md lg:w-[300px] px-2 text-sm bg-gray-100 text-gray-600 flex items-center space-x-2',
					className
				)}>
				<Search className=" text-blue-500  h-5 w-5 " />
				<Input
					type="search"
					placeholder="Search"
					className=" placeholder:text-sm bg-transparent focus-visible:border-0 focus:bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-600 "
				/>
			</div>
		</form>
	);
}
