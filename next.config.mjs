/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true, // Permanent redirect (status code 308)
      },
    ];
  },
};

export default nextConfig;
