'use-client';
import { useState, useCallback } from 'react';
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { storageClient } from '@/lib/supabase/storage';
import { ImageType } from '@/components/admin/shared/image-uploader';

type UploadResponse = {
	data?: ImageType[];
	error?: string;
};
type OtherResponse = {
	data?: boolean;
	error?: string;
};

type UseImageStorageHook = {
	uploadImages: (formData: FormData) => Promise<UploadResponse>;
	deleteImage: (key: string) => Promise<OtherResponse>;
	updateImage: (
		existingKey: string,
		formData: FormData
	) => Promise<UploadResponse>;
	loading: boolean;
	getImageUrl: (key: string) => string;
};
export const getImageUrl = (
	key: string,
	bucketName: string,
	folderName: string
) => {
	return `https://gwaoeuzdusyotbrfqkki.supabase.co/storage/v1/object/public/${bucketName}/${folderName}/${key}`;
};
export default function useImageHandler(
	bucketName: string,
	folderName: string
): UseImageStorageHook {
	const [loading, setLoading] = useState<boolean>(false);

	const getImageUrl = (key: string) => {
		return `https://gwaoeuzdusyotbrfqkki.supabase.co/storage/v1/object/public/${bucketName}/${folderName}/${key}`;
	};
	const uploadImages = useCallback(
		async (formData: FormData): Promise<UploadResponse> => {
			setLoading(true);
			try {
				const images: File[] = (formData.getAll('image') || []) as any;
				const responses = await Promise.all(
					images.map(async (image) => {
						if (!image) return;
						const key = `${folderName}/${image.name}`;
						const uploadCommand = new PutObjectCommand({
							Bucket: bucketName,
							Key: key,
							Body: image,
							ContentType: `image/${image.type}`,
						});
						await storageClient.send(uploadCommand);
						return { url: image.name };
					})
				);

				setLoading(false);
				return {
					data: responses.filter(Boolean) as ImageType[],
				};
			} catch (error) {
				setLoading(false);
				console.log('Error uploading image', error);
				return { error: 'Error uploading image' };
			}
		},
		[]
	);

	// Delete Image
	const deleteImage = useCallback(
		async (key: string): Promise<OtherResponse> => {
			setLoading(true);
			try {
				const deleteCommand = new DeleteObjectCommand({
					Bucket: bucketName,
					Key: `${folderName}/${key}`,
				});
				const response = await storageClient.send(deleteCommand);
				setLoading(false);
				return { data: response?.DeleteMarker };
			} catch (error) {
				setLoading(false);
				console.log('Error deleting image', error);
				return { error: 'Error deleting image' };
			}
		},
		[]
	);

	// Update Image
	const updateImage = useCallback(
		async (
			existingKey: string,
			formData: FormData
		): Promise<UploadResponse> => {
			const deleteResponse = await deleteImage(existingKey);
			if (deleteResponse.error) {
				return { error: deleteResponse.error };
			}
			const uploadResponse = await uploadImages(formData);
			return uploadResponse;
		},
		[deleteImage, uploadImages]
	);

	return {
		uploadImages,
		deleteImage,
		updateImage,
		loading,
		getImageUrl,
	};
}
