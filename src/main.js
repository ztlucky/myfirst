import { createApp } from 'vue'
import '@/assets/public.css'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router' //注册路由
import *as ElementPlusIconsVue from '@element-plus/icons-vue' //导入图标
// import './util/rem'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
//注册所有的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
