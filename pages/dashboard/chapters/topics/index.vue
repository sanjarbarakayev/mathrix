<template>
  <div class="topics pt-8">
    <div class="container mx-auto">
      <div class="topics__breadcumb">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >Dashboard</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/dashboard/chapters' }">{{
            subjectName
          }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ topicName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <h2 class="topics__title page-title my-6">
        {{ topicName }}
      </h2>

      <div class="topics__tabs relative py-8 px-20">
        <img class="topics__img" :src="subjectImg" alt="mathrix-subject" />
        <el-tabs v-model="activeTopicsTab" :stretch="true">
          <el-tab-pane label="Course and exercises" name="exercises">
            <div class="exercises flex mt-8">
              <aside class="exercises__sidebar sidebar">
                <nav class="sidebar__menu">
                  <h3 class="sidebar__title mb-6">Chapter summary</h3>
                  <ul class="sidebar__list flex flex-col">
                    <li>
                      <a
                        :class="{
                          sidebar__item: sidebarItem,
                          _active: summary.active,
                        }"
                        v-for="(summary, s) of contents"
                        :key="s"
                        @click="sidebarActive"
                      >
                        {{ summary.title }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <div class="exercises__main pl-12">
                <div class="exercises__items">
                  <div class="exercises__item topic" v-for="(item, i) of topics" :key="i">
                    <div class="topic__header flex justify-between">
                      <div>
                        <h3 class="topic__title">{{ item.title }}</h3>
                        <p class="topic__subtitle mb-6">Total {{Math.floor(item.time / 60)}}h {{item.time % 60}}min</p>
                      </div>
                      <div class="topic__progress">
                        <span class="topic__percent">{{item.completedPercent}}% completed</span>
                        <el-progress :percentage="item.completedPercent"></el-progress>
                      </div>
                    </div>
                    <div class="topic__main">
                      <div class="topic__item p-6 mb-6" v-for="(topic, t) of item.sections" :key="t">

                        <div class="topic__item-top flex justify-between items-center">
                          <div class="topic__info flex">
                            <div class="topic__img mr-4">
                              <img src="@/assets/img/icons/topic-video-icon.svg" alt="video-img">
                            </div>
                            <div class="topic__text">
                              <p class="topic__type topic__subtitle">Video</p>
                              <p class="topic__main-title">{{topic.title}}</p>
                            </div>
                          </div>
                          <div class="topic__status status">
                            <div v-if="topic.status == 'notStarted'"></div>
                            <div class="status__revise-again flex items-center" v-if="topic.status == 'reviseAgain'">
                              <img src="@/assets/img/icons/reload-icon.svg" alt="reload-icon">
                              <p class="ml-4">To revise again</p>
                            </div>
                            <div class="status__not-completed flex items-center" v-if="topic.status ==  'notCompleted'">
                              <img src="@/assets/img/icons/checked-warning-icon.svg" alt="checked-warning-icon">
                              <p class="status__not-completed-text ml-4">Your result: {{topic.currentResult}}/{{topic.exercise.totalResult}} </p>
                            </div>
                            <div class="status__checked flex items-center" v-if="topic.status ==  'checked'">
                              <img src="@/assets/img/icons/checked-success-icon.svg" alt="checked-success-icon">
                              <p class="ml-4">Checked</p>
                            </div>
                          </div>
                        </div>

                        <div class="topic__item-bottom flex justify-between" v-if="topic.exercise">
                          <div class="topic__info flex">
                            <div class="topic__img mr-4">
                              <img src="@/assets/img/icons/topic-img-icon.svg" alt="image-icon">
                            </div>
                            <div class="topic__text">
                              <p class="topic__type topic__subtitle">Exercise</p>
                              <p class="topic__main-title">{{topic.exercise.title}}</p>
                            </div>
                          </div>
                          <div class="topic__status status">
                            <div v-if="topic.exercise.status == 'notStarted'"></div>
                            <div class="status__revise-again flex items-center" v-if="topic.exercise.status == 'reviseAgain'">
                              <img src="@/assets/img/icons/reload-icon.svg" alt="reload-icon">
                              <p class="ml-4">To revise again</p>
                            </div>
                            <div class="status__not-completed flex items-center" v-if="topic.exercise.status ==  'notCompleted'">
                              <img src="@/assets/img/icons/checked-warning-icon.svg" alt="checked-warning-icon">
                              <p class="status__not-completed-text ml-4">Your result: {{topic.exercise.currentResult}}/{{topic.exercise.totalResult}} </p>
                            </div>
                            <div class="status__checked flex items-center" v-if="topic.exercise.status ==  'checked'">
                              <img src="@/assets/img/icons/checked-success-icon.svg" alt="checked-success-icon">
                              <p class="ml-4">Checked</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Summary and flashcards" name="summary">
          </el-tab-pane>

          <el-tab-pane label="Exams" name="exams"> </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <use-app />
  </div>
</template>

<script>
import UseApp from "@/components/UseApp.vue";
export default {
  data: () => ({
    subjectImg: require("@/assets/img/subjects/maths.svg"),
    subjectName: "Mathematics",
    topicName: "Serial Communication",
    activeTopicsTab: "exercises",
    sidebarItem: true,
    contents: [
      { title: "Complex numbers", active: true },
      { title: "Trigonometry" },
      { title: "Series" },
      { title: "Series" },
      { title: "Polynomials" },
      { title: "Vectors" },
      { title: "Conic sections" },
      { title: "Conic sections" },
      { title: "Composite functions" },
      { title: "Matrices" },
      { title: "Trigonometry" }
    ],
    topics: [
      {
        title: "Complex numbers",
        time: "80",
        completedPercent: 50,
        sections: [
          {
            type: "video",
            title: "Powers of the imaginary unit",
            status: "reviseAgain",
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted",
            exercise: {
              title: "The complex plane",
              status: "notCompleted",
              currentResult: 4,
              totalResult: 8,
            }
          },
        ]
      },
      {
        title: "Polynomials",
        time: "80",
        completedPercent: 50,
        sections: [
          {
            type: "video",
            title: "Powers of the imaginary unit",
            status: "reviseAgain",
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted",
          },
        ]
      },
      {
        title: "Composite functions",
        time: "80",
        completedPercent: 20,
        sections: [
          {
            type: "video",
            title: "Powers of the imaginary unit",
            status: "notStarted",
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "checked",
            exercise: {
              title: "The complex plane",
              status: "notStarted",
            }
          },
        ]
      },
      {
        title: "Trigonometry",
        time: "80",
        completedPercent: 0,
        sections: [
          {
            type: "video",
            title: "Powers of the imaginary unit",
            status: "notStarted",
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted",
          },
        ]
      },
    ],
  }),
  methods: {
    sidebarActive(e) {
      let sidebarElements = document.getElementsByClassName("sidebar__item");

      sidebarElements.forEach(element => {
        if (element.classList.contains("_active")) {
          element.classList.remove("_active");
        }
      });
      e.target.classList.add("_active");
    }
  },
  mounted() {
    // this.subjectName = this.$route.params.subjectName;
    // this.subjectImg = this.$route.params.subjectImg;
    // this.topicName = this.$route.params.topicName;
    // this.contents = this.$route.params.contents;
  },
  component: { UseApp },
};
</script>
