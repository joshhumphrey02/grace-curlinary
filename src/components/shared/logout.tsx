'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import AnimatedButton from '../client/shared/animated-button';
import { ExitIcon } from '@radix-ui/react-icons';
interface Props {
	className?: string;
}

export default function Logout({ className }: Props) {
	return (
		<AlertDialog>
			<AlertDialogTrigger>
				<AnimatedButton
					overlay={false}
					title="Logout"
					icon={<ExitIcon className="w-5 h-5" />}
					textClassName="flex text-sm items-center gap-2 justify-start"
					className=" w-full rounded-md border-none justify-start pl-0 bg-transparent h-12 hover:bg-transparent text-tertiary "
				/>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action will log you out from your account.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter className="flex flex-row gap-2 mt-3 flex-nowrap">
					<AlertDialogCancel className="w-full mt-0">Cancel</AlertDialogCancel>
					<form
						// action={async () => {
						// 	const res = await logout();
						// 	if (res?.error) {
						// 		toast.error(res.error);
						// 	}
						// }}
						className="w-full">
						<AlertDialogAction type="submit" className="w-full">
							Continue
						</AlertDialogAction>
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
