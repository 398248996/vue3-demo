import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from '@/views/Home.vue';
import Person from '@/views/Person/Person.vue';
import Detail from "@/views/Person/Detail.vue";
/*
路由器有两种工作模式：
history(常用):路径中不带#,看起来更直观；项目上线需要服务端（nginx）配置，不然跳转会404
hash:路径中带有#，SEO不友好；兼容性好，不需要服务端配置 http://localhost:5173/#/

redirect进行重定向路径
*/
const  router = createRouter({
    history: createWebHistory(),
    routes: [{
        // name可以用来给路由命名，也可以用来做跳转
        // router-link跳转的时候，to就有了三种写法，字符串、对象中使用path、对象中使用name
        name: 'home',
        path: '/home',
        component: Home
    }, {
        name: 'person',
        path: '/person',
        component: Person,
        // 通过children进行嵌套路由，切记path不要写/,router-link的时候to需要加上父级路由
        children: [{
            name: 'detail',
            path: 'detail/:id/:name/:address/:age?',
            component: Detail
        }]
    },{
        path: '/',
        redirect: '/home'
    }
    ]
})

export default router
