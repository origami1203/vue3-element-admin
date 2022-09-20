import {createApp} from 'vue'
import {createPinia} from 'pinia'
import * as Icons from "@element-plus/icons-vue";
import '@/permission'
import VXETable from "vxe-table";
import 'vxe-table/lib/style.min.css'

// tailwindcss引入
import './index.css'

import App from './App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 全局引入,生产环境按需引入
app.use(VXETable)

for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component)
}

app.mount('#app')
