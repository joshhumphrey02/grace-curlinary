import ProfileSidebar from '@/components/client/profile/sidebar';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function ProfileLayout({ children }: Props) {
	return (
		<div className="sm:min-h-[50vh] px-4 sm:px-16 grid sm:grid-cols-[15rem,1fr] gap-4 sm:gap-6">
			<ProfileSidebar />
			<main>{children}</main>
		</div>
	);
}
