/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "selector",
    theme: {
        screens: {
            md: "834px",
            lg: "1366px",
        },
        // Colors
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "var(--white)",
            black: {
                100: "var(--black-100)",
                200: "var(--black-200)",
            },
            gray: {
                100: "var(--gray-100)",
                200: "var(--gray-200)",
            },
            purple: {
                100: "var(--purple-100)",
                200: "var(--purple-200)",
            },
            blue: {
                100: "var(--blue-100)",
                200: "var(--blue-200)",
            },
            pink: {
                100: "var(--pink-100)",
                200: "var(--pink-200)",
            },
        },
        extend: {
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0.0deg) " },
                    "10%": { transform: "rotate(14.0deg)" },
                    "20%": { transform: "rotate(-8.0deg)" },
                    "30%": { transform: "rotate(14.0deg)" },
                    "40%": { transform: "rotate(-4.0deg)" },
                    "50%": { transform: "rotate(10.0deg)" },
                    "60%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    margin: "0 auto",
                    padding: "0 32px",
                    "@screen lg": {
                        maxWidth: "1360px",
                        padding: "0 80px",
                    },
                },
            });
        },
    ],
};
