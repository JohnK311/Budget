<template>
  <div>
    <div class="total-value">Balance {{ total }}</div>
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
