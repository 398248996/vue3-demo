// 引入App这个组件，组件地址是./App.vue
import App from './App.vue'
import {createApp} from "vue";

// 创建组件App,将其挂载到app这个位置
createApp(App).mount('#app')