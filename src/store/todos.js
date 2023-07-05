import { defineStore } from "pinia";

export const useTodosStore = defineStore({
  id: "todos",
  state: () => ({
    todos: [
      {
        id: 1,
        value: "Todo 1",
        isFinished: false,
      },
      {
        id: 2,
        value: "Todo 2",
        isFinished: false,
      },
    ],
  }),
  getters: {
    getTodos() {
      return this.todos;
    },
  },
  actions: {
    addTodo(value, isFinished = false) {
      if (!value.length) return;
      this.todos.push({
        id: this.todos.length + 1,
        value,
        isFinished,
      });
    },

    toggleTodoStatus(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isFinished = !todo.isFinished;
    },
  },
});
