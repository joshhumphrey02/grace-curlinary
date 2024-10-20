import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
	return (
		<div className="min-h-screen overflow-x-hidden">
			<main>{children}</main>
		</div>
	);
}
