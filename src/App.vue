<template>
  <div class="container flex justify-center items-center flex-col my-20">
    <div
      class="alert alert-info rounded-lg my-5 flex justify-center items-center h-full"
    >
      <img src="/logo.svg" alt="" width="50" />
      <h2 class="text-white text-xl font-semibold">Pinia Tuto</h2>
    </div>
    <div class="flex w-full justify-center items-center my-4 gap-4 h-full">
      <input
        type="text"
        class="input bg-transparent input-lg flex-1 text-black input-bordered input-warning"
        v-model="newTodo"
      />
      <button
        @click="
          () => {
            addTodo(newTodo);
            newTodo = '';
          }
        "
        class="btn btn-warning text-black h-[4rem] w-[8rem]"
      >
        <div >Add Todos</div>
      </button>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="flex justify-center items-center gap-4"
      >
        <div  v-if="!todo.isFinished" class="border flex-1 border-[#5AD16A] py-4 pl-2 rounded-md">
          <span class="text-black text-xl">{{ todo.value }}</span>
        </div>
        <button
          v-if="!todo.isFinished"
          @click="
            () => {
              toggleTodoStatus(todo.id);
              newTodo = '';
            }
          "
          class="btn bg-[#5AD16A] text-black py-6 h-[4rem] w-[8rem]"
        >
          <div class="">Done</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodosStore } from "./store/todos";
import { storeToRefs } from "pinia";
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
