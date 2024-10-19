import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Search() {
	return (
		<div>
			<form className=" w-[40rem] items-center hidden md:flex gap-2 ">
				<Input
					type="search"
					placeholder="Search for a product..."
					className=" flex-1 h-11 font-[RobotoLight]"
				/>
				<Button type="submit" className="h-11 text-white font-[RobotoRegular]">
					Search
				</Button>
			</form>
		</div>
	);
}
