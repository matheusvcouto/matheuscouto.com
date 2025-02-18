import type { NextConfig } from 'next'

import './src/env/server'

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  // for generate static
  // output: "export",
  // images: {
  //   unoptimized: true, // necessário para não depender de otimização via servidor
  // },
  // trailingSlash: true, // gera /about/index.html em vez de about.html
}

export default nextConfig
