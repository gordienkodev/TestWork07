import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['openweathermap.org'],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
}

export default nextConfig
