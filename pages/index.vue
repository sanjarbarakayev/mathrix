<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <h2 class="dashboard__title">Welcome, {{ user.username }}!</h2>
      <div class="dashboard__activity">
        <p>
          <span>{{ user.mins }}</span> mins viewed
        </p>
        <p>
          <span>{{ user.activities }}</span> activities checked
        </p>
      </div>
      <div class="dashboard__tabs">
        <el-tabs v-model="activeTab">
          <h3 class="courses">Your active course</h3>
          <el-tab-pane label="subjects" name="subjects">
            <div class="courses__list">
              <div
                class="courses__item course"
                v-for="(course, index) of courses"
                :key="index"
              >
                <h4 class="course__name">{{ course.name }}</h4>
                <img
                  class="course__pattern"
                  :src="course.pattern"
                  alt="course-patterns"
                />
                <div class="course__info">
                  <div class="course__progress">
                    <el-progress
                      type="circle"
                      :percentage="course.percentage"
                    ></el-progress>
                  </div>
                  <p class="course__topic">{{ course.topic }}</p>
                  <nuxt-link :to="course.link">
                    <p>Cointinue <el-icon class="el-icon-right"></el-icon></p>
                  </nuxt-link>
                </div>
                <div class="course__compalate complate">
                  <div class="complate__item">
                    <p class="complate__title">
                      {{ course.videoComplated }}/{{ course.totolVidoe }}
                    </p>
                    <p class="complate__subtitle">videos checked</p>
                  </div>
                  <div class="complate__item">
                    <p class="complate__title">
                      {{ course.exerciseComplated }}/{{ course.totolEexercise }}
                    </p>
                    <p class="complate__subtitle">exercise succeed</p>
                  </div>
                  <div class="complate__item">
                    <p class="complate__title">
                      {{ course.flashcardComplated }}/{{
                        course.totolFlashcard
                      }}
                    </p>
                    <p class="complate__subtitle">flashcard checked</p>
                  </div>
                  <div class="complate__item">
                    <p class="complate__title">
                      {{ course.examComplated }}/{{ course.totolExam }}
                    </p>
                    <p class="complate__subtitle">exam done</p>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="motivation" name="motivation"
            >Motivation</el-tab-pane
          >
          <el-tab-pane label="training" name="training">Training</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
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
  }),
};
</script>