/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'gwaoeuzdusyotbrfqkki.supabase.co',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
