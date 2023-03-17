<template>
  <div>
    <div class="total-value" :style="colorValue">Balance {{ total }}</div>
  </div>
</template>

<script>
export default {
  name: "total-balance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      // colorValue: {
      //   color: "black",
      // },
    };
  },
  computed: {
    colorValue() {
      return this.total > 0
        ? "color: green"
        : this.total < 0
        ? "color: red"
        : "";
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
