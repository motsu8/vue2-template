<template>
  <div class="container">
    <div class="calc-background">
      <div class="input-container">
        <input
          type="text"
          class="block"
          placeholder="input"
          :value="inputValue"
        />
        <input type="text" class="block" placeholder="total" :value="total" />
      </div>
      <div class="btn-container">
        <button
          v-for="(button, index) in btns"
          class="grid-item"
          :key="index"
          :value="button"
          @click="handleClick"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculation",
  data() {
    return {
      inputValue: "",
      total: 0,
      btnNumbers: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"],
      btnExpressions: ["+", "-", "*", "/"],
      calcFlag: "=",
      clearFlag: "c",
      btns: [],
    };
  },
  created() {
    this.btns = [
      ...this.btnNumbers,
      ...this.btnExpressions,
      this.calcFlag,
      this.clearFlag,
    ];
  },
  methods: {
    isNumber(value) {
      return this.btnNumbers.includes(value);
    },
    isExpression(value) {
      return this.btnExpressions.includes(value);
    },
    isBeforeExpression() {
      return this.isExpression(this.inputValue[this.inputValue.length - 2]);
    },
    handleClick(e) {
      const value = e.target.value;
      if (!this.inputValue.length && this.isExpression(value)) return;

      if(value === this.clearFlag) return this.clear();
      if (value === this.calcFlag) return this.calculation();

      if (this.isBeforeExpression() && this.isExpression(value)) {
        this.inputValue = this.inputValue.slice(0, -2) + `${value} `;
      } else if (this.isNumber(value)) {
        this.inputValue += value;
      } else if (this.isExpression(value)) {
        this.inputValue += ` ${value} `;
      }
    },
    clear(){
      this.inputValue = ""
      this.total = 0
    },
    calculation() {
      const calcArr = this.inputValue.split(" ");
      this.total = Number(calcArr[0]);
      for (let i = 1; i < calcArr.length; i += 2) {
        const operator = calcArr[i];
        const operand = Number(calcArr[i + 1]);

        switch (operator) {
          case "+":
            this.total += operand;
            break;
          case "-":
            this.total -= operand;
            break;
          case "*":
            this.total *= operand;
            break;
          case "/":
            this.total /= operand;
            break;
          default:
            this.total = NaN;
            break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.calc-background {
  width: 40%;
  padding: 1rem;
  background-color: slategray;
  .btn-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 0.5rem;

    .grid-item:last-child{
      grid-column-start: 1;
      grid-column-end: -1;
    }
  }

  .input-container {
    .block {
      display: block;
      margin-bottom: 0.5rem;
    }

    input[type="text"] {
      width: 100%;
      height: 2rem;
      padding-left: 0.5rem;
      box-sizing: border-box;
    }
  }
}
</style>
