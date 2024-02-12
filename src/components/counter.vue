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
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-container {
  display: flex;
  justify-content: space-around;
  width: 10%;
}
</style>
