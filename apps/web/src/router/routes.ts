import { RouteRecordRaw } from 'vue-router';

import PathNotFound from '@/views/404.vue';
import AccessDenied from '@/views/Acces-denied.vue';
import Home from '@/views/Home.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/home',
        name: 'homepage',
        component: Home,
    },
    {
        path: '/access-denied',
        name: 'accessDenied',
        component: AccessDenied,
    },
    {
        path: '/404',
        name: '404',
        component: PathNotFound,
        props: true,
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '404',
    },
];
