import { defineStore } from "pinia";


// theme store

export const useThemeStore = defineStore({
    id: "theme",
    state: () => ({
        theme: "light",
    }),
    getters: {
        getTheme() {
            return this.theme;
        },
    },
    actions: {
        setTheme(theme) {
            this.theme = theme;
        }
    },
});

