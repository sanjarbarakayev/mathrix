<template>
  <section class="step-three">
    <div class="subject">
      <h3 class="subject__title step-title">Coose the subject</h3>
      <div class="subject__items grid grid-cols-4 grid-rows-3">
        <div
          class="subject__item flex flex-col"
          v-for="subject of subjects"
          :key="subject"
          @click.stop="chooseSubject($event)"
        >
          <img :src="subject.img" alt="subject" class="subject__img" />
          <p class="subject__name">{{ subject.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    subjects: [
      { img: require("@/assets/img/subjects/maths.svg"), name: "Mathematics" },
      { img: require("@/assets/img/subjects/physical.svg"), name: "Physical" },
      { img: require("@/assets/img/subjects/svt.svg"), name: "SVT" },
      { img: require("@/assets/img/subjects/history.svg"), name: "History" },
      {
        img: require("@/assets/img/subjects/chemistry.svg"),
        name: "Chemistry"
      },
      {
        img: require("@/assets/img/subjects/numeric.svg"),
        name: "Numeric Science"
      },
      {
        img: require("@/assets/img/subjects/philosophy.svg"),
        name: "Technology"
      },
      { img: require("@/assets/img/subjects/maths.svg"), name: "Philosophy" },
      {
        img: require("@/assets/img/subjects/geographi.svg"),
        name: "Geographi"
      },
      { img: require("@/assets/img/subjects/language.svg"), name: "French" }
    ]
  }),
  methods: {
    chooseSubject(e) {
      let activeItem = document.querySelector(".subject__item");
      activeItem.classList.add("active-subject");
    }
  }
};
</script>
