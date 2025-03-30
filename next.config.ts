import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/': path.resolve(process.cwd(), 'src'),
    }
    return config
  },
}

export default nextConfig
