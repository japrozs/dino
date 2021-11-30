module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "btn-dark": "rgba(235, 87,87, 0.1)",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};