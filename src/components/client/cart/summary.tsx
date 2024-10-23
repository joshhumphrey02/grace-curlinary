import { Price } from '@/components/shared/price';
import { Separator } from '@/components/ui/separator';
import AnimatedButton from '@/components/client/shared/animated-button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export default function Summary() {
	return (
		<>
			<div className="bg-card hidden sm:block border border-border h-fit p-4 shadow-sm rounded-xl space-y-4">
				<h3 className="text-lg text-gray-600">Delivery</h3>
				<Separator />
				<div className="flex flex-col gap-3">
					<div className="flex justify-between items-center">
						<span className="text-base text-foreground/80">Subtotal</span>
						<Price value={500000} />
					</div>
					<div className="flex text-gray-500 text-sm justify-between items-center">
						<span className="">Total items</span>
						<span className="font-mono">5</span>
					</div>
					<div className="flex text-gray-500 text-sm justify-between items-center">
						<span className="">Delivery fee</span>
						<Price value={100000} />
					</div>
				</div>
				<Separator />
				<div className="flex justify-between items-center">
					<span className="text-base text-foreground/80">Total</span>
					<Price value={600000} />
				</div>
				<div className="grid gap-4 grid-cols-2 items-center sm:grid-cols-1">
					<AnimatedButton
						className="rounded-xl"
						overlayClassName="rounded-xl"
						title="Proceed to checkout"
					/>
					<AnimatedButton
						className="rounded-xl"
						overlayClassName="rounded-xl"
						theme="blue"
						title="Continue shopping"
					/>
				</div>
			</div>
			<div className="flex justify-between z-50 items-center bg-background sm:hidden border border-border p-4 shadow-xl rounded-t-2xl gap-4 fixed -bottom-1 left-0 right-0">
				<CheckAll />
				<div className="flex flex-1 basis-[65%] flex-col items-center gap-1">
					<span>Total</span>
					<Price value={600000} />
				</div>
				<AnimatedButton
					className="rounded-xl w-fit"
					overlayClassName="rounded-xl"
					title="Checkout"
				/>
			</div>
		</>
	);
}

interface CheckAllProps {
	className?: string;
}

export function CheckAll({ className }: CheckAllProps) {
	return (
		<div className={cn('flex gap-1 items-center', className)}>
			<Checkbox id="check" className="w-5 h-5 sm:w-4 sm:h-4" />
			<label htmlFor="check" className="text-sm text-nowrap text-gray-600">
				Select All
			</label>
		</div>
	);
}
