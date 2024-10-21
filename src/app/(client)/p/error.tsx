'use client';
import { Button } from '@/components/ui/button';

// Error boundaries must be Client Components

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	return (
		<div className="space-y-4">
			<h2 className="text-xl sm:text-2xl">Something went wrong!</h2>
			<Button onClick={() => reset()}>Try again</Button>
		</div>
	);
}
