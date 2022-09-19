import http from "@/utils/http";
import type {Menu} from "@/types/system/menu";

export function getMenus(): Promise<Resp<Menu[]>> {
    return http.get<Menu[]>('/user/menus')
}
