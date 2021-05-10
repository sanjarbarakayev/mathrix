<template>
  <div class="dashboard">
    <div class="container mx-auto">
      <div class="dashboard__header flex justify-between">
        <h2 class="dashboard__title page-title">
          Welcome, {{ user.username }}!
        </h2>
        <div class="dashboard__activity flex justify-between">
          <p class="mr-4">
            <span class="mr-1">{{ user.mins }}</span> mins viewed
          </p>
          <p>
            <span class="mr-1">{{ user.activities }}</span> activities checked
          </p>
        </div>
      </div>
      <div class="dashboard__tabs">
        <el-tabs v-model="activeTab" :stretch="true">
          <el-tab-pane label="Subjects" name="subjects">
            <h3 class="courses__title">Your active course</h3>
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
              <h3 class="subject__title step-title mt-6">Choose the subject</h3>
              <div class="subject__items grid grid-cols-4 grid-rows-3">
                <div v-for="(subject, index) in subjectsList" :key="index">
                  <nuxt-link
                    :to="{
                      name: 'dashboard-chapters',
                      params: {
                        subjectId: subject.id
                      }
                    }"
                  >
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

          <el-tab-pane label="Motivation" name="motivation">
            <div class="flex motivation">
              <aside class="motivation__sidebar sidebar">
                <nav class="sidebar__menu">
                  <ul class="sidebar__list flex flex-col">
                    <li>
                      <a class="sidebar__item _active" @click="sidebarActive">
                        See all
                      </a>
                    </li>
                    <li>
                      <a class="sidebar__item" @click="sidebarActive">
                        Access success
                      </a>
                    </li>
                    <li>
                      <a class="sidebar__item" @click="sidebarActive">
                        Ask Methrix show
                      </a>
                    </li>
                    <li>
                      <a class="sidebar__item" @click="sidebarActive">
                        Special issue
                      </a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <div class="motivation__content flex flex-col">
                <div class="motivation__success">
                  <h3 class="motivation__title">Access success</h3>
                  <div class="motivation__list grid grid-cols-2">
                    <div
                      class="motivation__item"
                      v-for="(success, s) of successList"
                      :key="s"
                    >
                      <img :src="success.img" alt="mathrix motivation" />
                      <p>{{ success.title }}</p>
                    </div>
                  </div>
                </div>
                <div class="motivation__show">
                  <h3 class="motivation__title">Ask Methrix show</h3>
                  <div class="motivation__list grid grid-cols-2">
                    <div
                      class="motivation__item"
                      v-for="(show, sh) of showList"
                      :key="sh"
                    >
                      <img :src="show.img" alt="mathrix motivation" />
                      <p>{{ show.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Training" name="training">
            <div class="training mb-8">
              <div class="training__user mb-10">
                <h3 class="training__title mb-4">Your training</h3>
                <div
                  class="training__list grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <div
                    class="training__item p-4 text-center"
                    v-for="(item, i) of userTrainings"
                    :key="i"
                  >
                    <div class="training__video relative mb-2">
                      <img :src="item.img" alt="mathrix-training" />
                      <img
                        class="play-video"
                        src="@/assets/img/icons/video-icon.svg"
                        alt="play-video-icon"
                      />
                    </div>
                    <h4 class="training__name my-4 mx-auto">{{ item.name }}</h4>
                    <div class="training__info flex justify-around pb-3">
                      <div class="training__time">
                        <img
                          src="@/assets/img/icons/time-icon.svg"
                          alt="time-icon"
                          class="mb-2 mx-auto"
                        />
                        <p class="mx-auto">{{ item.time }} hours total</p>
                      </div>
                      <div class="training__class">
                        <img
                          src="@/assets/img/icons/book-icon.svg"
                          alt="book-icon"
                          class="mb-2 mx-auto"
                        />
                        <p class="mx-auto">for {{ item.classes }} classes</p>
                      </div>
                    </div>
                    <nuxt-link
                      :to="{
                        path: '/training',
                        query: { trainingId: item.id }
                      }"
                    >
                      <button class="training__btn mt-4">
                        Continue
                        <el-icon class="el-icon-right mt-1 ml-2"></el-icon>
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </div>

              <div class="training__all">
                <h3 class="training__title mb-3">All trainings available</h3>
                <div
                  class="training__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-67"
                >
                  <div
                    class="training__item p-4 text-center"
                    v-for="(item, t) of allTrainings"
                    :key="t"
                  >
                    <div class="training__video relative mb-2">
                      <img :src="item.img" alt="mathrix-training" />
                      <img
                        src="@/assets/img/icons/video-icon.svg"
                        alt="play-video-icon"
                        class="play-video"
                      />
                    </div>
                    <h4 class="training__name my-4 mx-auto">
                      {{ item.name }}
                    </h4>
                    <div class="training__info flex justify-around pb-3">
                      <div class="training__time">
                        <img
                          src="@/assets/img/icons/time-icon.svg"
                          alt="time-icon"
                          class="mx-auto"
                        />
                        <p class="mx-auto">{{ item.time }} hours total</p>
                      </div>
                      <div class="training__class">
                        <img
                          src="@/assets/img/icons/book-icon.svg"
                          alt="book-icon"
                          class="mx-icon"
                        />
                        <p class="mx-auto">for {{ item.classes }} classes</p>
                      </div>
                    </div>
                    <nuxt-link
                      :to="{
                        path: '/training',
                        query: { trainingId: item.id }
                      }"
                    >
                      <button class="training__btn mt-4">
                        More info
                      </button>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <use-app />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import UseApp from "@/components/UseApp";
export default {
  components: {
    UseApp
  },
  data: () => ({
    activeTab: "subjects",
    user: {
      username: "Callie",
      mins: 12,
      activities: 40
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
        totolExam: 4
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
        totolExam: 4
      }
    ],
    // subjects: [
    //   {
    //     img: require("@/assets/img/subjects/maths.svg"),
    //     name: "Mathematics",
    //     link: "/dashboard/maths"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/physical.svg"),
    //     name: "Physical",
    //     link: "/dashboard/physical"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/svt.svg"),
    //     name: "SVT",
    //     link: "/dashboard/svt"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/history.svg"),
    //     name: "History",
    //     link: "/dashboard/history"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/chemistry.svg"),
    //     name: "Chemistry",
    //     link: "/dashboard/chemistry"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/numeric.svg"),
    //     name: "Numeric Science",
    //     link: "/dashboard/numeric"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/technology.svg"),
    //     name: "Technology",
    //     link: "/dashboard/technology"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/philosophy.svg"),
    //     name: "Philosophy",
    //     link: "/dashboard/philosophy"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/geographi.svg"),
    //     name: "Geographi",
    //     link: "/dashboard/geographi"
    //   },
    //   {
    //     img: require("@/assets/img/subjects/language.svg"),
    //     name: "French",
    //     link: "/dashboard/language"
    //   }
    // ],
    complatedTasks: [
      {
        complated: 35,
        max: 56
      },
      {
        complated: 12,
        max: 20
      },
      {
        complated: 0,
        max: 10
      },
      {
        complated: 1,
        max: 4
      }
    ],
    successList: [
      {
        img: require("@/assets/img/home/video-placeholder-1.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-1.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-1.jpg"),
        title: "Are you studying and still can’t do it?"
      }
    ],
    showList: [
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "Are you studying and still can’t do it?"
      }
    ],
    userTrainings: [
      {
        img: require("@/assets/img/videos/video-placeholder-1.jpg"),
        name: "Math exam preparation",
        time: 2,
        classes: 4,
        id: 1
      },
      {
        img: require("@/assets/img/videos/video-placeholder-2.jpg"),
        name: "Increasing and decreasing functions and others",
        time: 2,
        classes: 4,
        id: 2
      }
    ],
    allTrainings: [
      {
        img: require("@/assets/img/videos/video-placeholder-3.jpg"),
        name: "Math exam preparation",
        time: 2,
        classes: 4,
        id: 3
      },
      {
        img: require("@/assets/img/videos/video-placeholder-4.jpg"),
        name: "Math exam preparation",
        time: 2,
        classes: 4,
        id: 4
      },
      {
        img: require("@/assets/img/videos/video-placeholder-5.jpg"),
        name: "Math exam preparation",
        time: 2,
        classes: 4,
        id: 5
      }
    ]
  }),
  computed: {
    subjectsList() {
      return this.$store.state.subjects.subjectsList;
    }
  },
  methods: {
    sidebarActive(e) {
      let sidebarElements = document.getElementsByClassName("sidebar__item");

      sidebarElements.forEach(element => {
        if (element.classList.contains("_active")) {
          element.classList.remove("_active");
        }
      });

      e.target.classList.add("_active");
    },
    ...mapMutations[
      {
        setSubject: "subjects/setSubject"
      }
    ]
  }
};
</script>
