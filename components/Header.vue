<template>
  <header class="header">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <div class="header_logo">
        <img src="@/assets/img/home/logo.svg" alt="mathrix-logo" />
      </div>
      <div
        class="header__action grid gap-4 grid-cols-2 grid-rows-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-1"
      >
        <el-input
          class="header__search col-start-1 row-start-2 sm:col-start-2 sm:col-span-2 lg:col-start-1 lg:row-start-1"
          placeholder="Find what interests you"
          prefix-icon="el-icon-search"
          v-model="search"
        >
        </el-input>
        <div
          class="header__select col-start-2 row-start-2 sm:col-start-1 sm:row-start-1 lg:col-start-3"
        >
          <el-select v-model="value" placeholder="Terminal ES">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

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
          label: "Terminal ES",
        },
        {
          value: "Terminal L",
          label: "Terminal L",
        },
        {
          value: "Terminal S",
          label: "Terminal S",
        },
      ],
      value: "Terminal ES",
      search: "",
    };
  },
};
</script>
