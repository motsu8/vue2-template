<template>
  <div id="app">
    <Counter />
    <Todo />
  </div>
</template>

<script>
import Counter from './components/counter.vue';
import Todo from './components/todos.vue';

export default {
  components: {
    Counter,
    Todo
  }
};
</script>

<style>
/* 必要なスタイルがあれば追加 */
</style>