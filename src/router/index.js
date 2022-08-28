import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
const About = () => import('@/views/About/index.vue')

const routes = [
            {
                name : 'Home',
                path : '/',
                component : Home,

            },
            {
                name : 'About',
                path : '/about',
                component : About,
            },
    ]
const router = createRouter({
    history : createWebHashHistory(),
    routes
})
// view name
router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
  });

export default router