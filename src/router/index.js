import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import About from '@/views/About/index.vue'

const routes = [
            {
                name : 'home',
                path : '/',
                component : Home,

            },
            {
                name : 'about',
                path : '/about',
                component : About,

            },
    ]
const router = createRouter({
    history : createWebHashHistory(),
    routes
})

export default router