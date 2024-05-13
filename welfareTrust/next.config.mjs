/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'deerdesigner.com'
          },
          {
            protocol: 'https',
            hostname: 'd1yjjnpx0p53s8.cloudfront.net'
          },
          {
            protocol: 'https',
            hostname: 'cdn.logojoy.com'
          },
          {
            protocol: 'https',
            hostname: 'cdn.dribbble.com'
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com'
          },
        ],
      },
};

export default nextConfig;
