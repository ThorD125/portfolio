const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
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
                    50: '#fff',
                    100: '#fff',
                    200: '#fff',
                    300: '#fff',
                    400: '#fff',
                    500: '#212121',
                    600: '#fff',
                    700: '#fff',
                    800: '#fff',
                    900: '#fff',
                    default: '#212121',
                },
                black: '#212121',
                white: '#ffffff',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-debug-screens'),
        plugin(({ addBase, theme }) => {
            addBase({
                html: { color: theme('colors.white'), backgroundColor: theme('colors.black') },
            });
        }),
    ],
};
