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
      },
      {
        source: "/gravel-driveway-rehabilitation",
        destination: "/gravel-driveway-repair",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
