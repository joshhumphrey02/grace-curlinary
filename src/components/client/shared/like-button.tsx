'use client';
import { Heart } from 'lucide-react';

interface Props {
	onClick?: () => void;
	isLiked?: boolean;
}

export default function LikeButton(props: Props) {
	const { onClick, isLiked = false } = props;
	return (
		<div onClick={() => onClick && onClick()} className="flex h-fit w-fit">
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
