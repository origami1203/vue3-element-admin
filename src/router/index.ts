import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from 'vue-router'

// 公共路由
export const publicRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/welcome',
        component: () => import('@/layout/index.vue'),
        meta: {
            hidden: true,
            title: '主页',
            auth: true,
            icon: 'Star'
        },
        children: [
            {
                path: 'welcome',
                component: () => import('@/views/welcome/Welcome.vue'),
                meta: {
                    title: '欢迎页',
                    auth: true,
                    hidden: false,
                    icon: 'Star'
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录页',
            hidden: true,
            auth: false,
            icon: 'Star'
        },
        component: () => import('@/views/login/Login.vue')
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        meta: {
            hidden: true,
            title: '未授权',
            icon: 'Star'
        },
        component: () => import('@/views/error-page/401.vue')
    },
    // {
    //     path: '/:pathMatch(.*)',
    //     name: 'unauthorized',
    //     meta: {
    //         hidden: true,
    //         title: '404',
    //         icon: 'Star'
    //     },
    //     component: () => import('@/views/error-page/404.vue')
    // }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: publicRoutes
})

export default router
