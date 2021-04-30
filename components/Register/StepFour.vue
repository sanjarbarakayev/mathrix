<template>
  <section class="step-four">
    <div class="avarage">
      <h3 class="avarage__title step-title">
        Select your average grade at school
      </h3>
      <div class="avarage__slider relative">
        <div class="avarage__decrease slider-decrease">
          <img
            src="@/assets/img/icons/decrease-icon.svg"
            alt="decrease-icon"
            @click="avarageGrade--"
          />
        </div>
        <div class="slider-increase">
          <img
            src="@/assets/img/icons/increase-icon.svg"
            alt="increase-icon"
            @click="avarageGrade++"
          />
        </div>
        <el-slider v-model="avarageGrade" :max="maxGrade" :marks="gradeMarks">
        </el-slider>
      </div>
    </div>
    <div class="consider">
      <h3 class="consider__title step-title">Do you consider yourself as</h3>
      <div class="consider__slider relative">
        <div class="slider-decrease">
          <img
            src="@/assets/img/icons/decrease-icon.svg"
            alt="decrease-icon"
            @click="consider--"
          />
        </div>
        <div class="slider-increase">
          <img
            src="@/assets/img/icons/increase-icon.svg"
            alt="increase-icon"
            @click="consider++"
          />
        </div>
        <el-slider v-model="consider" :max="maxConsider" :marks="considerMarks">
        </el-slider>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    avarageGrade: 1,
    consider: 1,
    maxGrade: 20,
    maxConsider: 5,
    gradeMarks: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      17: "17",
      18: "18",
      19: "19"
    },
    considerMarks: {
      1: "Lazy",
      2: "Good",
      3: "Gread",
      4: "Perfect"
    }
  })
};
</script>
