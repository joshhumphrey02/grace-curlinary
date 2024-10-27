import {
	Package,
	Eye,
	ClipboardList,
	User2,
	Heart,
	RotateCcw,
} from 'lucide-react';

export const ProfileRoutes = [
	{
		path: '/profile',
		name: 'My Account',
		icon: User2,
	},
	{
		path: '/profile/orders',
		name: 'Orders',
		icon: Package,
	},
	{
		path: '/profile/fav',
		name: 'Saved Items',
		icon: Heart,
	},
	{
		path: '/profile/fav',
		name: 'Pending Reviews',
		icon: ClipboardList,
	},
	{
		path: '/profile/recent',
		name: 'Recently Viewed',
		icon: RotateCcw,
	},
];
