<template>
  <div class="dashboard container mx-auto">
    <div class="dashboard__header flex justify-between">
      <h2 class="dashboard__title page-title">Welcome, {{ user.username }}!</h2>
      <div class="dashboard__activity flex justify-between">
        <p>
          <span>{{ user.mins }}</span> mins viewed
        </p>
        <p>
          <span>{{ user.activities }}</span> activities checked
        </p>
      </div>
    </div>
    <div class="dashboard__tabs">
      <el-tabs v-model="activeTab" :stretch="true">
        <h3 class="courses__title">Your active course</h3>
        <el-tab-pane label="Subjects" name="subjects">
          <div class="courses__list grid grid-cols-3 gap-6">
            <div
              class="courses__item course relative"
              v-for="(course, index) of courses"
              :key="index"
            >
              <h4 class="course__name">{{ course.name }}</h4>
              <img
                class="course__pattern"
                :src="course.pattern"
                alt="course-patterns"
              />
              <div class="flex items-center">
                <div class="course__progress mr-3">
                  <el-progress
                    type="circle"
                    :percentage="course.percentage"
                    color="#FF773C"
                  ></el-progress>
                </div>
                <div>
                  <p class="course__topic">{{ course.topic }}</p>
                  <nuxt-link :to="course.link">
                    <p class="course__continue mt-1">
                      Cointinue
                      <el-icon class="el-icon-right pt-1 ml-1"></el-icon>
                    </p>
                  </nuxt-link>
                </div>
              </div>
              <div
                class="course__compalate complate grid grid-cols-2 grid-rows-2 items-center justify-center"
              >
                <div
                  class="complate__item flex flex-col justify-center items-center"
                  v-for="(item, index) of complatedTasks"
                  :key="index"
                >
                  <p class="complate__title">
                    {{ item.complated }}/{{ item.max }}
                  </p>
                  <p class="complate__subtitle">videos checked</p>
                </div>
              </div>
            </div>
          </div>

          <div class="subject">
            <h3 class="subject__title step-title">Coose the subject</h3>
            <div class="subject__items grid grid-cols-4 grid-rows-3">
              <div v-for="(subject, index) of subjects" :key="index">
                <nuxt-link :to="subject.link">
                  <div class="subject__item flex flex-col">
                    <img
                      :src="subject.img"
                      alt="subject"
                      class="subject__img"
                    />
                    <p class="subject__name">{{ subject.name }}</p>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Motivation" name="motivation"
          >Motivation</el-tab-pane
        >
        <el-tab-pane label="Training" name="training">Training</el-tab-pane>
      </el-tabs>
    </div>
    <use-app />
  </div>
</template>

<script>
import UseApp from "@/components/UseApp";
export default {
  data: () => ({
    activeTab: "subjects",
    user: {
      username: "Callie",
      mins: 12,
      activities: 40,
    },
    courses: [
      {
        name: "History",
        pattern: require("@/assets/img/patterns/history-pattern.svg"),
        percentage: 50,
        topic: "Continuity and Derivation",
        link: "/dashboard/history",
        videoComplated: 35,
        totolVidoe: 56,
        exerciseComplated: 12,
        totolEexercise: 20,
        flashcardComplated: 0,
        totolFlashcard: 10,
        examComplated: 1,
        totolExam: 4,
      },
      {
        name: "History",
        pattern: require("@/assets/img/patterns/history-pattern.svg"),
        percentage: 50,
        topic: "Continuity and Derivation",
        link: "/dashboard/history",
        videoComplated: 35,
        totolVidoe: 56,
        exerciseComplated: 12,
        totolEexercise: 20,
        flashcardComplated: 0,
        totolFlashcard: 10,
        examComplated: 1,
        totolExam: 4,
      },
    ],
    subjects: [
      {
        img: require("@/assets/img/subjects/maths.svg"),
        name: "Mathematics",
        link: "/dashboard/maths",
      },
      {
        img: require("@/assets/img/subjects/physical.svg"),
        name: "Physical",
        link: "/dashboard/physical",
      },
      {
        img: require("@/assets/img/subjects/svt.svg"),
        name: "SVT",
        link: "/dashboard/svt",
      },
      {
        img: require("@/assets/img/subjects/history.svg"),
        name: "History",
        link: "/dashboard/history",
      },
      {
        img: require("@/assets/img/subjects/chemistry.svg"),
        name: "Chemistry",
        link: "/dashboard/chemistry",
      },
      {
        img: require("@/assets/img/subjects/numeric.svg"),
        name: "Numeric Science",
        link: "/dashboard/numeric",
      },
      {
        img: require("@/assets/img/subjects/technology.svg"),
        name: "Technology",
        link: "/dashboard/technology",
      },
      {
        img: require("@/assets/img/subjects/philosophy.svg"),
        name: "Philosophy",
        link: "/dashboard/philosophy",
      },
      {
        img: require("@/assets/img/subjects/geographi.svg"),
        name: "Geographi",
        link: "/dashboard/geographi",
      },
      {
        img: require("@/assets/img/subjects/language.svg"),
        name: "French",
        link: "/dashboard/language",
      },
    ],
    complatedTasks: [
      {
        complated: 35,
        max: 56,
      },
      {
        complated: 12,
        max: 20,
      },
      {
        complated: 0,
        max: 10,
      },
      {
        complated: 1,
        max: 4,
      },
    ],
  }),
  components: {
    UseApp,
  },
};
</script>