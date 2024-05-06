/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.gr-assets.com",
            },
            {
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com"
            }
        ]
    }
};

export default nextConfig;
