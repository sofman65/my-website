import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'aceternity.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },

        ],
    },
};


export default nextConfig;
