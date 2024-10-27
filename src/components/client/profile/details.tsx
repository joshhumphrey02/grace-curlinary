import { Card } from '@/components/ui/card';
import AnimatedButton from '../shared/animated-button';

export default function ProfileDetails() {
	return (
		<>
			<div className="hidden sm:flex pb-10 flex-col gap-6">
				<Card className="p-4 space-y-6 pb-6">
					<div className="flex justify-between items-center">
						<h4 className="text-lg font-medium">Personal information</h4>

						<AnimatedButton title="Edit profile" className=" w-40 " />
					</div>
					<div className="space-y-4">
						<div className="grid grid-cols-3">
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">First Name</span>
								<h4 className="text-sm">Humphrey</h4>
							</div>
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">Last Name</span>
								<h4 className="text-sm">Joshua</h4>
							</div>
						</div>
						<div className="grid grid-cols-3">
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">Email Address</span>
								<h4 className="text-sm">joshuahumphrey579@gmail.com</h4>
							</div>
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">Phone</span>
								<h4 className="text-sm">+234 814 959 3345</h4>
							</div>
						</div>
					</div>
				</Card>
				<Card className="p-4 space-y-6">
					<div className="flex justify-between items-center">
						<h4 className="text-lg font-medium">Address</h4>

						<AnimatedButton title="Edit address" className=" w-40 " />
					</div>
					<div className="space-y-4">
						<div className="grid grid-cols-3">
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">Country</span>
								<h4 className="text-sm">Nigeria</h4>
							</div>
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">State</span>
								<h4 className="text-sm">Rivers</h4>
							</div>
						</div>
						<div className="grid grid-cols-3">
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">City/Town</span>
								<h4 className="text-sm">Port Harcourt</h4>
							</div>
							<div className="space-y-1.5">
								<span className="text-sm text-gray-500">Street</span>
								<h4 className="text-sm">12 Wakatire street</h4>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}
