export type BgState = {
    defaultBgPath: string,
    currentBgPath: string | null
}

const useBgStore = defineStore('bg', {
    state: (): BgState => ({
        defaultBgPath: './resources/background.png',
        currentBgPath: null
    }), getters: {

        bg: (state) => { state.currentBgPath || state.defaultBgPath }

    }, actions: {

        init() {
            const router = useRouter();
            const currentRoute = router.currentRoute
            watch(currentRoute, (newRoute) => {
                this.currentBgPath = null;
            })
        },

        setCustomBgPath(path: string) {
            this.currentBgPath = path;
        },

    }
})

export default useBgStore;