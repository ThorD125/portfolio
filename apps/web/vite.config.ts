import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/portfolio/',
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    plugins: [vue(), Components({ version: 3 })],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
});
