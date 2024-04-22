import App from '@/App.vue'
import {createApp} from "vue";
// pinia是一个符合直觉的状态管理库，类似vuex，创建store文件夹 https://pinia.vuejs.org/zh/
// 第一步：安装 npm i pinia
// 第二步：引入pinia
import {createPinia} from "pinia";
// 第三步：创建pinia
const pinia = createPinia()
const app = createApp(App)
// 第四步：运用pinia
app.use(pinia)
app.mount('#app')
