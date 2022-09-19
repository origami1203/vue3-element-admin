import useUserStore from "@/stores/modules/user";
import usePermissionStore from "@/stores/modules/permission";
import useAppStore from "@/stores/modules/app";

const useStore = () => ({
    permission: usePermissionStore(),
    user: useUserStore(),
    app: useAppStore()
})

export default useStore
