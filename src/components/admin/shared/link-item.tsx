'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkItemProps {
	href: string;
	setOpen?: (value: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

export default function LinkItem(props: LinkItemProps) {
	const { href, children, setOpen, className } = props;
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			onClick={() => setOpen && setOpen(false)}
			className={cn(
				'px-2 h-10 items-center flex hover:bg-gray-100 dark:hover:bg-black/50',
				isActive ? 'text-primary bg-primary/10 rounded ' : '',
				className
			)}>
			{children}
		</Link>
	);
}
