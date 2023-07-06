<template>
  <div>
    <div class="navbar shadow-md bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary class="w-[10rem]">Parent {{ selectedTheme }}</summary>
              <ul class="p-2 bg-primary/40 w-full">
                <li>
                  <div
                    :class="{ 'bg-primary': selectedTheme === 'mytheme' }"
                    class="flex"
                    @click="changeTheme('mytheme')"
                  >
                    <a> mytheme </a>
                  </div>
                </li>
                <li>
                  <div
                    :class="{ 'bg-primary': selectedTheme === 'cupcake' }"
                    class="flex"
                    @click="changeTheme('cupcake')"
                  >
                    <a> cupcake </a>
                  </div>
                </li>
                <li>
                  <div
                    :class="{ 'bg-primary': selectedTheme === 'winter' }"
                    class="flex"
                    @click="changeTheme('winter')"
                  >
                    <a> winter </a>
                  </div>
                </li>
                <li>
                  <div
                    :class="{ 'bg-primary': selectedTheme === 'dark' }"
                    class="flex"
                    @click="changeTheme('dark')"
                  >
                    <a> dark </a>
                  </div>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useThemeStore } from "../store/theme";

import { storeToRefs } from "pinia";

let themeStore = useThemeStore();

const { theme } = storeToRefs(themeStore);
const { setTheme, getTheme } = themeStore;
let selectedTheme = ref(getTheme);
console.log("", getTheme);

const changeTheme = (theme) => {
  setTheme(theme);
  selectedTheme.value = theme;
  console.log("selectedTheme", selectedTheme);
};
</script>

<style scoped></style>
