<template>
  <div class="exam-results container mx-auto py-10">
    <div class="exercise-results__heaeder text-right">
      <button>
        <img src="@/assets/img/icons/close-icon.svg" alt="close-icon" />
      </button>
    </div>
    <div
      class="exercise-results__main flex flex-col items-center justify-center h-full"
    >
      <img
        src="@/assets/img/logo/success-logo.svg"
        alt="success-mathrix mb-2"
      />
      <h2 class="exercise-results__title mt-6">Keep on practicing!</h2>
      <p class="exercise-results__subtitle mb-8">
        You did not get the average for this interview
      </p>
      <p class="exercise-results__score">
        {{ correctAnswers }}/{{ totalSteps }} correct
      </p>
      <div class="exercise-results__actions flex">
        <button
          class="exercise-results__btn mx-4 m-btn-secondary"
          @click="restartExam"
        >
          Restart
        </button>
        <button class="exercise-results__btn mx-4 m-btn-primary">
          Go to the next lesson
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "clear",
  data: () => ({
    correctAnswers: 3,
    totalSteps: 6
  }),
  methods: {
    restartExam() {
      this.$router.push("/exam-modal");
    }
  }
};
</script>
