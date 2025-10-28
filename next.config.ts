import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/offline",
  },
});

export default withPWA(nextConfig);
