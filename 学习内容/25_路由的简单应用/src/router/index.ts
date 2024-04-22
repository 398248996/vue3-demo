import {createMemoryHistory, createRouter} from "vue-router";
import Home from '../../../../src/views/Home.vue';
import Person from '../../../../src/views/Person/Person.vue';

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
