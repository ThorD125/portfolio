import { RouteRecordRaw } from 'vue-router';

import PathNotFound from '@/views/404.vue';
import AccessDenied from '@/views/Acces-denied.vue';
import Home from '@/views/Home.vue';
import Present from '@/views/Present.vue';
import Test from '@/components/Layout/Pages/test.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: ['/home', '/'],
        name: 'home',
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
    {
        path: '/present/',
        name: 'Present',
        component: Present,
    },
    {
        path: '/test/',
        alias: '/test',
        name: 'testign',
        component: Test,
    },
];
