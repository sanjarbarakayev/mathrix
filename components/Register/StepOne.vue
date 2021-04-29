<template>
  <section class="step-one mx-auto">
    <!-- <el-form label-position="top" class="demo-ruleForm"> -->
    <!-- <el-form-item label="Username"> -->
    <label for="username">Username</label>
    <el-input type="text" v-model="username" id="username"></el-input>
    <!-- </el-form-item> -->
    <!-- </el-form> -->
  </section>
</template>

<script>
export default {
  data: () => ({
    username: ""
  })
};
</script>
