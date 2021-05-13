<template>
  <div class="check-answer__actoins text-center mt-4 mb-8">
    <p class="check-answer__actoins-title mb-4">
      Did you answer well?
    </p>
    <div class="flex justify-center">
      <button
        :class="{
          'check-answer__actoins-button mx-2': defaultClasses,
          confirm: isAnsweredWell
        }"
        @click="isAnsweredWell = true"
      >
        Yes
      </button>
      <button
        :class="{
          'check-answer__actoins-button mx-2': defaultClasses,
          reject: !isAnsweredWell
        }"
        @click="isAnsweredWell = false"
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
    isAnsweredWell: null
  })
};
</script>
