<template>
  <section class="step-two">
    <div class="grade">
      <h3 class="grade__title step-title">Coose the grade</h3>
      <div class="grade__items grid grid-cols-4 grid-rows-2">
        <div
          class="grade__item"
          v-for="grade of grades"
          :key="grade.id"
          @click="chooseGrade($event)"
        >
          {{ grade.title }}
        </div>
      </div>
    </div>
    <div class="college">
      <h3 class="college__title"></h3>
      <div class="college__search relative">
        <tags-input
          element-id="tags"
          v-model="selectedTags"
          :existing-tags="[
            { key: '1', value: 'Institut supérieur de mécanique de Paris' },
            {
              key: '2',
              value: 'Institut national des langues et civilisations orientales'
            },
            { key: '3', value: 'Institut de Physique du Globe de Paris' },
            { key: '4', value: 'Institut d`Études Politiques de Paris' },
            { key: '5', value: 'Institut d`Études Politiques de Paris' },
            { key: '6', value: 'Institut d`Études Politiques de Paris' }
          ]"
          :typeahead="true"
          typeahead-style="dropdown"
          placeholder="Search your college"
        ></tags-input>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    grades: [
      { title: "First" },
      { title: "Second" },
      { title: "3rd" },
      { title: "4th" },
      { title: "5th" },
      { title: "Terminal L" },
      { title: "Terminal L" },
      { title: "Terminal S" }
    ],
    searchCollege: "",
    selectedTags: ""
  }),
  methods: {
    chooseGrade(e) {
      let activeItem = e.target,
        gradeItems = document.getElementsByClassName("grade__item");

      gradeItems.forEach(element => {
        if (element.classList.contains("active-grade")) {
          element.classList.remove("active-grade");
        }
      });

      activeItem.classList.add("active-grade");
    },
    clearSearch() {
      this.searchCollege = "";
    }
  }
};
</script>
