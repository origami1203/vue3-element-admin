import http from "@/utils/http";

export function login(loginParam: LoginParam): Promise<Resp<any>> {
    return http.post('/user/login', loginParam)
}

export function logout(): Promise<Resp<any>> {
    return http.delete('/usr/logout')
}

export function getUserInfo(): Promise<Resp<any>> {
    return http.get('/user/info')
}
