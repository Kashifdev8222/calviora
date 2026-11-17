/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ['mongoose'],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
