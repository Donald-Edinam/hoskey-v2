import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === "development" ? {
    allowedDevOrigins: ['10.42.0.1','10.139.237.244'],
  } : {}),
  images: {
    qualities: [70, 75, 80, 85, 90],
  },
};

export default nextConfig;
