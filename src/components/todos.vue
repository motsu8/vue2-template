<template>
  <div class="container">
    <h2>Todo List</h2>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add new todo"
    />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 2,
      newTodo: "",
      todos: [
        { id: 1, text: "initial todo" },
        { id: 2, text: "initial todo" },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ id: ++this.id, text: this.newTodo });
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos = this.todos.filter((todo) => todo.id !== index);
    },
    checkDone(index) {},
  },
};
</script>

<style scoped>
/* 必要なスタイルがあれば追加 */
</style>
