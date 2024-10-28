import { ProductsType } from '@/actions/product';
import Meal from './meal';
import { cn } from '@/lib/utils';

interface Props {
	data: ProductsType;
	className?: string;
	title: string;
	containerClassName?: string;
}

export default function MealsGridLayout(props: Props) {
	const { data, className, title, containerClassName } = props;
	return (
		<div className={cn('space-y-4 my-6', containerClassName)}>
			<div className="flex justify-between items-center">
				<h3 className="text-base text-muted-foreground font-bold">{title}</h3>
			</div>
			<div
				className={cn(
					'grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4',
					className
				)}>
				{data.map((c) => (
					<Meal key={c.id} data={c} />
				))}
			</div>
		</div>
	);
}
