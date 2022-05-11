import Vue from 'vue'
import Router from 'vue-router'

import Salvos from './components/Salvos.vue'
import Form from './components/Form.vue'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Form
        },
        {
            path: '/salvos',
            component: Salvos
        }
    ]
})

export default router;