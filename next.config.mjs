import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: 'javascript-mastery',
    project: 'javascript-nextjs',
    dryRun: !process.env.SENTRY_AUTH_TOKEN,
  },
  {
    disableServerWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
    disableClientWebpackPlugin: !process.env.SENTRY_AUTH_TOKEN,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);