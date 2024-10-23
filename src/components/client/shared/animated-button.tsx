'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

interface AnimatedButtonProps {
	title: string;
	className?: string;
	variant?: 'primary' | 'secondary' | 'outline';
	children?: React.ReactNode;
	theme?: 'blue' | 'magenta';
	onClick?: () => void;
	disabled?: boolean;
	size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
	loading?: boolean;
	overlay?: boolean;
	overlayClassName?: string;
	textClassName?: string;
	icon?: any;
}

export default function AnimatedButton(
	props: AnimatedButtonProps
): JSX.Element {
	const {
		className,
		title,
		icon,
		overlay = true,
		theme = 'magenta',
		children,
		onClick,
		disabled,
		size = 'default',
		loading,
	} = props;
	return (
		<Button
			disabled={disabled || loading}
			size={size}
			onClick={() => onClick && onClick()}
			className={cn(
				' text-sm flex w-full rounded-[1.8rem] px-12 overflow-hidden z-20 group relative font-sans font-medium',
				theme === 'blue' ? 'border-primary' : 'border-tertiary',
				className
			)}
			variant="outline">
			{overlay && (
				<div
					className={cn(
						'absolute top-0 h-full rounded-[1.8rem]  left-0 w-0 transition-all delay-75 duration-3000 ease-out group-hover:w-full group-hover:translate-x-0',
						theme === 'blue' ? 'bg-primary' : 'bg-tertiary',
						props.overlayClassName
					)}></div>
			)}
			<div
				className={cn(
					'relative  z-10 group-hover:text-white flex gap-2 transition-all delay-200 duration-2000 leading-12',
					props.textClassName
				)}>
				{loading && <Loader className="w-4 h-5" />}
				{icon ? icon : title}
				{children && <span>{children}</span>}
			</div>
		</Button>
	);
}
