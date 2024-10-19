import { MobileNav } from '@/components/client/shared/nav';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function TabsLayout({ children }: Props) {
	return (
		<div className="min-h-screen pb-24 sm:pb-4">
			<main>{children}</main>
			<MobileNav />
		</div>
	);
}
