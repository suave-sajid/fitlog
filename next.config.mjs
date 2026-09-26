/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '/free-photo/**',
        // No `search` here on purpose: setting search: '' would only allow URLs
        // without a query string, and these image URLs end in "?w=740".
      },
    ],
  },
};

export default nextConfig;
