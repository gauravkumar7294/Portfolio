import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import path from "node:path";

const hasParentLockfile = existsSync(path.resolve("../package-lock.json"));

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    root: hasParentLockfile ? path.resolve("..") : path.resolve("."),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
