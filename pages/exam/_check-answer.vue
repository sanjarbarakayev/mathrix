<template>
  <div class="check-answers">
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

      <!-- Check exam answer -->
      <div class="check-answer mx-auto">
        <h3 class="check-answer__title text-center mt-8 mb-2">
          Check your answers
        </h3>
        <p class="check-answer__subtitle text-center mb-8">
          Correct all the questions to move on
        </p>
        <div class="check-answer__main p-10">
          <ol class="check-answer__question-list">
            <li
              class="check-answer__question"
              v-for="(question, q) of examQuestions"
              :key="q"
            >
              {{ question.title }}
              <ul class="check-answer__question-variants">
                <li
                  class="check-answer__variant my-4"
                  v-for="(variant, v) of question.variants"
                  :key="v"
                >
                  <p>{{ variant.title }}</p>
                  <div class="check-answer__answer px-4">
                    <h4 class="check-answer__answer-title my-4">Answer</h4>
                    <div
                      class="check-answer__answer-text"
                      v-html="variant.answer"
                    ></div>
                  </div>
                  <asnwer-well-buttons />
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div class="check-answer__actions text-center my-8">
          <nuxt-link to="exam-results">
            <button class="m-btn-primary">Go to debriefing</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AsnwerWellButtons from "@/components/AsnwerWellButtons.vue";
export default {
  components: { AsnwerWellButtons },
  layout: "clear",
  data: () => ({}),
  computed: {
    ...mapGetters({
      examQuestions: ["exam/getExamQuestions"]
    })
  },
  mounted() {}
};
</script>
