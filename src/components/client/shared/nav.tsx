import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo-black.png';
import Logo2 from '@/assets/logo-black 2.png';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	AlignRight,
	HomeIcon,
	NotebookPen,
	PanelLeftClose,
	PhoneOutgoing,
	ShoppingCart,
	Utensils,
} from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import SearchForm from './search';

export default function ClientNav() {
	return (
		<>
			<nav className="flex-1 justify-center hidden sm:flex items-center font-sans">
				<ul className="flex gap-6 items-center">
					{NavData.map((item, index) => (
						<li key={index + item.name}>
							<Link
								href={item.link}
								className="text-sm sm:text-base relative py-2 group font-medium">
								<div className="absolute -bottom-2 rounded left-0 h-1.5 w-0 bg-tertiary transition-all delay-75 duration-1000 ease-out group-hover:w-full group-hover:translate-x-0"></div>
								<div className="relative z-10 flex items-center gap-2 leading-12">
									<item.icon className="w-5 h-5 text-tertiary-foreground" />{' '}
									{item.name}
								</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<Sheet>
				<SheetTrigger className=" sm:hidden" asChild>
					<div>
						<AlignRight className="w-7 h-7 text-tertiary" />
						<span className=" sr-only">Open</span>
					</div>
				</SheetTrigger>
				<SheetContent close={true} className="flex flex-col">
					<SheetHeader>
						<div className="flex justify-between items-center">
							<SheetTitle className="text-sm font-sans">
								<Avatar className="h-10 w-10 dark:hidden">
									<AvatarImage src={Logo.src} />
								</Avatar>
								<Avatar className="h-10 w-10 hidden dark:block">
									<AvatarImage src={Logo2.src} />
								</Avatar>
							</SheetTitle>

							<SheetClose asChild>
								<PanelLeftClose className=" w-6 h-6 text-tertiary" />
							</SheetClose>
						</div>
					</SheetHeader>
					<div className="flex-1 space-y-8 py-6">
						<div>
							<SearchForm />
						</div>
						<ul className="flex flex-col gap-8 ">
							{NavData.map((item, index) => (
								<li key={index + item.name} className="w-full py-2">
									<SheetClose asChild>
										<Link
											href={item.link}
											className="text-sm sm:text-base relative group font-medium">
											<div className="absolute -bottom-4 rounded left-0 h-px w-full bg-border"></div>
											<div className="relative z-10 flex items-center gap-2 leading-12">
												<item.icon className="w-5 h-5 text-tertiary" />{' '}
												{item.name}
											</div>
										</Link>
									</SheetClose>
								</li>
							))}
						</ul>
					</div>
					<SheetFooter>
						<SheetClose asChild>
							<Button type="submit" className="bg-tertiary text-white">
								Sign in
							</Button>
						</SheetClose>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	);
}

export function MobileNav() {
	const active = '/';
	return (
		<div className=" fixed bottom-0 z-[100] shadow left-0 right-0 flex sm:hidden w-full h-16">
			<nav className="flex-1 bg-background border-t border-border rounded-t-2xl px-4 py-2 flex">
				<ul className="flex flex-1 gap-6 items-center justify-between">
					{NavData.map((item, index) => (
						<li key={index + item.name}>
							<Link href={item.link} className="py-2">
								<div className=" flex items-center gap-2 ">
									<item.icon className="w-6 h-6 text-tertiary-foreground" />
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
