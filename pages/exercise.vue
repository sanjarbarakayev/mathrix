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
        <!-- First step -->
        <div
          class="flex flex-col items-between justify-between flex-1"
          v-if="activeStep == 1"
        >
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
                <button
                  class="exercise-step__variant"
                  v-for="(variant, v) of exerciseVariants"
                  :key="v"
                  :disabled="!isAnswered"
                >
                  <label
                    class="exercise-step__variant-label"
                    :for="variant"
                    @click="chooseAnswer($event, variant)"
                    >{{ variant }}</label
                  >
                  <input type="radio" name="variants" :id="variant" />
                </button>
              </div>
            </div>
            <div class="exercise-step__hint text-right mb-4">
              <p>Stuck? <span class="relative">Use a hint</span></p>
            </div>
          </div>
          <div class="exercise-step__explanation pt-6 mb-6" v-if="explonation">
            <h3 class="exercise-step__explanation-title mb-4">
              Explanations
            </h3>
            <p
              class="exercise-step__explanation-text mb-10"
              v-html="explonationText"
            ></p>
            <div class="exercise-step__explanation-tip relative">
              <img
                src="@/assets/img/logo/thinking-logo.svg"
                alt="thinking-mathrix"
              />
              <p v-html="explonationTip"></p>
            </div>
          </div>
          <div class="text-center pb-4">
            <el-button
              v-if="!isAnswered"
              class="exercise-step__btn text-center m-btn-primary"
              @click="checkQuestoin"
              :disabled="!isChecked"
            >
              Check
            </el-button>
            <button class="m-btn-primary" v-else @click="nextQuestion">
              Next question
            </button>
          </div>
        </div>
        <!-- Secons step -->
        <div
          class="flex flex-col items-between justify-between flex-1"
          v-if="activeStep == 2"
        >
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
                <button
                  class="exercise-step__variant"
                  v-for="(variant, v) of exerciseVariants"
                  :key="v"
                  :disabled="!isAnswered"
                >
                  <label
                    class="exercise-step__variant-label"
                    :for="variant"
                    @click="chooseAnswer($event, variant)"
                    >{{ variant }}</label
                  >
                  <input type="radio" name="variants" :id="variant" />
                </button>
              </div>
            </div>
            <div class="exercise-step__hint text-right mb-4">
              <p>Stuck? <span class="relative">Use a hint</span></p>
            </div>
          </div>
          <div class="exercise-step__explanation pt-6 mb-6" v-if="explonation">
            <h3 class="exercise-step__explanation-title mb-4">
              Explanations
            </h3>
            <p
              class="exercise-step__explanation-text mb-10"
              v-html="explonationText"
            ></p>
            <div class="exercise-step__explanation-tip relative">
              <img
                src="@/assets/img/logo/thinking-logo.svg"
                alt="thinking-mathrix"
              />
              <p v-html="explonationTip"></p>
            </div>
          </div>
          <div class="text-center pb-4">
            <el-button
              v-if="!isAnswered"
              class="exercise-step__btn text-center m-btn-primary"
              @click="checkQuestoin"
              :disabled="!isChecked"
            >
              Check
            </el-button>
            <button class="m-btn-primary" v-else @click="nextQuestion">
              Next question
            </button>
          </div>
        </div>
        <!-- Third step -->
        <div
          class="flex flex-col items-between justify-between flex-1"
          v-if="activeStep == 3"
        >
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
                <button
                  class="exercise-step__variant"
                  v-for="(variant, v) of exerciseVariants"
                  :key="v"
                  :disabled="!isAnswered"
                >
                  <label
                    class="exercise-step__variant-label"
                    :for="variant"
                    @click="chooseAnswer($event, variant)"
                    >{{ variant }}</label
                  >
                  <input type="radio" name="variants" :id="variant" />
                </button>
              </div>
            </div>
            <div class="exercise-step__hint text-right mb-4">
              <p>Stuck? <span class="relative">Use a hint</span></p>
            </div>
          </div>
          <div class="exercise-step__explanation pt-6 mb-6" v-if="explonation">
            <h3 class="exercise-step__explanation-title mb-4">
              Explanations
            </h3>
            <p
              class="exercise-step__explanation-text mb-10"
              v-html="explonationText"
            ></p>
            <div class="exercise-step__explanation-tip relative">
              <img
                src="@/assets/img/logo/thinking-logo.svg"
                alt="thinking-mathrix"
              />
              <p v-html="explonationTip"></p>
            </div>
          </div>
          <div class="text-center pb-4">
            <el-button
              v-if="!isAnswered"
              class="exercise-step__btn text-center m-btn-primary"
              @click="checkQuestoin"
              :disabled="!isChecked"
            >
              Check
            </el-button>
            <button class="m-btn-primary" v-else @click="nextQuestion">
              Next question
            </button>
          </div>
        </div>
        <!-- Fourth step -->
        <div
          class="flex flex-col items-between justify-between flex-1"
          v-if="activeStep == 4"
        >
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
                <button
                  class="exercise-step__variant"
                  v-for="(variant, v) of exerciseVariants"
                  :key="v"
                  :disabled="!isAnswered"
                >
                  <label
                    class="exercise-step__variant-label"
                    :for="variant"
                    @click="chooseAnswer($event, variant)"
                    >{{ variant }}</label
                  >
                  <input type="radio" name="variants" :id="variant" />
                </button>
              </div>
            </div>
            <div class="exercise-step__hint text-right mb-4">
              <p>Stuck? <span class="relative">Use a hint</span></p>
            </div>
          </div>
          <div class="exercise-step__explanation pt-6 mb-6" v-if="explonation">
            <h3 class="exercise-step__explanation-title mb-4">
              Explanations
            </h3>
            <p
              class="exercise-step__explanation-text mb-10"
              v-html="explonationText"
            ></p>
            <div class="exercise-step__explanation-tip relative">
              <img
                src="@/assets/img/logo/thinking-logo.svg"
                alt="thinking-mathrix"
              />
              <p v-html="explonationTip"></p>
            </div>
          </div>
          <div class="text-center pb-4">
            <el-button
              v-if="!isAnswered"
              class="exercise-step__btn text-center m-btn-primary"
              @click="checkQuestoin"
              :disabled="!isChecked"
            >
              Check
            </el-button>
            <button class="m-btn-primary" v-else @click="nextQuestion">
              Next question
            </button>
          </div>
        </div>
        <div class="exercise-results fixed w-screen h-screen inset-0 bg-white container mx-auto py-10" v-if="activeStep > totalSteps">
          <div class="exercise-results__heaeder text-right">
            <button>
              <img src="@/assets/img/icons/close-icon.svg" alt="close-icon">
            </button>
          </div>
          <div class="exercise-results__main flex flex-col items-center justify-center h-full">
            <img src="@/assets/img/logo/success-logo.svg" alt="success-mathrix mb-2">
            <h2 class="exercise-results__title mt-6">Keep on practicing!</h2>
            <p class="exercise-results__subtitle mb-8">You did not get the average for this interview</p>
            <p class="exercise-results__score">{{correctAnswers}}/{{totalSteps}} correct</p>
            <div class="exercise-results__actions flex">
              <button class="exercise-results__btn mx-4 m-btn-secondary" @click="restartExercise">Restart</button>
              <button class="exercise-results__btn mx-4 m-btn-primary">Go to the next lesson</button>
            </div>
          </div>
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
    checkedAnswerValue: null,
    checkedAnswerLabel: null,
    answerStatus: "correct",
    isChecked: false,
    isAnswered: false,
    explonation: false,
    explonationText: `
    <p>
      For increasing functions, imagine that we are climbing a mountain. In this case, the more time passes, the higher we are. This is exactly the principle of an increasing function: more x  grows (time in our example), plus f (x) increases (altitude). Graphically, we have seen that it gives an upward curve, like a mountain slope.
    </p>
    <p>
      For decreasing functions, imagine this time that you are going down a mountain. The more time passes, the lower we find ourselves. So more x grows (over time), more f ( x ) (the altitude always) decreases. The graph this time reminds us of a mountain we are going down.
    </p>
    `,
    explonationTip: `
    <p>
      There are functions, like x2 , which may be decreasing in one place and increasing in another. In such a case, it is necessary to specify on which interval it is increasing, and on which interval it is decreasing.
    </p>
    `,
    correctAnswers: 0,
    incorrectAnswers: 0
  }),
  methods: {
    chooseAnswer(e, variant) {
      let checkedAnswerTarget = e.target,
        radioAnswers = document.getElementsByClassName(
          "exercise-step__variant-label"
        );

      this.isChecked = true;

      radioAnswers.forEach(element => {
        if (element.classList.contains("checked-variant")) {
          element.classList.remove("checked-variant");
        }
      });

      this.checkedAnswerLabel = checkedAnswerTarget;
      this.checkedAnswerValue = variant;
      checkedAnswerTarget.classList.add("checked-variant");
    },
    checkQuestoin() {
      let checkedAnswerId = document.getElementById(this.checkedAnswerValue);

      this.explonation = true;

      if (this.checkedAnswerValue == this.correctAnswer) {
        console.log("correct");
        this.isAnswered = true;
        this.correctAnswers++;
      } else {
        this.checkedAnswerLabel.classList.add("is-incorrect");
        this.isAnswered = true;
        this.incorrectAnswers++;
      }
    },
    nextQuestion() {
      this.activeStep++;
      this.percentage += 25;

      this.checkedAnswerValue = null;
      // this.checkedAnswerLabel = null;
      this.answerStatus = "correct";
      this.isChecked = false;
      this.isAnswered = false;
      this.explonation = false;

      this.checkedAnswerLabel.classList.remove("is-incorrect");
      this.checkedAnswerLabel.classList.remove("checked-variant");
    },
    restartExercise() {
      this.activeStep = 1
      this.percentage = 25
      this.correctAnswers = 0
      this.incorrectAnswers = 0
    }
  }
};
</script>
