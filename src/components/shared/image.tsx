'use client';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';
import useImageHandler from '@/hooks/use-image-handler';
import Img, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'width' | 'height'> & {
	bucketName: string;
	folderName: string;
	className?: string;
	src: string;
	alt: string;
};

const Image = ({
	className,
	src,
	alt,
	bucketName,
	folderName,
	...props
}: Props) => {
	const { getImageUrl } = useImageHandler(bucketName, folderName);
	return useMemo(
		() => (
			<div className={cn('w-full relative h-full object-cover', className)}>
				<Img
					{...props}
					src={getImageUrl(src)}
					priority={true}
					alt={alt}
					fill={true}
				/>
			</div>
		),
		[props]
	);
};

export default Image;
