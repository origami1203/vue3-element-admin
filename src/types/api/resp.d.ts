declare interface Resp<T> {
    code: string | number
    msg: string
    data?: T
}
