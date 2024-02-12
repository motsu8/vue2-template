<template>
  <div class="container">
    <h2>Todo List</h2>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add new todo"
    />
    <ul class="todo-container">
      <li v-for="(todo, index) in todos" :key="index" class="todo-element">
        <input
          type="checkbox"
          name="isDone"
          id="todo.id"
          v-model="todo.isDone"
        />
        <p :class="{ done: todo.isDone }">
          {{ todo.text }}
        </p>
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
        { id: 1, text: "initial todo", isDone: false },
        { id: 2, text: "initial todo", isDone: true },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ id: ++this.id, text: this.newTodo, isDone: false });
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos = this.todos.filter((todo) => todo.id !== index);
    },
  },
};
</script>

<style scoped>
/* 必要なスタイルがあれば追加 */
.todo-element {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-style: solid;
  border-color: silver;
  border-width: 0 0 1px;
  padding: 1rem 0rem;
}

.todo-container {
  width: 50%;
}

.done {
  text-decoration: line-through;
}
</style>
