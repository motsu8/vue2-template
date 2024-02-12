<template>
  <div class="container">
    <h2>Counter App</h2>
    <p>{{ count }}</p>
    <div class="btn-container">
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style scoped>
/* スタイルが必要な場合はここに追加 */
</style>
