import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    base: './',
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        }),
        vue(),
    ],
    build: {
        target: ['es2015', 'chrome63']
    },
    server: {
        port: 5173
    },
});
