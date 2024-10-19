import ClientFooter from '@/components/client/shared/footer';
import ClientHeader from '@/components/client/shared/header';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
	return (
		<div className="">
			<ClientHeader />
			<main>{children}</main>
			<ClientFooter />
		</div>
	);
}
