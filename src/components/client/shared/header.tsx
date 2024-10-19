import Logo from '@/assets/logo-black.png';
import Logo2 from '@/assets/logo-black 2.png';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import ClientNav from './nav';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/theme/toggle';

export default function ClientHeader() {
	return (
		<header className=" py-4">
			<div className="px-4 sm:px-16 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar className="h-12 w-12 dark:hidden">
						<AvatarImage src={Logo.src} />
					</Avatar>
					<Avatar className="h-12 w-12 hidden dark:block">
						<AvatarImage src={Logo2.src} />
					</Avatar>
					<h1 className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-[#ff00ff]">
						Grace Curlinary
					</h1>
				</div>
				<div className="hidden sm:flex">
					<ClientNav />
				</div>
				<div className="flex items-center gap-4">
					<ModeToggle />
					<Button
						className="border-tertiary hidden sm:flex group relative h-9 px-6 font-sans font-medium"
						variant="outline">
						<div className="absolute top-0 h-full rounded left-0 w-0 bg-tertiary transition-all duration-1000 ease-out group-hover:w-full group-hover:translate-x-0"></div>
						<div className="relative text-sm sm:text-base z-10 group-hover:text-white transition-all duration-1000 leading-12">
							Sign in
						</div>
					</Button>
					<div className="flex sm:hidden">
						<ClientNav />
					</div>
				</div>
			</div>
		</header>
	);
}
