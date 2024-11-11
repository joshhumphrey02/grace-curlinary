'use client';
import { likeAnItem } from '@/actions/interactions';
import { ProductsType } from '@/actions/product';
import { Heart } from 'lucide-react';
import { useMemo } from 'react';
import { toast } from 'sonner';

interface Props {
	isLiked?: boolean;
	data: ProductsType[0];
}

export default async function LikeButton(props: Props) {
	const { data } = props;
	const isLiked = useMemo(() => {
		return !!data?.likes[0]?.id;
	}, [data]);
	return (
		<div
			onClick={async () => {
				const result = await likeAnItem(data.id);
				if (result?.error) {
					return toast.error(result.error);
				}
				toast.success(result?.res);
			}}
			className="flex h-fit w-fit z-20 relative">
			{isLiked ? (
				<span className="relative text-white bg-tertiary p-2 rounded-tl-xl overflow-hidden rounded-br-xl">
					<Heart className="w-4 h-4 relative z-10" />
				</span>
			) : (
				<span className="relative text-white bg-primary bg-animate group-hover:animate p-2 rounded-tl-xl overflow-hidden rounded-br-xl">
					<Heart className="w-4 h-4 relative z-10" />
				</span>
			)}
		</div>
	);
}
