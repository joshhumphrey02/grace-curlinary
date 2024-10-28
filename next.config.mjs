/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gwaoeuzdusyotbrfqkki.supabase.co',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
