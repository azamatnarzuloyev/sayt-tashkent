/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/services/website-development',
        destination: '/uslugi/landing-page-pod-klyuch',
        permanent: true,
      },
      {
        source: '/services/landing-page',
        destination: '/uslugi/landing-page-pod-klyuch',
        permanent: true,
      },
      {
        source: '/services/ecommerce',
        destination: '/uslugi/sozdanie-internet-magazinov',
        permanent: true,
      },
      {
        source: '/services/corporate-website',
        destination: '/uslugi/korporativnye-sayty',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
