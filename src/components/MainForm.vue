<template>
  <div>
    <el-card class="form-card">
      <el-form
        :model="formData"
        ref="addItemForm"
        :rules="rules"
        label-position="top"
      >
        <el-form-item label="Type" prop="type">
          <el-select
            class="type-select"
            v-model="formData.type"
            placeholder="Choose type..."
          >
            <el-option label="Income" value="INCOME" />
            <el-option label="Outcome" value="OUTCOME" />
          </el-select>
        </el-form-item>

        <el-form-item label="Comments" prop="comment">
          <el-input v-model="formData.comment"></el-input>
        </el-form-item>

        <el-form-item label="Value" prop="Value">
          <el-input v-model.number="formData.value"></el-input>
        </el-form-item>
        <el-button type="primary" size="large" @click="onSubmit"
          >Submit</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "main-form",
  data() {
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
      rules: {
        type: [{ message: "Please select type", trigger: "blur" }],
        comment: [
          { required: true, message: "Please input comment", trigger: "blur" },
        ],
        value: [
          { required: true, message: "Please input value", trigger: "change" },
          {
            type: "number",
            message: "Value must be a number",
            trigger: "change",
          },
        ],
      },
    };
  },

  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.$emit("submitForm", { ...this.formData });
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
