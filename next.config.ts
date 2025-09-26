// next.config.js
const nextConfig = {
    webpack(config) {
      // Important: this must come BEFORE other svg loaders
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  };
  
  module.exports = nextConfig;
  