<template>
  <!-- Exam modal -->
  <div
    class="exam-modal container mx-auto py-6 w-screen h-screen"
    v-if="!activeStep"
  >
    <div class="exam-modal__header text-right">
      <button>
        <img
          class="exam-modal__close-btn"
          src="@/assets/img/icons/close-icon.svg"
          alt="close-icon"
        />
      </button>
    </div>
    <div
      class="exam-modal__main flex flex-col items-center justify-center h-full"
    >
      <img src="@/assets/img/logo/success-logo.svg" alt="happy-mathrix" />
      <h2 class="exam-modal__title mt-8 mb-4">The complex plane</h2>
      <p class="exam-modal__subtitle">
        You are about to start a 30 minute questioning. Put yourself in
        condition and click on the Start button as soon as you are ready!
      </p>
      <button class="exam-modal__btn m-btn-primary mt-8" @click="startExam">
        Let’s Go
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clear",
  methods: {
    startExam() {
      this.$router.push("/exam");
    }
  }
};
</script>
