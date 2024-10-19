import { DashboardIcon } from '@radix-ui/react-icons';
import {
	Package,
	HandshakeIcon,
	MessageCircleIcon,
	SettingsIcon,
} from 'lucide-react';

export const AppRoutes = [
	{
		path: '/admin/dashboard',
		name: 'Dashboard',
		icon: DashboardIcon,
		section: 'home',
		note: 'Can view platform statistics',
		hasAction: false,
	},
	{
		path: '/admin/blogs',
		name: 'Publications',
		icon: MessageCircleIcon,
		section: 'home',
		note: 'Can edit and delete splits',
		hasAction: true,
	},
	{
		path: '/admin/products',
		name: 'Products',
		icon: Package,
		section: 'home',
		note: 'Can edit and delete users',
		hasAction: true,
	},
	{
		path: '/admin/brand-partners',
		name: 'Brands & Partners',
		icon: HandshakeIcon,
		section: 'home',
		note: 'Can edit and delete users',
		hasAction: true,
	},
	{
		path: '/admin/settings',
		name: 'Settings',
		icon: SettingsIcon,
		section: 'settings',
		note: 'Can edit admin settings',
		hasAction: true,
	},
];

export function getSectionRoutes(section: string) {
	return AppRoutes.filter((route) => route.section === section);
}
