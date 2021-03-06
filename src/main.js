import { createApp } from 'vue'
import App from './App.vue'
import Element from 'element-plus'
import 'element-plus/dist/index.css'

const Vue = createApp(App)
Vue.use(Element).mount('#app')