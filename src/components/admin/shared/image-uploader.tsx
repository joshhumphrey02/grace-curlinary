'use client';
import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import useImageHandler from '@/hooks/use-image-handler';
import { Loader } from 'lucide-react';

export interface ImageType {
	url: string;
}

interface Props {
	saveImages: (images: ImageType[]) => void;
	className?: string;
	images: ImageType[];
	bucketName: string;
	folderName: string;
}

export default function ImageUploader({
	saveImages,
	images,
	bucketName,
	folderName,
}: Props) {
	const maxNumber = 4;
	const { uploadImages, deleteImage, loading, getImageUrl } = useImageHandler(
		bucketName,
		folderName
	);
	async function handleUpload(images: ImageListType) {
		const formData = new FormData();
		images.forEach((image) => {
			image?.file && formData.append('image', image.file);
		});
		let res = await uploadImages(formData);
		if (res.error) return toast.error(res.error);
		res?.data && saveImages(res.data);
	}
	async function handleDelete(key: string) {
		const res = await deleteImage(key);
		if (res.error) return toast.error(res.error);
		toast.success('Image removed successfully');
		saveImages(images.filter((image) => image.url !== key));
	}
	return (
		<div className="grid gap-3">
			<ImageUploading
				multiple
				value={[]}
				onChange={handleUpload}
				maxNumber={maxNumber}>
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageRemove,
					onImageUpdate,
					isDragging,
					dragProps,
				}) => (
					<div className="grid gap-4">
						<div className="flex gap-3">
							<Button
								size={'sm'}
								type="button"
								style={isDragging ? { color: 'red' } : undefined}
								onClick={onImageUpload}
								disabled={loading}
								className="flex gap-1 items-center disabled:opacity-80"
								{...dragProps}>
								{loading && <Loader className=" h-4 w-4 animate-spin" />}
								Click or Drop here
							</Button>
						</div>
						<div className="flex flex-wrap gap-4">
							{images &&
								images.map((image, index) => (
									<div key={index} className="grid gap-1">
										<img
											src={getImageUrl(image.url)}
											alt=""
											className="w-[150px] sm:w-[250px] h-100px] sm:h-[150px] object-cover"
										/>
										<div className="flex gap-3">
											<Button
												size={'sm'}
												type="button"
												disabled={loading}
												className="flex gap-1 disabled:opacity-80 items-center"
												onClick={() => handleDelete(image.url)}>
												Remove
											</Button>
										</div>
									</div>
								))}
						</div>
					</div>
				)}
			</ImageUploading>
		</div>
	);
}
