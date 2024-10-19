import { S3Client } from '@aws-sdk/client-s3';

export const storageClient = new S3Client({
	forcePathStyle: true,
	region: process.env.NEXT_PUBLIC_region!,
	endpoint: process.env.NEXT_PUBLIC_endpoint_url!,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_aws_access_key_id!,
		secretAccessKey: process.env.NEXT_PUBLIC_aws_secret_access_key!,
	},
});
