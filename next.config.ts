import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config, {isServer}) => {
        if (isServer) {
            config.externals.push(
                'pg',
                'sequelize',
                'pg-hstore',
            )
        }
        return config;
    }
};

export default nextConfig;
