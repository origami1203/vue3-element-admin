import axios from "axios";
import type {AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError} from "axios";
import {ElMessage} from "element-plus";
import {getToken, removeToken} from "@/utils/token-util";
import JumpLogin from "@/utils/jump-login";

const reqConfig: AxiosRequestConfig = {
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
}

export class Http {
    // 私有变量
    private readonly http: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.http = axios.create(config)

        // 请求拦截
        this.http.interceptors.request.use((config: AxiosRequestConfig) => {
            const token = getToken();

            if (token) {
                // 添加自定义认证header
                config.headers!.Authorization = token
            }
            return config;

        }, (error: AxiosError) => {
            return Promise.reject(error)
        })

        // 响应拦截
        this.http.interceptors.response.use((resp: AxiosResponse) => {
            const {code, msg, data} = resp.data

            if (code == '20000') {
                return {code, msg, data};
                // 未认证用户清除token,跳转登录页
            } else if (code == '40001') {
                ElMessage.error(msg ? msg : '尚未登陆,将在5s后跳转至登录页');
                removeToken()
                setTimeout(() => {
                    JumpLogin()
                }, 5000);
                return Promise.reject({code, msg, data});
            } else {
                ElMessage.error(msg);
                return Promise.reject({code, msg, data});
            }
        }, (error: AxiosError) => {
            if (error.response!.status === 401) {
                removeToken()
                JumpLogin()
            }
            ElMessage.error(error.message);
            return Promise.reject(error);
        })
    };

    getAxiosInstance(): AxiosInstance {
        return this.http
    }

    get<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<Resp<T>> {
        return this.http.get(url, {params, ...config})
    }

    post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Resp<T>> {
        return this.http.post(url, data, config)
    }

    put<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Resp<T>> {
        return this.http.put(url, data, config)
    }

    delete<T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<Resp<T>> {
        return this.http.delete(url, {params, ...config})
    }

}

export default new Http(reqConfig);
