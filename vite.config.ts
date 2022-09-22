import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vueJsx from "@vitejs/plugin-vue-jsx";
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'


// 详细配置 => https://cn.vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        // jsx/tsx支持
        vueJsx(),

        // element-plus自动按需引入
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        // element-plus手动引入时自动引入样式
        ElementPlus()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 开发ip和端口
    server: {
        host: 'localhost',
        port: 80,
        open: true
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
})
