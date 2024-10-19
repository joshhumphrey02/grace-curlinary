'use client';
import { format } from 'date-fns';
import RequestStatusBadge from './request-status';
import EmptyState from '@/components/admin/shared/empty-state';
import { cn } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';

export default function RecentRequests(props: {
	requests?: any;
	className?: string;
}) {
	const { requests, className } = props;
	return (
		<div
			className={cn(
				'bg-card recent col-span-2 pt-3 pb-4 rounded-lg border flex-1',
				className
			)}>
			<div className="flex h-auto justify-between px-3 items-center">
				<h2 className="text-sm text-gray-500">Recent requests</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className=" rounded-sm mt-3 px-3">
				<table className="w-full text-muted-foreground">
					<thead>
						<tr>
							<th className=" hidden sm:table-cell">ID</th>
							<th className="">Full Name</th>
							<th>Posted</th>
							<th>Status</th>
							<th className=" hidden sm:table-cell">Message</th>
						</tr>
					</thead>
					<tbody>
						{requests && (
							<tr>
								<td className=" hidden sm:table-cell">
									<span className="text-xs">22-334-903-78</span>
								</td>
								<td>
									<a href={`#`}>Humphrey Joshua</a>
								</td>
								<td>
									{format(new Date(new Date(Date.now())), 'MMM dd, yyyy')}
								</td>
								<td>
									<RequestStatusBadge status="PENDING" />
								</td>
							</tr>
						)}
					</tbody>
				</table>
				{!requests && (
					<EmptyState
						className="border-0 shadow-none"
						title="No available data"
						description="Requests will be shown when created!"
					/>
				)}
			</div>
		</div>
	);
}
