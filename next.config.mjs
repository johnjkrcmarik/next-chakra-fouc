/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: Boolean(process.env.VERCEL),
  },

  experimental: {
    optimizeCss: true,
    sharedPool: true,
    workerThreads: true,
  },

  productionBrowserSourceMaps: true,

  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: Boolean(process.env.VERCEL),
  },

  webpack(config, { dev, isServer, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: dev,
        __PROD__: !dev,
      }),
    );

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

export default nextConfig;
