'use client';
import { Button } from '@/components/ui/button';
import Error from 'next/error';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<html>
			<body className="w-screen h-screen bg-[f5f4f4] text-white justify-center items-center flex-col gap-2">
				<h2 className="text-xl sm:text-3xl font-bold text-red-500">
					Something went wrong!
				</h2>
				<Button onClick={() => reset()}>Try again</Button>
			</body>
		</html>
	);
}
