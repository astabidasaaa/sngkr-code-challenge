/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  env: {
    CONTENTFUL_SPACE_ID: "3qwbgvc04ikj",
    CONTENTFUL_ACCESS_TOKEN: "Nf8b6MNghhgerbGmawb5f0GIhJBUe4HwewI--Q4IDPI",
    CONTENTFUL_PREVIEW_ACCESS_TOKEN:
      "H_7WZ_7NRZ_Bgo6KJdd4xFpMuY8Owtz9BF6PD_LSYeM",
  },
};

export default nextConfig;
