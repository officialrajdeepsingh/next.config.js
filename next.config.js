/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ['mdx', 'jsx', 'js', 'tsx', 'ts'],
  // compress: false,
  // poweredByHeader: false,
  // distDir: 'build',
  // generateEtags: false,
  // poweredByHeader: false,
  assetPrefix: isProd ? 'https://cdn.next-config-js.vercel.app' : undefined,
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'x-hello',
  //           value: 'there',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/hello',
  //       headers: [
  //         {
  //           key: 'x-hello',
  //           value: 'world',
  //         },
  //       ],
  //     },
  //   ]
  // },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
       '/about': { page: '/about' },
       '/post/hello-nextjs': { page: '/post/[slug]', query: { slug: 'hello-nextjs' } },
       '/post/learn-nextjs': { page: '/post/[slug]', query: { slug: 'learn-nextjs' } },
       '/post/deploy-nextjs':{ page: '/post/[slug]', query: { slug: 'deploy-nextjs' } },
    }
  },
  images:{
    unoptimized : true
  },
  // basePath: '/my-repo',
//   devIndicators: {
//     buildActivityPosition: 'bottom-right',
//   },
//   env: {
//     myCustomEnvirement: 'Home pages Environment variables',
// },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
  async rewrites() {
    return [
      {
        source: '/old-rewrite-path',
        destination: '/new-rewrite-path',
      },
    ]
  },  
  async redirects() {
    return [
      {
        source: '/old-path-to',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}


module.exports = nextConfig
