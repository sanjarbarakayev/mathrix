<template>
  <header class="header">
    <div class="container mx-auto flex justify-between items-center">
      <div class="header_logo">
        <img src="@/assets/img/home/logo.png" alt="mathrix-logo" />
      </div>
      <div class="header__action flex justify-between">
        <el-input
          class="header__search"
          placeholder="Find what interests you"
          prefix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
        <el-select v-model="value" placeholder="Terminal ES">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>

        <button class="header__btn login-btn">Log In</button>
        <button class="m-btn-primary register-btn">Registration</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "Terminal ES",
          label: "Terminal ES"
        },
        {
          value: "Terminal L",
          label: "Terminal L"
        },
        {
          value: "Terminal S",
          label: "Terminal S"
        }
      ],
      value: "",
      search: ""
    };
  }
};
</script>
