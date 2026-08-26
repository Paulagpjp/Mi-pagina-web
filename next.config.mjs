/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // El sitio es una sola página sin servidor: se exporta como HTML estático.
  // Así lo sirve cualquier hosting (Netlify, Vercel, el que sea) sin runtime.
  output: "export",
};

export default nextConfig;
