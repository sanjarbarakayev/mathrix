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
      <div class="multistep__main h-full flex flex-col">
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

        <!-- Exam timer -->
        <div class="exam-timer flex items-center mb-4">
          <img src="@/assets/img/icons/time-icon.svg" alt="time-icon" />
          <p class="ml-4">Time left {{ timeLeft }}</p>
        </div>
        <!-- First step -->
        <div class="exam-step p-8 pl-16 mb-8" v-if="activeStep == 1">
          <ol class="exam-step__questions">
            <li
              class="exam-step__question exam-question mb-4"
              v-for="(question, q) of examQuestions"
              :key="q"
            >
              <h4 class="exam-question__title mb-4">
                {{ question.title }}
              </h4>
              <ol class="exam-question__variants" type="a">
                <li
                  class="exam-question__variant mb-4"
                  v-for="(variant, v) of question.variants"
                  :key="v"
                >
                  {{ variant }}
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <!-- Second step -->
        <div class="exam-step p-8 pl-16 mb-8" v-if="activeStep == 2">
          <ol class="exam-step__questions">
            <li
              class="exam-step__question exam-question mb-4"
              v-for="(question, q) of examQuestions"
              :key="q"
            >
              <h4 class="exam-question__title mb-4">
                {{ question.title }}
              </h4>
              <ol class="exam-question__variants" type="a">
                <li
                  class="exam-question__variant mb-4"
                  v-for="(variant, v) of question.variants"
                  :key="v"
                >
                  {{ variant }}
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <!-- Third step -->
        <div class="exam-step p-8 pl-16 mb-8" v-if="activeStep == 3">
          <ol class="exam-step__questions">
            <li
              class="exam-step__question exam-question mb-4"
              v-for="(question, q) of examQuestions"
              :key="q"
            >
              <h4 class="exam-question__title mb-4">
                {{ question.title }}
              </h4>
              <ol class="exam-question__variants" type="a">
                <li
                  class="exam-question__variant mb-4"
                  v-for="(variant, v) of question.variants"
                  :key="v"
                >
                  {{ variant }}
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <!-- Fourth step -->
        <div class="exam-step p-8 pl-16 mb-8" v-if="activeStep == 4">
          <ol class="exam-step__questions">
            <li
              class="exam-step__question exam-question mb-4"
              v-for="(question, q) of examQuestions"
              :key="q"
            >
              <h4 class="exam-question__title mb-4">
                {{ question.title }}
              </h4>
              <ol class="exam-question__variants" type="a">
                <li
                  class="exam-question__variant mb-4"
                  v-for="(variant, v) of question.variants"
                  :key="v"
                >
                  {{ variant }}
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <!-- Exam step button -->
        <button
          class="exam-step__button m-btn-primary mb-8 mx-auto"
          @click="nextStep"
        >
          I’m finished
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "multistep",
  data: () => ({
    activeStep: null,
    percentage: 25,
    customColor: "#F9ED35",
    totalSteps: 4,
    timeLeft: "01:12",
    examQuestions: [
      {
        id: 1,
        title:
          "Over which interval does h have a negative average rateof change?",
        variants: ["− 3 ≤ x ≤ 1−3 ≤ x ≤ 1", "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1"]
      },
      {
        id: 2,
        title: "Translate the following sentences in terms of limits.",
        variants: [
          "f admits a vertical asymptote in 0 ^ +0 + ",
          "f admits a horizontal asymptote of equationy = 42there=4 2 in+ \ Infty+ ∞ ."
        ]
      },
      {
        id: 3,
        title:
          "Over which interval does h have a negative average rateof change?",
        variants: ["− 3 ≤ x ≤ 1−3 ≤ x ≤ 1", "− 3 ≤ x ≤ 1−3 ≤ x ≤ 1"]
      }
    ]
  }),
  methods: {
    nextStep() {
      this.activeStep++;
      this.percentage += 25;
      if (this.activeStep > 4) {
        this.$router.push("/exam/check-answer");
      }
    }
  },
  mounted() {
    this.activeStep = 1;
  }
};
</script>
