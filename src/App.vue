<template>
  <div id="app">
    <Counter />
    <Todo />
    <Calculation />
    <NotElement />
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
import Todo from './components/Todos.vue';
import NotElement from './components/NotElement.vue';
import Calculation from './components/Calculation.vue';


export default {
  components: {
    Counter,
    Todo,
    Calculation,
    NotElement
  }
};
</script>

<style>
/* 必要なスタイルがあれば追加 */
</style>