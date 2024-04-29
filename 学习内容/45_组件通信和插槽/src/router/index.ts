import {createRouter, createWebHistory} from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import Vmodel from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_$attrs/Father.vue'
import RefsOrParent from '@/pages/06_$refs和$parent/Father.vue'
import InjectOrProvide from '@/pages/07_inject和provide/Father.vue'
import SlotDefault from '@/pages/08_slot默认插槽/Father.vue'
import SlotName from '@/pages/09_slot具名插槽/Father.vue'
import SlotScope from '@/pages/10_slot作用域插槽/Father.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/props'
    },{
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
        path: '/attrs',
        component: Attrs
    },{
        path: '/refsOrParent',
        component: RefsOrParent
    },{
        path: '/injectOrProvide',
        component: InjectOrProvide
    },{
        path: '/slotDefault',
        component: SlotDefault
    },{
        path: '/slotName',
        component: SlotName
    },{
        path: '/slotScope',
        component: SlotScope
    }
    ]
})

export default router
