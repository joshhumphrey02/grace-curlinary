import Image, { StaticImageData } from 'next/image';
import { Badge } from '@/components/ui/badge';

export default function Tag({
	image,
	text,
	alt,
	className,
}: {
	image?: StaticImageData;
	text: string;
	alt?: string;
	className?: string;
}) {
	return (
		<Badge
			className={`${
				!image && !text ? 'hidden' : 'flex'
			} px-2 py-1 rounded-3xl items-center gap-1 ${className}`}>
			{image && <Image src={image} alt={alt ? alt : ''} />}
			<span className="text-xs font-normal">{text}</span>
		</Badge>
	);
}
