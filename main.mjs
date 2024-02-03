import Vue from 'vue/dist/vue.esm';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js2'
  },
  template: `<div>{{message}}</div>`,
})