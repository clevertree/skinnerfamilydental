import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
        "./src/app/*.{js,ts,jsx,tsx,md,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            dropShadow: {
                'white': '0 0 8px #FFA',
            }
        },
    },
    plugins: [],
};
export default config;
