<template>
  <div
    class="register container mx-auto flex flex-col justify-between text-center"
  >
    <div class="register__header grid grid-cols-3 grid-rows-2">
      <div class="register__prev-step text-left">
        <button @click="decrease" v-show="activeStep > 1">
          <img src="@/assets/img/icons/prev-icon.svg" alt="prev-icon" />
        </button>
      </div>
      <h2 class="register__title">{{ stepTitle }}</h2>
      <div class="register__close-step text-right">
        <button @click="closeRegister">
          <img src="@/assets/img/icons/close-icon.svg" alt="close-icon" />
        </button>
      </div>
      <div class="register__progress realtive col-span-3">
        <p class="register__progress-text">Step {{ activeStep }}/4</p>
        <el-progress
          :percentage="percentage"
          :color="customColor"
          :stroke-width="10"
        ></el-progress>
      </div>
    </div>
    <div class="register__step">
      <step-one v-show="activeStep == 1" />
      <step-two v-show="activeStep == 2" />
      <step-three v-show="activeStep == 3" />
    </div>
    <div class="register__next-step">
      <button class="m-btn-primary" @click="increase">Next</button>
    </div>
  </div>
</template>

<script>
import StepOne from "@/components/Register/StepOne";
import StepTwo from "@/components/Register/StepTwo";
import StepThree from "@/components/Register/StepThree";

export default {
  layout: "auth",
  components: { StepOne, StepTwo, StepThree },
  data() {
    return {
      activeStep: 1,
      stepTitle: "Let's get acquainted",
      percentage: 25,
      customColor: "#F9ED35"
    };
  },
  methods: {
    decrease() {
      this.activeStep = --this.activeStep;
      this.percentage = this.percentage - 25;
    },
    increase() {
      this.activeStep = ++this.activeStep;
      this.percentage = this.percentage + 25;
    },
    closeRegister() {
      this.$router.push("/home");
    }
  }
};
</script>
