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
                black: '#212121',
                white: '#dadada',
                accent: '#42a5f5',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-debug-screens'),
        plugin(({ addBase, theme }) => {
            addBase({
                html: {
                    color: theme('colors.white'),
                    backgroundColor: theme('colors.black'),
                },
                h1: { fontSize: '2rem' },
            });
        }),
    ],
};
