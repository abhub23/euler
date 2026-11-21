import os from "node:os";

/**
 * All non-internal IPv4 addresses of this machine, so the dev server accepts
 * requests from whatever LAN address it's currently reachable on.
 */
const localIPv4Addresses = [
  ...new Set(
    Object.values(os.networkInterfaces())
      .flat()
      .filter((iface) => iface && iface.family === "IPv4" && !iface.internal)
      .map((iface) => iface.address)
  ),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: localIPv4Addresses,
};

export default nextConfig;
