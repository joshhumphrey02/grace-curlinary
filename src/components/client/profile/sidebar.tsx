'use client';
import { cn } from '@/lib/utils';
import Logout from '@/components/shared/logout';
import { ProfileRoutes } from './profile-data';
import LinkItem from '@/components/admin/shared/link-item';
import { Separator } from '@/components/ui/separator';
import { Trash } from 'lucide-react';

interface ProfileSidebarProps extends React.HTMLAttributes<HTMLElement> {
	setOpen?: (state: boolean) => void;
}
export default function ProfileSidebar({
	setOpen,
	className,
	...props
}: ProfileSidebarProps) {
	return (
		<aside
			className={cn(
				'w-full flex-col hidden sm:flex max-h-[85vh] rounded-xl my-4 relative bg-card',
				className
			)}>
			<div className="flex flex-1 flex-col gap-px">
				{ProfileRoutes.map((route, index) => (
					<LinkItem className="h-12 px-3" href={route.path} key={index}>
						<route.icon className="h-5 w-5 mr-2 " />
						<span className=" text-xs sm:text-sm ">{route.name}</span>
					</LinkItem>
				))}
			</div>
			<Separator />
			<div className="my-3">
				<LinkItem href="/profile/#" className="flex px-3 items-center h-12">
					<Trash className="h-5 w-5 mr-2" />
					Close Account
				</LinkItem>
			</div>
			<Separator />
			<div className=" p-6">
				<Logout />
			</div>
		</aside>
	);
}
