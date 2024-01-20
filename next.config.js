/** @type {import('next').NextConfig} */

const nextConfig = {
    // output: 'export',
}

const withNextIntl = require('next-intl/plugin')();
//module.exports = withNextIntl(nextConfig);
module.exports = nextConfig;
