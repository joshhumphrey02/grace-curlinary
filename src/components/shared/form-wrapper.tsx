'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface FormProps {
	open: boolean;
	formKey: string;
	formValue: string;
	children: React.ReactNode;
	className?: string;
	close?: boolean;
}

export function useFormToggle() {
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

export function FormWrapper(props: FormProps) {
	const { open, children, className, formKey, formValue } = props;
	const handleClose = useFormToggle();
	const isDesktop = useMediaQuery('(min-width: 768px)');

	if (isDesktop) {
		return (
			<Dialog
				open={open}
				onOpenChange={() => {
					handleClose(formKey, formValue);
				}}>
				<DialogContent className={cn('sm:max-w-[500px] p-0', className)}>
					{children}
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Drawer
			open={open}
			onOpenChange={() => {
				handleClose(formKey, formValue);
			}}>
			<DrawerContent className="px-4 space-y-4">
				{children}
				<DrawerFooter className="pt-2 px-0">
					<DrawerClose asChild>
						<Button variant="outline" className="">
							Cancel
						</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
