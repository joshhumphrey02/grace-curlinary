import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import { Roboto, Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { saveGuest } from '@/actions/auth';

const geistSans = localFont({
	src: '../assets/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../assets/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});
const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});
const poppins = Poppins({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
});
export const metadata: Metadata = {
	title: 'Grace Peters Curlinary',
	description: 'A pastry ecommerce webiste to satisy your taste budz',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	await saveGuest();
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} ${roboto.variable} antialiased max-w-[1350px] font-sans mx-auto`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
