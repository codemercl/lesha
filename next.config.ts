import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO оптимизация
  compress: true,
  poweredByHeader: false,
  
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 год
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features для производительности
  experimental: {
    optimizePackageImports: ['@/components'],
  },

  // Headers для SEO и безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // SEO-friendly redirects
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/#courses',
        permanent: true,
      },
      {
        source: '/instructors',
        destination: '/#instructors',
        permanent: true,
      },
      {
        source: '/cars',
        destination: '/#cars',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contacts',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
