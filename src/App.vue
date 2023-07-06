<template>
  <Header/>
  <div class="container flex justify-center items-center flex-col gap-4">
    <div
      class="gap-5 border w-full rounded-lg flex justify-center items-center py-2 h-full"
    >
      <img src="/logo.svg" alt="" width="40" />
      <h2 class="text-2xl font-light">Pinia project</h2>
    </div>
    <div class="flex w-full justify-center items-center gap-4 h-full">
      <input
        type="text"
        class="input bg-transparent input-lg flex-1 input-bordered input-warning"
        v-model="newTodo"
      />
      <button
        @click="
          () => {
            addTodo(newTodo);
            newTodo = '';
          }
        "
        class="btn btn-primary h-[4rem] w-[8rem]"
      >
        <div>Add Todos</div>
      </button>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <template v-for="todo in todos" :key="todo.id">
        <div
          class="flex justify-center items-center gap-4"
          v-if="!todo.isFinished"
        >
          <div class="border flex-1 border-[#5AD16A] py-4 pl-2 rounded-md">
            <span class="text-xl">{{ todo.value }}</span>
          </div>
          <button
            v-if="!todo.isFinished"
            @click="
              () => {
                toggleTodoStatus(todo.id);
                newTodo = '';
              }
            "
            class="btn py-6 h-[4rem] w-[8rem]"
          >
            <div class="">Done</div>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "./store/todos";
import { storeToRefs } from "pinia";
import Header from "./views/Header.vue";
const newTodo = ref("");
const todoStore = useTodosStore();

const { todos } = storeToRefs(todoStore);
const { addTodo, toggleTodoStatus } = todoStore;
</script>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #5ea5a4;
}
</style>
