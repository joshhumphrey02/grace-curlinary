'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Logout from '@/components/shared/logout';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

interface Props {
	user: any;
}

export default function Navbar({ user }: Props) {
	const router = useRouter();
	return (
		<>
			<div className="w-full flex-1">
				<form className="w-[200px] md:w-[450px]">
					<div className="relative">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search members..."
							className="w-full appearance-none bg-background pl-8 shadow-none "
						/>
					</div>
				</form>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						aria-label="Your profile"
						className={
							'w-[50px] border-none md:border bg-transparent md:w-[250px] focus-within:ring-0 pl-3 md:pl-auto justify-end md:justify-between h-12'
						}>
						<Avatar className="mr-2 h-8 w-8 md:w-10 md-h-10">
							<AvatarFallback>
								{user.first_name?.charAt(0) || ''}
								{user.last_name?.charAt(0) || ''}
							</AvatarFallback>
						</Avatar>
						<span className="hidden md:flex">
							{user.first_name || ''} {user.last_name || ''}
						</span>
						<CaretSortIcon className="ml-auto hidden md:flex h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="w-56 left-40px py-3 px-4 space-y-3"
					align="end"
					forceMount>
					<DropdownMenuLabel className="font-normal mb-2">
						<div className="flex flex-col space-y-1">
							<p className="text-sm font-medium leading-none">
								{user.first_name || ''} {user.last_name || ''}
							</p>
							<p className="text-xs leading-none text-muted-foreground">
								{user.email || ''}
							</p>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						onClick={() => router.push('/')}
						className="text-base">
						Profile
					</DropdownMenuItem>
					<Logout className=" bg-transparent border-yellow-400 text-sm font-normal dark:border-yellow-400 border " />
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
