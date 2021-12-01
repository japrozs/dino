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
                black: {
                    50: "#A4A4A4",
                    100: "#929292",
                    200: "#808080",
                    300: "#6D6D6D",
                    400: "#5B5B5B",
                    500: "#494949",
                    600: "#373737",
                    700: "#242424",
                    800: "#121212",
                    900: "#000000",
                    pantone: "#101820",
                    navbar: "#1e1b1b",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};