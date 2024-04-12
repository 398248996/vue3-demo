import {createMemoryHistory, createRouter} from "vue-router";
import Home from '@/components/Home.vue';
import Person from '@/components/Person.vue';

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
