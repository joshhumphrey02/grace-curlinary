'use client';
import Link from 'next/link';
import {
	Compass,
	Heart,
	HomeIcon,
	NotebookPen,
	PhoneOutgoing,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { FaUser } from 'react-icons/fa6';

export default function ClientNav() {
	const pathname = usePathname();
	return (
		<>
			<nav className="flex-1 justify-center hidden sm:flex items-center font-sans">
				<ul className="flex gap-6 items-center">
					{NavData.map((item, index) => (
						<li key={index + item.name}>
							<Link
								href={item.link}
								className="text-sm sm:text-base relative py-2 group font-medium">
								<div
									className={cn(
										'absolute -bottom-2 rounded left-0 h-1.5 w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0',
										pathname === item.link && 'w-full'
									)}></div>
								<div className="relative z-10 flex items-center gap-2 leading-12">
									{item.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export function MobileNav() {
	const pathname = usePathname();
	return (
		<div className=" fixed -bottom-1 z-[100] shadow-md left-0 right-0 flex sm:hidden w-full h-[5rem]">
			<nav className="flex-1 bg-background border-t border-border rounded-t-[2.4rem] px-8 py-2 flex">
				<ul className="flex flex-1 gap-8 items-center justify-evenly">
					{MobileNavData.map((item, index) => (
						<li key={index + item.name}>
							<Link href={item.link} className="py-2">
								<div className=" flex flex-col items-center gap-px ">
									<item.icon
										strokeWidth={3}
										className={cn(
											'w-5 h-5 text-foreground',
											pathname === item.link && 'text-primary'
										)}
									/>
									<span
										className={cn(
											'text-sm font-normal text-secondary-foreground',
											pathname === item.link && 'text-primary'
										)}>
										{item.name}
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export const NavData = [
	{
		name: 'Home',
		link: '/',
		icon: HomeIcon,
	},
	{
		name: 'Explore',
		link: '/explore',
		icon: Compass,
	},
	{
		name: 'Booking',
		link: '/booking',
		icon: NotebookPen,
	},
	{
		name: 'Contact',
		link: '/contact',
		icon: PhoneOutgoing,
	},
];
export const MobileNavData = [
	{
		name: 'Home',
		link: '/',
		icon: HomeIcon,
	},
	{
		name: 'Explore',
		link: '/explore',
		icon: Compass,
	},
	{
		name: 'Fav',
		link: '/favorite',
		icon: Heart,
	},
	{
		name: 'Profile',
		link: '/profile',
		icon: FaUser,
	},
];
