import Footer from '@/components/admin/shared/footer';
import Header from '@/components/admin/shared/header';
import MainNav from '@/components/admin/shared/main-nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Grace Peters Curlinary Admin',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
	return (
		<div className="grid min-h-screen w-full sm:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] gap-3  overflow-x-hidden">
			<MainNav className="hidden md:block" />
			<div className="flex flex-col relative">
				<Header />
				<main className="flex-1 w-full bg-muted/40 px-2.5 sm:px-2 py-2">
					<div className="p-2 sm:p-8  pt-0 sm:pt-6">{props.children}</div>
					<Footer />
				</main>
			</div>
		</div>
	);
}
