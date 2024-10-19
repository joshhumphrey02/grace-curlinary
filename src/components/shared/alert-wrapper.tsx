'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export function useAlertToggle() {
	const router = useRouter();
	const params = useSearchParams();

	return function (key: string, value: string) {
		const searchParams = new URLSearchParams(params);
		if (searchParams.get(key) === value) {
			searchParams.delete(key);
		} else {
			searchParams.set(key, value);
		}

		router.push(`?${searchParams.toString()}`);
	};
}

interface AlertProps {
	open: boolean;
	alertKey: string;
	alertValue: string;
	children: React.ReactNode;
	className?: string;
}

export function AlertWrapper(props: AlertProps) {
	const { open, children, className, alertKey, alertValue } = props;
	const handleClose = useAlertToggle();
	return (
		<AlertDialog
			open={open}
			onOpenChange={() => {
				handleClose(alertKey, alertValue);
			}}>
			<AlertDialogContent
				className={cn('space-y-4 overflow-y-auto', className)}>
				{children}
			</AlertDialogContent>
		</AlertDialog>
	);
}

export function AlertTriggerButton(
	props: ButtonProps & { alertKey: string; alertValue: string }
) {
	const { alertKey, alertValue, ...rest } = props;
	const handleClose = useAlertToggle();
	return (
		<Button
			{...rest}
			onClick={() => {
				handleClose(alertKey, alertValue);
			}}
		/>
	);
}
