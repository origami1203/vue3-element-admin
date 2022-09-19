const TOKEN = 'token'

export function getToken(): string | null {
    return localStorage.getItem(TOKEN)
}

export function removeToken() {
    localStorage.removeItem(TOKEN)
}

export function setToken(token: string) {
    localStorage.setItem(TOKEN, token)
}