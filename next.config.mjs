const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true
  },
  async redirects() {
    return [
      {
        source: "/driveway-grading",
        destination: "/gravel-driveway-grading",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
