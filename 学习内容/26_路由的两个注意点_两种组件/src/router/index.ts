import {createMemoryHistory, createRouter} from "vue-router";
import Home from '@/views/Home.vue';
import Person from '@/views/Person/Person.vue';
/*
路由组件：通常存放在views或pages文件夹中；通过点击导航，视觉上”消失“了的路由组件，默认是被注销掉了，需要的时候再挂载。
这里Home和Person就是路由组件
一般组件：通常存放在components文件夹中。
Header就是一般组件
*/
const  router = createRouter({
    history: createMemoryHistory(),
    routes: [{
        path: '/home',
        component: Home
    }, {
        path: '/person',
        component: Person
    }
    ]
})

export default router
