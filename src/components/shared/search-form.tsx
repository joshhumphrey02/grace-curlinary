'use client';
import { FormWrapper, useFormToggle } from './form-wrapper';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import React from 'react';

interface Props {
	className?: string;
	open: boolean;
}

export default function SearchForm({ className, open }: Props) {
	const handleClose = useFormToggle();
	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleClose('search', 'true');
			}
		};

		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);
	return (
		<FormWrapper
			className="top-[20%] translate-y-[-20%]"
			open={open}
			formKey="search"
			formValue="true">
			<Command className="h-[80dvh] p-0 sm:h-56 bg-background">
				<div className="w-full border-b px-2 sm:pr-12 text-sm  flex items-center space-x-2">
					<CommandInput placeholder="Type a meal or search..." />
					<kbd className=" ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
						<span className="text-xs">⌘</span>k
					</kbd>
				</div>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>
							<span>Chin chin</span>
						</CommandItem>
						<CommandItem>
							<span>Burgers</span>
						</CommandItem>
						<CommandItem>
							<span>Buns</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</FormWrapper>
	);
}
