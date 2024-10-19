import { Card } from '@/components/ui/card';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import g3 from '@/assets/graphs/g3.png';

function Stats() {
	const data = [
		{
			title: 'Online Visitors',
			value: 200,
		},
		{
			title: 'Recent Visitors',
			value: 100,
		},
		{
			title: 'Time Spent',
			value: 50,
		},
	];
	return (
		<Card className="w-full space-y-4 h-full px-3 pt-4">
			<div className="flex h-auto justify-between items-center">
				<h2 className="text-sm text-gray-500">Statistics</h2>
				<DotsHorizontalIcon className="h-6 w-6 font-bold text-gray-300" />
			</div>
			<div className="flex-1 h-[80%] grid grid-rows-3 gap-2">
				{data.map((d) => (
					<div
						key={d.title}
						className="flex-1 bg-gray-100 rounded-lg px-3 py-3 h-full flex flex-col justify-between">
						<h2 className="text-xs text-gray-500">{d.title}</h2>
						<div className="flex-1 grid grid-cols-2">
							<h1 className="text-2xl sm:text-xl flex items-center">
								{d.value} k+
							</h1>
							<div className="w-full h-28 sm:h-full p-2">
								<Image
									src={g3}
									alt={d.title}
									style={{ width: '100%' }}
									className=" object-cover h-20 rounded-lg sm:h-10"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</Card>
	);
}

export default Stats;
