/** @type{import('next').NextConfig} */
const nextConfig = {
  webpack: (config , {isServer}) => {
    // Add a rule for handling .nodes files using the 'raw-loader'.
    config.module.rules.push({ test: /\.nodes$/, use: 'raw-loader' });

    // If the build is not for the server, exclude 'canvas' from the bundle.
    if (!isServer) config.externals.push('canvas');

    return config; // Return the modified Webpack configuration.
  }
}

module.exports = nextConfig;
