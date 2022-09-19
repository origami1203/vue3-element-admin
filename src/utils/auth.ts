import {getToken} from "@/utils/token-util";


export function isLogin(): boolean {
    return getToken() !== null
}

export default {isLogin}