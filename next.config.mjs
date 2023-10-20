// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // your Next.js config
  images: {
    domains: ["s6.imgcdn.dev"],
  },
};

export default withPlaiceholder(config);
