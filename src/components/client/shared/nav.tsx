'use client';
import Link from 'next/link';
import {
	Dot,
	HomeIcon,
	NotebookPen,
	PhoneOutgoing,
	ShoppingCart,
	User2,
	Utensils,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function ClientNav() {
	const pathname = usePathname();
	return (
		<>
			<nav className="flex-1 justify-center hidden sm:flex items-center font-sans">
				<ul className="flex gap-6 items-center">
					{NavData.map((item, index) => (
						<li key={index + item.name}>
							<Link
								href={'#'}
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
		<div className=" fixed -bottom-1 z-[100] shadow left-0 right-0 flex sm:hidden w-full h-[5rem]">
			<nav className="flex-1 bg-background border-t border-border rounded-t-3xl px-8 py-2 flex">
				<ul className="flex flex-1 gap-8 items-center justify-evenly">
					{MobileNavData.map((item, index) => (
						<li key={index + item.name}>
							<Link href={'#'} className="py-2">
								<div className=" flex flex-col items-center gap-0 ">
									<item.icon
										strokeWidth={3}
										className={cn(
											'w-6 h-6 text-foreground',
											index === 0 && 'text-primary'
										)}
									/>
									{pathname === item.link && (
										<Dot strokeWidth={5} className=" text-primary" />
									)}
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
		name: 'Meals',
		link: '/meals',
		icon: Utensils,
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
	{
		name: 'Cart',
		link: '/cart',
		icon: ShoppingCart,
	},
];
export const MobileNavData = [
	{
		name: 'Home',
		link: '/',
		icon: HomeIcon,
	},
	{
		name: 'Meals',
		link: '/meals',
		icon: Utensils,
	},
	{
		name: 'Booking',
		link: '/booking',
		icon: NotebookPen,
	},
	{
		name: 'Profile',
		link: '/profile',
		icon: User2,
	},
];
