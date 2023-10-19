import { RouteRecordRaw } from 'vue-router';

import PathNotFound from '@/views/404.vue';
import AccessDenied from '@/views/Acces-denied.vue';
import Home from '@/views/Home.vue';
import Home from '@/views/Present.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/portfolio/',
        alias: '/portfolio/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/portfolio/access-denied',
        name: 'accessDenied',
        component: AccessDenied,
    },
    {
        path: '/portfolio/404',
        name: '404',
        component: PathNotFound,
        props: true,
    },
    {
        path: '/portfolio/:pathMatch(.*)',
        redirect: '404',
    },
    {
        path: '/present',
        name: 'Present',
        component: Present,
    }
];
