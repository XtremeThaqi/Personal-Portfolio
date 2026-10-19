const isPreview = Boolean(process.env.CONTEXT && process.env.CONTEXT !== "production");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return isPreview ? [{
      source: "/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    }] : [];
  },
};

export default nextConfig;
