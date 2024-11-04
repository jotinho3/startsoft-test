/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['softstar.s3.amazonaws.com'], // Adicione aqui o domínio da imagem
  },
};

export default nextConfig;
