import { defineStore } from "pinia";

export const useThemeStore = defineStore({
id: "theme",
state: () => ({
theme: "dark",
}),
getters: {
getTheme() {
return this.theme;
},
},
actions: {
setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
},
},
});