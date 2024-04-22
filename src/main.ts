import App from './App.vue'
import {createApp} from "vue";
import router from "@/router";
import {createPinia} from "pinia";
import emitter from "@/utils/emitter";
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
