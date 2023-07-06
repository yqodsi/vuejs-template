<template>
    <div>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li>
              <details>
                <summary>
                  Parent {{ selectedTheme  }}
                </summary>
                <ul class="p-2 bg-base-100">
                  <li >
                    <div class="flex">

                        <a
                       
                        @click="changeTheme('cupcake')"
                        >
                        cupcake
                    </a>
                    <input type="radio" name="radio-1" className="radio" checked readonly />
                </div>
                  </li>
                  <li>
                    <a
                      :class="{ 'selected': selectedTheme === 'dark' }"
                      @click="changeTheme('dark')"
                    >
                    dark
                    </a>
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
  import { ref } from 'vue';
import { useThemeStore } from '../store/theme';

  import { storeToRefs } from 'pinia';
 
        let themeStore = useThemeStore();

const { theme } = storeToRefs(themeStore);
const { setTheme, getTheme } = themeStore;
    let selectedTheme = ref(getTheme);
  console.log("",getTheme);

  const changeTheme = (theme) => {
      setTheme(theme);
      selectedTheme.value = theme;
      console.log("selectedTheme",selectedTheme);
    };
    
  
   
  
  </script>
  
  <style  scoped>

  </style>
  