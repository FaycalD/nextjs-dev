const withTM = require('next-transpile-modules')(['@shadcn/ui']);
const withImages = require('next-images');

module.exports = withImages(
  withTM({
    reactStrictMode: true,
    images: {
      domains: ['avatars.githubusercontent.com'],
    },
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  })
);