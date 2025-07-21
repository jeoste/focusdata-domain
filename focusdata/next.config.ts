import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper path resolution
  distDir: '.next',
  // Prevent path resolution issues
  typescript: {
    ignoreBuildErrors: false
  },
  // Configure webpack to handle external packages
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'prettier', '@prettier/plugin-xml'];
    }
    return config;
  }
};

export default nextConfig;
