/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: 'export',
    server: {
        port: process.env.PORT || 3000,
    },
}

const withNextIntl = require('next-intl/plugin')();
//module.exports = withNextIntl(nextConfig);
module.exports = nextConfig;
