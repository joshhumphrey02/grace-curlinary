import { cn } from '@/lib/utils';
import { ProfileRoutes } from './profile-data';
import LinkItem from '@/components/admin/shared/link-item';
import { ChevronRight, Trash } from 'lucide-react';
import Logout from '@/components/shared/logout';

export default function MobileAside() {
	return (
		<aside className={cn('w-full flex-col gap-4 flex sm:hidden my-4')}>
			<div className="space-y-4">
				<h4 className="text-sm text-gray-500">Inventories</h4>
				<div className="flex bg-card rounded-xl border border-border flex-1 flex-col gap-px">
					{ProfileRoutes.map((route, index) => (
						<LinkItem
							className="h-14 px-3 border-b border-border flex justify-between items-center"
							href={route.path}
							key={index}>
							<div className="flex items-center">
								<route.icon className="h-5 w-5 mr-2 " />
								<span className=" text-xs sm:text-sm ">{route.name}</span>
							</div>
							<ChevronRight className="h-5 w-5" />
						</LinkItem>
					))}
				</div>
			</div>
			<div className="space-y-4 pb-6">
				<h4 className="text-sm text-gray-500">Preferrence</h4>
				<div className="flex bg-card rounded-xl border border-border flex-1 flex-col gap-px">
					<LinkItem
						href="/profile/#"
						className="h-14 px-3 border-b border-border flex justify-between items-center">
						<div className="flex items-center">
							<Trash className="h-5 w-5 mr-2" />
							<span className="text-xs">Close Account</span>
						</div>
						<ChevronRight className="h-5 w-5" />
					</LinkItem>
					<Logout />
				</div>
			</div>
		</aside>
	);
}
