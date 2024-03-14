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
                black: '#0f0f0f',
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
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "segoe ui", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "helvetica neue", Helvetica, 游ゴシック, "pingfang sc", STXihei, 华文细黑, "microsoft yahei", 微软雅黑, SimSun, 宋体, Heiti, 黑体, sans-serif',
                    lineheight: '1.8em',
                    fontSize: '18px',
                },
                h1: {
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    marginTop: '1rem',
                    fontWeight: '700',
                    color: '#ffffff',
                },
                h2: {
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    marginTop: '2rem',
                    color: '#ffffff',
                },
                h3: {
                    fontSize: '1.3rem',
                    marginBottom: '0.5rem',
                    marginTop: '1rem',
                    color: '#ffffff',
                },
            });
        }),
    ],
};
