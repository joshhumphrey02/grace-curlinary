import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import AnimatedButton from '../shared/animated-button';
import { PencilLine } from 'lucide-react';

export default function ProfileHeader() {
	return (
		<Card className="p-4 bg-transparent sm:bg-card border-none sm:border-border">
			<div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
				<div className=" relative">
					<Avatar className=" w-16 h-16 bg-gray-200">
						<AvatarImage />
						<AvatarFallback>HJ</AvatarFallback>
					</Avatar>
					<span className=" absolute bottom-1 right-1">
						<PencilLine className="w-4 h-4 text-primary" />
					</span>
				</div>
				<div className="flex flex-col items-center sm:items-start gap-1">
					<h2 className="text-base sm:text-xl font-medium">Humphrey Joshua</h2>
					<span className="text-sm text-gray-500">
						joshuahumphrey579@gmail.com
					</span>
					<span className="text-sm text-gray-500 hidden sm:flex">
						12 Wakatire street
					</span>
				</div>
			</div>
		</Card>
	);
}
