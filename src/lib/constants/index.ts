import {
	Download,
	LucideProps,
	MailOpen,
	MapPin,
	Shield,
	ShoppingCart,
	Tag,
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export const midNavigationData: {
	title: string;
	link: string;
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>;
}[] = [
	{
		title: 'Request quote',
		link: '/contact',
		icon: MapPin,
	},
	{
		title: 'Offers & Discount',
		link: 'https://www.deere.africa/en/finance/financing/current-offers/',
		icon: Tag,
	},
	{
		title: 'Parts',
		link: 'https://www.deere.africa/en/parts-service/parts/',
		icon: Shield,
	},
	{
		title: 'Parts Online',
		link: 'https://parts.deere.africa/index.php?route=common/home',
		icon: ShoppingCart,
	},
	{
		title: 'Technology',
		link: 'https://www.deere.africa/en/technology-products/precision-ag/',
		icon: MailOpen,
	},
	{
		title: 'News Released',
		link: 'https://www.deere.africa/en/our-company/news-media/',
		icon: Download,
	},
] as const;

export enum Paths {
	Home = '/',
	Login = '/login',
	Signup = '/signup',
	Dashboard = '/dashboard',
	VerifyEmail = '/verify-email',
	ResetPassword = '/reset-password',
}

export const APP_TITLE = 'Agcoms' as const;
