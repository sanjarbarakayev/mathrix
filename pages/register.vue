<template>
  <div
    class="register container mx-auto flex flex-col justify-between text-center"
  >
    <div class="register__header grid grid-cols-3 grid-rows-2">
      <div class="register__prev-step text-left">
        <button @click="activeStep--" v-show="activeStep > 1">
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
      <step-four v-show="activeStep == 4" />
    </div>
    <div class="register__next-step">
      <button class="m-btn-primary" @click="nextStep()">
        {{ stepButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import StepOne from "@/components/Register/StepOne";
import StepTwo from "@/components/Register/StepTwo";
import StepThree from "@/components/Register/StepThree";
import StepFour from "@/components/Register/StepFour";

export default {
  layout: "auth",
  components: { StepOne, StepTwo, StepThree, StepFour },
  data() {
    return {
      activeStep: 1,
      stepTitle: "Let's get acquainted",
      percentage: 25,
      customColor: "#F9ED35",
      stepButtonText: "Next",
    };
  },
  methods: {
    nextStep() {
      if (this.activeStep <= 3 || this.activeStep > 0) {
        this.stepButtonText = "Next";
        this.activeStep++;
      }
      if (this.activeStep == 4) {
        this.stepButtonText = "Finish";
      }
      if (this.activeStep == 5) {
        this.$router.push("/");
      }
    },
    closeRegister() {
      this.$router.push("/home");
    },
  },
};
</script>
