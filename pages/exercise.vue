<template>
  <div class="exercise-step">
    <div class="container mx-auto h-screen flex flex-col">
      <div
        class="multistep__header flex justify-between item-center pt-3 pb-4 mb-4"
      >
        <div></div>
        <h2 class="multistep__title">The complex plane</h2>
        <button class="multistep__close-btn">
          <img src="@/assets/img/icons/close-icon.svg" alt="close-icon" />
        </button>
      </div>
      <div class="multistep__main flex flex-col items-between justify-between">
        <div class="multistep__slider mb-12">
          <p class="multistep__slider-text text-right">
            Step {{ activeStep }}/{{ totalSteps }}
          </p>
          <el-progress
            :percentage="percentage"
            :color="customColor"
            :stroke-width="10"
          ></el-progress>
        </div>
        <div class="multistep__step">
          <div class="exercise-step">
            <div class="exercise-step__timer flex items-center mb-4">
              <img src="@/assets/img/icons/time-icon.svg" alt="time-icon" />
              <p class="exercise-step__timer-text ml-4">
                Time left {{ timer }}
              </p>
            </div>
            <div
              class="exercise-step__exrcise flex flex-col items-center justify-center mb-4"
            >
              <h3 class="exercise-step__question mb-6">
                {{ exerciseQuestion }}
              </h3>
              <div class="exercise-step__varinats flex justify-between">
                <div
                  class="exercise-step__variant flex items-center justify-center"
                  v-for="(variant, v) of exerciseVariants"
                  :key="v"
                >
                  {{ variant }}
                </div>
              </div>
            </div>
            <div class="exercise-step__hint text-right">
              <p>Stuck? <span class="relative">Use a hint</span></p>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button class="exercise-step__btn text-center m-btn-primary">
            Check
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "multistep",
  data: () => ({
    percentage: 25,
    activeStep: 1,
    totalSteps: 4,
    customColor: "#F9ED35",
    timer: "01:12",
    exerciseQuestion: "Find the meaning of the expression 63 - 24",
    exerciseVariants: ["45", "39", "23"],
    correctAnswer: "39",
    answerStatus: "correct",
  }),
};
</script>
