import {createRouter, createWebHistory} from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import Vmodel from '@/pages/04_v-model/Father.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/props',
        component: Props
    }, {
        path: '/event',
        component: Event
    }, {
        path: '/mitt',
        component: Mitt
    }, {
        path: '/vmodel',
        component: Vmodel
    },{
        path: '/',
        redirect: '/props'
    }
    ]
})

export default router
