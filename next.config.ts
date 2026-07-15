import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.foundforgedco.com" }],
        destination: "https://foundforgedco.com/:path*",
        permanent: true
      },
      {
        source: "/driveway-grading",
        destination: "/gravel-driveway-grading",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
