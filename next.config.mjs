// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // your Next.js config
  images: {
    domains: ["i.ibb.co", "christojeffrey.imgix.net"],
  },
};

export default withPlaiceholder(config);
