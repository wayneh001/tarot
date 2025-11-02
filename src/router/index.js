import {createRouter, createWebHistory} from 'vue-router';

let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'App',
            component: () => import('../views/Main.vue')
        },
    ]
});

export default router;