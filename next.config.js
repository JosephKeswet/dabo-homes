/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{ 
    unoptimized:true
  }
}
require('dotenv').config();

module.exports = nextConfig
