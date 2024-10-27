import ProfileDetails from '@/components/client/profile/details';
import ProfileHeader from '@/components/client/profile/header';
import MobileAside from '@/components/client/profile/mobi-aside';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function Profile() {
	return (
		<>
			<Breadcrumb className=" py-4 sm:py-8 ">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Profile</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className=" flex flex-col gap-8">
				<h2 className="text-lg sm:text-xl hidden sm:flex  font-semibold font-poppins">
					My Profile
				</h2>
				<div className="flex flex-col gap-6">
					<ProfileHeader />
					<ProfileDetails />
				</div>
			</div>
			<MobileAside />
		</>
	);
}
