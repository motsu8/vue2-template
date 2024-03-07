<template>
  <div class="parent">
    <h2>NotElement App</h2>
    <p>element1</p>
    <p>element2</p>
    <div class="print container">
      <button @click="print">print</button>
      <p>child1</p>
      <p>child2</p>
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
    print() {
      const toggleElements = document.querySelectorAll(
        ":not(html, head, head *, body, #app , .parent, .print, .print *)"
      );
      console.log("click");
      toggleElements.forEach((element) => {
        element.classList.toggle("hidden");
      });
    },
  },
};
</script>

<style scoped>
/* スタイルが必要な場合はここに追加 */
.container {
  width: 100%;
  height: 50vh;
  padding: 5rem;
  border: 2px solid #707070;
}
</style>
