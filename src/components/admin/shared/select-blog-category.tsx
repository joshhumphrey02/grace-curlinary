// 'use client';
// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// } from '@/components/ui/popover';
// import {
// 	Command,
// 	CommandEmpty,
// 	CommandGroup,
// 	CommandInput,
// 	CommandItem,
// 	CommandList,
// } from '@/components/ui/command';
// import { useEffect, useMemo, useState } from 'react';
// import { Check, ChevronDown } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import { getBlogCategories } from '@/lib/actions';

// interface BlogCategorySelectProps {
// 	name: string;
// 	onValueChange: (name: string) => void;
// }

// interface BlogCategory {
// 	name: string;
// }

// const BlogCategorySelect = ({
// 	name,
// 	onValueChange,
// }: BlogCategorySelectProps) => {
// 	const [categories, setBlogCategories] = useState<BlogCategory[]>([]);
// 	const [open, setOpen] = useState(false);

// 	useEffect(() => {
// 		const fetchCountries = async () => {
// 			const categories = await getBlogCategories();
// 			setBlogCategories(categories);
// 		};
// 		fetchCountries();
// 	}, []);
// 	const category = useMemo(() => {
// 		return categories && categories.find((item) => item.name == name)?.name;
// 	}, [name, categories]);
// 	return (
// 		<div>
// 			<Popover open={open} onOpenChange={setOpen}>
// 				<PopoverTrigger asChild>
// 					<Button
// 						variant="outline"
// 						role="combobox"
// 						aria-expanded={open}
// 						aria-label="Select a model"
// 						className="w-full justify-between">
// 						{category ? category : 'Select a category...'}
// 						<ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
// 					</Button>
// 				</PopoverTrigger>
// 				<PopoverContent className="p-0" align="start">
// 					<Command>
// 						<CommandInput placeholder="Search..." />
// 						<CommandEmpty>No results found.</CommandEmpty>
// 						<CommandList>
// 							<CommandGroup>
// 								{categories.map((item) => {
// 									const label = item.name;
// 									return (
// 										<CommandItem
// 											key={item.name}
// 											value={label}
// 											onSelect={() => {
// 												onValueChange(item.name);
// 												setOpen(false);
// 											}}>
// 											<Check
// 												className={cn(
// 													'mr-2 h-4 w-4',
// 													name === item.name ? 'opacity-100' : 'opacity-0'
// 												)}
// 											/>
// 											{label}
// 										</CommandItem>
// 									);
// 								})}
// 							</CommandGroup>
// 						</CommandList>
// 					</Command>
// 				</PopoverContent>
// 			</Popover>
// 		</div>
// 	);
// };

// export default BlogCategorySelect;
