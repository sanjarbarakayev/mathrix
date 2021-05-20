<template>
  <div class="check-answer__actoins text-center mt-4 mb-8">
    <p class="check-answer__actoins-title mb-4">
      Did you answer well?
    </p>
    <div class="flex justify-center">
      <button
        :class="{
          'check-answer__actoins-button mx-2': defaultClasses,
          confirm: confirmAnswer
        }"
        @click="yesAnswer"
      >
        Yes
      </button>
      <button
        :class="{
          'check-answer__actoins-button mx-2': defaultClasses,
          reject: rejectAnswer
        }"
        @click="noAnswer"
      >
        No
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    defaultClasses: true,
    // isAnsweredWell: null
    confirmAnswer: null,
    rejectAnswer: null
  }),
  methods: {
    yesAnswer() {
      this.confirmAnswer = true;
      this.rejectAnswer = false;
    },
    noAnswer() {
      this.confirmAnswer = false;
      this.rejectAnswer = true;
    }
  }
};
</script>
