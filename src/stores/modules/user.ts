import {defineStore} from "pinia";
import type {UserInfo} from "@/types/stores/user";
import {getUserInfo, login, logout} from "@/api/user";
import {removeToken, setToken} from "@/utils/token-util";


const useUserStore = defineStore({
    id: 'userInfoStore',
    state: (): UserInfo => ({
        token: '',
        nickname: '',
        avatar: '',
        isRouteGenerated: false
    }),
    actions: {
        login(loginParam: LoginParam) {
            return new Promise((resolve, reject) => {
                login(loginParam)
                    .then(resp => {
                        const {token} = resp.data
                        setToken(token)
                        this.token = token
                        resolve(token)
                    })
                    .catch(error => reject(error))
            })
        },
        getUserInfo() {
            return new Promise<void>((resolve, reject) => {
                getUserInfo()
                    .then(resp => {
                        const {nickname, avatar} = resp.data
                        this.nickname = nickname
                        this.avatar = avatar
                        this.isRouteGenerated = true
                        resolve()
                    })
                    .catch(error => reject(error))

            })
        },
        logout() {
            return new Promise((resolve, reject) => {
                logout()
                    // 清除用户信息
                    .then(resp => {
                        this.nickname = ''
                        this.avatar = ''
                        this.isRouteGenerated = false
                        removeToken()
                        resolve(null)
                    })
                    .catch(error => reject(error))
            })
        }
        ,
    }
})

export default useUserStore
