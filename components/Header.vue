<template>
  <div>
    <header class="header">
      <div
        class="container mx-auto px-4 flex justify-between flex-col sm:flex-row items-center"
      >
        <div class="header__logo">
          <img src="@/assets/img/home/logo.svg" alt="mathrix-logo" />
        </div>
        <div
          class="header__action flex justify-between items-center"
        >
          <el-input
            class="header__search"
            placeholder="Find what interests you"
            prefix-icon="el-icon-search"
            v-model="search"
          >
          </el-input>
          <div
            class="header__select"
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
          <button class="header__btn m-btn-primary register-btn" @click="openRegisterModal">
            Registration
          </button>
        </div>
      </div>
    </header>
    <div class="register__modal">
      <el-dialog :visible.sync="dialogVisible" class="register__modal">
        <div class="register__modal-logo">
          <img src="@/assets/img/logo/mathrix-logo.svg" alt="mathrix-logo" />
        </div>
        <h2 class="register__modal-title modal-title">Sign up</h2>
        <p class="register__modal-subtitle modal-subtitle">
          Have an account? <span @click="openLoginModal">Log in</span>
        </p>
        <el-form
          label-position="top"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item prop="email" label="Email" :rules="rules">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>

          <el-form-item label="Password" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <button
            class="m-btn-primary register__modal-btn"
            @click.prevent="submitForm('ruleForm')"
          >
            Registration
          </button>
          <div class="register__modal-devider">or</div>
          <button class="register__modal-btn">
            <span>Sign up with Facebook</span>
          </button>
          <button class="register__modal-btn">
            <span>Sign up with Google</span>
          </button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
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
      value: "Terminal ES",
      search: "",
      dialogVisible: false,
      ruleForm: {
        email: "",
        pass: ""
      },
      rules: {
        email: [
          {
            required: true,
            message: "Please input email address",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Please input correct email address",
            trigger: ["blur", "change"]
          }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    openRegisterModal() {
      this.dialogVisible = true;
    },
    openLoginModal() {},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/register");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
