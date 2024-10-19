import { Metadata } from 'next';
import GraphCard from './components/graph-card';
import Visitors from './components/visitors';
import g1 from '@/assets/graphs/g1.png';
import g2 from '@/assets/graphs/g2.png';
import g3 from '@/assets/graphs/g3.png';
import RecentRequests from './components/recent-requests';
import Stats from './components/stats';

export const metadata: Metadata = {
	title: 'AGCOMS Dashboard',
	description: 'Dashboard of AGCOMS',
};

export default async function Dashboard() {
	const grpahCardData = [
		{
			title: 'Total Sessions',
			value: 200,
			image: g1,
		},
		{
			title: 'Total Visitors',
			value: 100,
			image: g3,
		},
		{
			title: 'Time Spent',
			value: 50,
			image: g2,
		},
		{
			title: 'AVG Request Received',
			value: 30,
			image: g1,
		},
	];
	return (
		<>
			<div className="flex-col md:flex w-full">
				<div className="flex-1 space-y-10 ">
					<div className=" mt-1 mb-3 px-1 pt-2 flex flex-row justify-between items-center">
						<div>
							<h1 className=" font-[RobotoBold] md:text-2xl capitalize text-xl sm:text-2xl">
								Hello Humphrey 👋
							</h1>
							<h4 className=" font-[RobotoLight] mt-1.5 lg:text-sm text-xs">
								Create, manage and AGCOMS activities!
							</h4>
						</div>
					</div>
					<div className="flex-1 grid gap-2.5 sm:gap-4">
						<div className="grid grid-cols-1 sm:grid-cols-2  gap-2.5 sm:gap-4">
							<div className="grid grid-cols-2  gap-2.5 sm:gap-4">
								{grpahCardData.map((d) => (
									<GraphCard key={d.title} data={d} />
								))}
							</div>
							<Visitors />
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-4  gap-2.5 sm:gap-4">
							<RecentRequests className=" row-start-2 sm:row-start-1 col-start-1 col-end-2 sm:col-end-4" />
							<Stats />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
