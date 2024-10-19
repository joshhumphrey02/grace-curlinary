'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export function useSheetToggle() {
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

interface SheetProps {
	open: boolean;
	sheetKey: string;
	sheetValue: string;
	children: React.ReactNode;
	className?: string;
	close?: boolean;
}

export function SheetWrapper(props: SheetProps) {
	const { open, children, className, sheetKey, close, sheetValue } = props;
	const handleClose = useSheetToggle();
	return (
		<Sheet
			open={open}
			onOpenChange={() => {
				handleClose(sheetKey, sheetValue);
			}}>
			<SheetContent
				close={close}
				className={cn('space-y-4 overflow-y-auto', className)}>
				{children}
			</SheetContent>
		</Sheet>
	);
}

export function SheetTriggerButton(
	props: ButtonProps & { sheetKey: string; sheetValue: string }
) {
	const { sheetKey, sheetValue, ...rest } = props;
	const handleClose = useSheetToggle();
	return (
		<Button
			{...rest}
			onClick={() => {
				handleClose(sheetKey, sheetValue);
			}}
		/>
	);
}
