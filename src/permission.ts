import router from "@/router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import {getPageTitle} from "@/utils/get-page-title";
import {ElMessage} from "element-plus";
import auth from "@/utils/auth";
import useStore from "@/stores";
import {removeToken} from "@/utils/token-util";


NProgress.configure({showSpinner: false})

const LOGIN_PATH = '/login'
const DEFAULT_PATH = '/'

// 路由权限配置
router.beforeEach(async (to, from) => {
    NProgress.start()

    document.title = getPageTitle(to.meta.title as string)

    const {permission, user} = useStore();
    /**
     *  先判断是否登录
     *      已登录,判断想要去的url是否是login
     *          是,直接跳转主页
     *          否,查看是否有用户信息
     *              有,跳转到指定路由
     *              否,获取用户信息,生成路由
     *      没有登陆,判断是否该url需要权限
     *          不需权限,直接跳转
     *          需要权限,跳转登录页
     */
    if (auth.isLogin()) {
        if (to.path === LOGIN_PATH) {
            NProgress.done();
            return {path: DEFAULT_PATH};
        } else {
            // 是否已生成路由
            const isRouteGenerated = user.isRouteGenerated;
            if (isRouteGenerated) {
                return true;
            } else {
                try {
                    await user.getUserInfo()
                    const permissionRoutes = await permission.dynamicRoutes();
                    permissionRoutes.forEach(route => {
                        router.addRoute(route)
                    })
                    return {...to, replace: true}
                } catch (error) {
                    removeToken()
                    ElMessage.error('请求用户信息失败，请重试')
                }

            }
        }
    } else {
        if (to.matched.some(record => record.meta.auth)) {
            NProgress.done();
            return {path: '/login'};
        } else {
            NProgress.done()
            return true;
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})

