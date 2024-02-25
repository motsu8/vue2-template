<template>
  <div id="app">
    <Counter />
    <Todo />
    <Calculation />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Todo from './components/Todos.vue';
import Calculation from './components/Calculation.vue';

export default {
  components: {
    Counter,
    Todo,
    Calculation
  }
};
</script>

<style>
/* 必要なスタイルがあれば追加 */
</style>