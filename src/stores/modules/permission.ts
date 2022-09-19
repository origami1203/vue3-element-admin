import {defineStore} from "pinia";
import {getMenus} from "@/api/menu";
import type {RouteMeta, RouteRecordRaw} from "vue-router";
import type {Menu} from "@/types/system/menu";
import {publicRoutes} from "@/router";

// vite中动态导入 => https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob('@/views/**/*.vue');
const Layout = () => import('@/layout/index.vue')

const usePermissionStore = defineStore({
    id: 'permissionStore',
    state: () => ({
        routes: [] as Array<RouteRecordRaw>,
        addRoutes: [] as Array<RouteRecordRaw>
    }),
    actions: {
        setRouters(routes: RouteRecordRaw[]) {
            this.addRoutes = routes;
            this.routes = publicRoutes.concat(routes)
        },
        dynamicRoutes() {
            return getMenus()
                .then(resp => {
                    const menus = resp.data;
                    const route = generateRouteViaMenu(menus);
                    this.setRouters(route)
                    return this.routes
                })
        }
    },

})

function generateRouteViaMenu(menus: Menu[]): RouteRecordRaw[] {
    const result: RouteRecordRaw[] = []

    menus.forEach(menu => {
        const route: RouteRecordRaw = {
            path: menu.path,
            redirect: menu.redirect,
            component: undefined,
            meta: menu.meta as RouteMeta,
            children: []
        }

        if (menu.component === 'Layout') {
            route.component = Layout;
        } else {
            // 写成'/src/...',不要写成'@/views/...'
            const component = modules[`/src/views/${menu.component}.vue`] as any
            if (component) {
                route.component = component;
            } else {
                route.component = () => import('@/views/error-page/404.vue')
            }
        }

        if (menu.children && menu.children.length > 0) {
            route.children = generateRouteViaMenu(menu.children)
        }
        result.push(route)
    })
    return result;
}

export default usePermissionStore
