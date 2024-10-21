import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ListFilter, Search } from 'lucide-react';

export function ExploreSearch() {
	return (
		<div>
			<form className=" w-full sm:w-[40rem] mx-auto flex items-center rounded-xl border border-border px-2 sm:px-4 py-1 ">
				<Search className="w-4 h-4 mr-2" />
				<Input
					type="search"
					placeholder="Search for a meal..."
					className=" flex-1 h-11 font-roboto border-0 focus-visible:ring-0 focus-visible:ring-offset-0 outline-0 bg-transparent"
				/>
				<ListFilter className="w-4 h-4 ml-2" />
			</form>
		</div>
	);
}
