'use server';

import axios from 'axios';

export const getImageUrls = async (
	query: string
): Promise<
	{
		name: string;
		path: string;
		height: number;
		width: number;
	}[]
> => {
	const response = await axios.get(`https://api.unsplash.com/search/photos`, {
		headers: {
			Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`, // Replace with your Unsplash Access Key
		},
		params: {
			query,
			per_page: 5,
			orientation: 'landscape',
		},
	});

	return response.data.results.map((image: any) => ({
		name: image.description || 'Untitled',
		path: image.urls.regular,
		height: image.height,
		width: image.width,
	}));
};
