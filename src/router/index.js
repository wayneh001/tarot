import {createRouter, createWebHistory} from 'vue-router';

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'App',
            component: () => import('../views/Landing.vue')
        },
        {
            path: '/main',
            name: 'Main',
            component: () => import('../views/Main.vue')
        }
    ]
});

export default router;