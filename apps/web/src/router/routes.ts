import { RouteRecordRaw } from 'vue-router';

import PathNotFound from '@/views/404.vue';
import AccessDenied from '@/views/Acces-denied.vue';
import Home from '@/views/aboutme.vue';
import Present from '@/views/Present.vue';
import Test from '@/views/test.vue';
import Cv from '@/views/cv.vue';
import blog from '@/views/blog.vue';
import projects from '@/views/projects.vue';
import console from '@/views/Console.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: ['/home', '/', '/about'],
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
    {
        path: '/cv/',
        alias: ['/cv'],
        name: 'cv',
        component: Cv,
    },
    {
        path: '/blog/',
        alias: ['/blog'],
        name: 'blog',
        component: blog,
    },
    {
        path: '/console/',
        alias: ['/console'],
        name: 'console',
        component: console,
    },
    {
        path: '/projects/',
        alias: ['/project', '/projects', '/project', '/project/'],
        name: 'projects',
        component: projects,
    },
];
