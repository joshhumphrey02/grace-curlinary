import { Card } from '@/components/ui/card';
import { NotepadText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
	children?: React.ReactNode;
	className?: string;
	title: string;
	description?: string;
}

const EmptyState = ({ children, className, title, description }: Props) => {
	return (
		<Card
			className={cn(
				'flex flex-col space-y-3 items-center p-6 py-8',
				className
			)}>
			<span className=" p-5 rounded-full bg-gray-200">
				<NotepadText />
			</span>
			<span className="text-xl font-medium">{title}</span>
			<span className=" text-gray-400 mb-3">{description ?? ''}</span>
			{children}
		</Card>
	);
};

export default EmptyState;
