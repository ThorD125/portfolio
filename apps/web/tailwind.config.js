const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['"PT Sans"', 'sans-serif'],
        },
        extend: {
            screens: {
                landscape: {
                    raw: '(orientation: landscape) and (max-height: 480px)',
                },
                statsxxl: '1500px',
                tk: '2000px',
                xxl: '2500px',
                xxxl: '3200px',
            },
            colors: {
                primary: {
                    50: '#33b1ff',
                    100: '#47b6ff',
                    200: '#5cc0ff',
                    300: '#1fb0ff',
                    400: '#0088d6',
                    500: '#005799',
                    600: '#003061',
                    700: '#001733',
                    800: '#00040a',
                    900: '#000205',
                    950: '#000000',
                    default: '#005799',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
};
