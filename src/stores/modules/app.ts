import {defineStore} from "pinia";

const useAppStore = defineStore({
    id: 'appStore',
    state: () => ({
        collapse: false,
        showLogo: true
    }),
    actions: {
        changeCollapseState() {
            this.collapse = !this.collapse
        },
        changeShowLogoState() {
            this.showLogo = !this.showLogo
        },
    }
})

export default useAppStore
