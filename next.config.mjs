/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    transpilePackages: ["@ionic/react", "@ionic/core", "ionicons"],
    output: "standalone",
    rewrites: () => {
        return [
            {
                source: "/:path*",
                destination: "/",
            },
        ];
    },
};

export default nextConfig;
