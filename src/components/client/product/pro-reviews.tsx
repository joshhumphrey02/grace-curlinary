import { Progress } from '@/components/ui/progress';
import { Rating } from '@/components/ui/rating';
import { Separator } from '@/components/ui/separator';
import { uniqueId } from '@/lib/utils';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { ChevronRight, CircleCheckBig } from 'lucide-react';

export default function ProductReviews() {
	return (
		<div className=" flex flex-col gap-4 py-3">
			<div className="flex justify-between items-center">
				<h2 className="text-base sm:text-lg font-semibold">
					Customer Feedback
				</h2>
				<span className="flex text-sm gap-1 text-tertiary items-center">
					See All <ChevronRight className="w-4 h-4" />
				</span>
			</div>
			<Separator />
			<div className="grid sm:grid-cols-[32%,auto] gap-6">
				<div className="space-y-3">
					<h3 className="text-sm font-semibold">Verified Ratings (20)</h3>
					<div className="grid grid-cols-2 sm:flex sm:flex-col gap-4">
						<div className="bg-gray-400 rounded-xl p-6 flex flex-col justify-center items-center gap-2">
							<h1 className="text-xl sm:text-2xl text-tertiary font-bold font-mono">
								3.7/5
							</h1>
							<Rating value={3.7} />
							<span className="text-sm text-black font-medium text-center">
								20 verified ratings
							</span>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<span>5</span>
								<StarFilledIcon className="text-tertiary w-4 h-4" />
								<span>(10)</span>
								<Progress className="h-3 flex-1" value={50} />
							</div>
							<div className="flex items-center gap-2">
								<span>4</span>
								<StarFilledIcon className="text-tertiary w-4 h-4" />
								<span>(5)</span>
								<Progress className="h-3 flex-1" value={35} />
							</div>
							<div className="flex items-center gap-2">
								<span>3</span>
								<StarFilledIcon className="text-tertiary w-4 h-4" />
								<span>(4)</span>
								<Progress className="h-3 flex-1" value={20} />
							</div>
							<div className="flex items-center gap-2">
								<span>2</span>
								<StarFilledIcon className="text-tertiary w-4 h-4" />
								<span>(1)</span>
								<Progress className="h-3 flex-1" value={5} />
							</div>
							<div className="flex items-center gap-2">
								<span>1</span>
								<StarFilledIcon className="text-tertiary w-4 h-4" />
								<span>(0)</span>
								<Progress className="h-3 flex-1" value={1} />
							</div>
						</div>
					</div>
				</div>
				<div className="space-y-3">
					<h3 className="text-sm font-semibold">
						Comments from Verified Purchases(44)
					</h3>
					<div className=" flex flex-col gap-3">
						{Array(3)
							.fill('')
							.map((i) => (
								<div
									key={uniqueId()}
									className="flex flex-col gap-2 pb-2 border-b border-border">
									<Rating value={4.6} />
									<span className="text-sm font-bold">Good product</span>
									<span className="text-sm text-foreground/90">
										Top quality, yet affordable.
									</span>
									<div className="flex justify-between items-start">
										<span className="font-mono text-sm text-foreground/60">
											20-10-2024 by Ayo
										</span>
										<span className="text-sm text-primary flex gap-2 items-center">
											<CircleCheckBig className="w-4 h-4" /> Verified Purchase
										</span>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
