<template>
  <div class="flashcards-page">
    <div class="container mx-auto h-screen flex flex-col">
      <div
        class="multistep__header flex justify-between item-center pt-3 pb-4 mb-4"
      >
        <div></div>
        <h2 class="multistep__title">What are the imaginary numbers?</h2>
        <button class="multistep__close-btn">
          <img src="@/assets/img/icons/close-icon.svg" alt="close-icon" />
        </button>
      </div>
      <div class="multistep__main h-full flex flex-col">
        <!-- Flashcard progress -->
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
        <div class="flashcard">
          <div class="flashcard__header flex justify-between mb-4">
            <div class="flashcard__show-answer flex items-center">
              <img
                src="@/assets/img/icons/exclamation-icon.svg"
                alt="exclamation-icon"
                class="mr-4"
              />
              Click on the map to see the answer
            </div>
            <div class="flashcard__list">
              List of flashcards
            </div>
          </div>
          <!-- Flashcard steps -->
          <div class="flashcard__main">
            <!-- First flashcard -->
            <div class="flashcard__step mb-4">
              <transition name="question">
                <div
                  class="flashcard__question flex items-center justify-center"
                  @click="showAnswer"
                  v-if="isQuestionShown"
                >
                  {{ currentFlashcard.question }}
                </div>
              </transition>
              <transition name="answer">
                <div
                  class="flashcard__answer flex items-center justify-center"
                  v-html="currentFlashcard.answer"
                  v-if="isAnswerShown"
                ></div>
              </transition>
            </div>
          </div>
          <!-- Flashcard action -->
          <div class="flashcard__actions flex justify-between mb-4">
            <el-button
              type="secondary"
              class="m-btn-secondary flex items-center"
              @click="prevFlashcard"
              :disabled="activeStep == 1"
            >
              <el-icon class="el-icon-back mr-2"></el-icon>
              Previous card
            </el-button>
            <el-button
              type="secondary"
              class="m-btn-secondary flex items-center"
              @click="nextFlashcard"
              :disabled="activeStep == 4"
            >
              Next card
              <el-icon class="el-icon-right ml-2"></el-icon>
            </el-button>
          </div>
          <!-- List of flashcards -->
          <div class="flashcard__list">
            <div
              class="flashcard__item"
              v-for="(flashcard, f) of getFlashcardsList"
              :key="f"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "multistep",
  data: () => ({
    percentage: 25,
    activeStep: 1,
    totalSteps: 4,
    customColor: "#F9ED35",
    currentFlashcard: [],
    allFlashcars: [],
    isAnswerShown: false,
    isQuestionShown: true
  }),
  computed: {
    ...mapGetters({
      getFlashcardsListById: "flashcards/getFlashcardsListById",
      getFlashcardsList: "flashcards/getFlashcardsList"
    })
  },
  methods: {
    showAnswer() {
      this.isQuestionShown = false;
      this.isAnswerShown = true;
    },
    nextFlashcard() {
      this.activeStep++;
      this.percentage += 25;
      this.currentFlashcard = this.getFlashcardsListById(this.activeStep);

      this.isQuestionShown = true;
      this.isAnswerShown = false;
    },
    prevFlashcard() {
      this.activeStep--;
      this.percentage -= 25;
      this.currentFlashcard = this.getFlashcardsListById(this.activeStep);

      this.isQuestionShown = true;
      this.isAnswerShown = false;
    }
  },
  mounted() {
    this.currentFlashcard = this.getFlashcardsListById(this.activeStep);
    this.allFlashcars = this.getFlashcardsList;
    console.log(this.allFlashcars);
  }
};
</script>
