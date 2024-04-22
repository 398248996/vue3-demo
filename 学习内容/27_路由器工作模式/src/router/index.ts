import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue';
import Person from '@/views/Person/Person.vue';
/*
路由器有两种工作模式：
history(常用):路径中不带#,看起来更直观；项目上线需要服务端（nginx）配置，不然跳转会404
hash:路径中带有#，SEO不友好；兼容性好，不需要服务端配置 http://localhost:5173/#/
*/
const  router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/person',
        component: Person
    },{
        path: '/',
        redirect: '/home'
    }
    ]
})

export default router
