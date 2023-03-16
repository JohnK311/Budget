<template>
  <div id="app">
    <main-form @submitForm="onFormSubmit"></main-form>
    <total-balance :total="totalBalance"></total-balance>
    <budget-list :list="list" @deleteItem="onDeleteItem"></budget-list>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import totalBalance from "@/components/TotalBalance.vue";
import MainForm from "@/components/MainForm.vue";
export default {
  components: { BudgetList, totalBalance, MainForm },

  data() {
    return {
      list: {
        1: {
          type: "INCOME",
          value: 100,
          comment: "Some comment",
          id: 1,
        },
        2: {
          type: "OUTCOME",
          value: -50,
          comment: "Some outcome comment",
          id: 2,
        },
      },
    };
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },

  methods: {
    onDeleteItem(item) {
      delete this.list[item];
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.createObj(newObj);
    },

    createObj(obj) {
      let id = obj.id;
      this.list[id] = obj;
    },
  },
};
</script>

<style></style>
