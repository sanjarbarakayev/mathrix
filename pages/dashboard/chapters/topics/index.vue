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
                          _active: summary.active
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
                  <div
                    class="exercises__item topic"
                    v-for="(item, i) of topics"
                    :key="i"
                  >
                    <div class="topic__header flex justify-between">
                      <div>
                        <h3 class="topic__title">{{ item.title }}</h3>
                        <p class="topic__subtitle mb-6">
                          Total {{ Math.floor(item.time / 60) }}h
                          {{ item.time % 60 }}min
                        </p>
                      </div>
                      <div class="topic__progress">
                        <span class="topic__percent"
                          >{{ item.completedPercent }}% completed</span
                        >
                        <el-progress
                          :percentage="item.completedPercent"
                        ></el-progress>
                      </div>
                    </div>
                    <div class="topic__main">
                      <nuxt-link to="/dashboard/chapters/topics/lessons">
                        <div
                          class="topic__item p-6 mb-6"
                          v-for="(topic, t) of item.sections"
                          :key="t"
                        >
                          <div
                            class="topic__item-top flex justify-between items-center"
                          >
                            <div class="topic__info flex">
                              <div class="topic__img mr-4">
                                <img
                                  src="@/assets/img/icons/topic-video-icon.svg"
                                  alt="video-img"
                                />
                              </div>
                              <div class="topic__text">
                                <p class="topic__type topic__subtitle">Video</p>
                                <p class="topic__main-title">
                                  {{ topic.title }}
                                </p>
                              </div>
                            </div>
                            <div class="topic__status status">
                              <div v-if="topic.status == 'notStarted'"></div>
                              <div
                                class="status__revise-again flex items-center"
                                v-if="topic.status == 'reviseAgain'"
                              >
                                <img
                                  src="@/assets/img/icons/reload-icon.svg"
                                  alt="reload-icon"
                                />
                                <p class="ml-4">To revise again</p>
                              </div>
                              <div
                                class="status__not-completed flex items-center"
                                v-if="topic.status == 'notCompleted'"
                              >
                                <img
                                  src="@/assets/img/icons/checked-warning-icon.svg"
                                  alt="checked-warning-icon"
                                />
                                <p class="status__not-completed-text ml-4">
                                  Your result: {{ topic.currentResult }}/{{
                                    topic.exercise.totalResult
                                  }}
                                </p>
                              </div>
                              <div
                                class="status__checked flex items-center"
                                v-if="topic.status == 'checked'"
                              >
                                <img
                                  src="@/assets/img/icons/checked-success-icon.svg"
                                  alt="checked-success-icon"
                                />
                                <p class="ml-4">Checked</p>
                              </div>
                            </div>
                          </div>

                          <div
                            class="topic__item-bottom flex justify-between"
                            v-if="topic.exercise"
                          >
                            <div class="topic__info flex">
                              <div class="topic__img mr-4">
                                <img
                                  src="@/assets/img/icons/topic-img-icon.svg"
                                  alt="image-icon"
                                />
                              </div>
                              <div class="topic__text">
                                <p class="topic__type topic__subtitle">
                                  Exercise
                                </p>
                                <p class="topic__main-title">
                                  {{ topic.exercise.title }}
                                </p>
                              </div>
                            </div>
                            <div class="topic__status status">
                              <div
                                v-if="topic.exercise.status == 'notStarted'"
                              ></div>
                              <div
                                class="status__revise-again flex items-center"
                                v-if="topic.exercise.status == 'reviseAgain'"
                              >
                                <img
                                  src="@/assets/img/icons/reload-icon.svg"
                                  alt="reload-icon"
                                />
                                <p class="ml-4">To revise again</p>
                              </div>
                              <div
                                class="status__not-completed flex items-center"
                                v-if="topic.exercise.status == 'notCompleted'"
                              >
                                <img
                                  src="@/assets/img/icons/checked-warning-icon.svg"
                                  alt="checked-warning-icon"
                                />
                                <p class="status__not-completed-text ml-4">
                                  Your result:
                                  {{ topic.exercise.currentResult }}/{{
                                    topic.exercise.totalResult
                                  }}
                                </p>
                              </div>
                              <div
                                class="status__checked flex items-center"
                                v-if="topic.exercise.status == 'checked'"
                              >
                                <img
                                  src="@/assets/img/icons/checked-success-icon.svg"
                                  alt="checked-success-icon"
                                />
                                <p class="ml-4">Checked</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Summary and flashcards" name="summary">
            <div class="sumflash mt-6">
              <h3 class="sumflash__title mb-6">Summary</h3>
              <div class="sumflash__items">
                <div
                  class="sumflash__item flex justify-between items-center p-6 mb-6"
                  v-for="(summary, s) of summaries"
                  :key="s"
                >
                  <div class="flex items-center relative">
                    <img
                      v-if="premiumUser && summary.status != 'checked'"
                      class="sumflash__icon"
                      src="@/assets/img/icons/premium-star-icon.svg"
                      alt="premium-star-icon"
                    />
                    <img
                      class="sumflash__img mr-4"
                      src="@/assets/img/icons/topic-course-icon.svg"
                      alt="topic-course-icon"
                    />
                    <div class="sumflash__text">
                      <small class="sumflash__subtitle"
                        >Course full version</small
                      >
                      <h4 class="sumflash__main-title">{{ summary.title }}</h4>
                    </div>
                  </div>
                  <div class="sumflash__status status">
                    <div
                      v-if="!premiumUser"
                      class="flex items-center status__premium"
                    >
                      <img
                        class="mr-2"
                        src="@/assets/img/icons/premium-star-icon.svg"
                        alt="premium-star-icon"
                      />
                      <span class="status__text">Premium</span>
                    </div>
                    <div
                      v-if="summary.status == 'notStarted' && premiumUser"
                    ></div>
                    <div
                      class="status__revise-again flex items-center"
                      v-if="summary.status == 'reviseAgain' && premiumUser"
                    >
                      <img
                        src="@/assets/img/icons/reload-icon.svg"
                        alt="reload-icon"
                      />
                      <p class="ml-4">To revise again</p>
                    </div>
                    <div
                      class="status__not-completed flex items-center"
                      v-if="summary.status == 'notCompleted' && premiumUser"
                    >
                      <img
                        src="@/assets/img/icons/checked-warning-icon.svg"
                        alt="checked-warning-icon"
                      />
                      <p class="status__not-completed-text ml-4">
                        Your result:
                        {{ summary.currentResult }}/{{ summary.totalResult }}
                      </p>
                    </div>
                    <div
                      class="status__checked flex items-center"
                      v-if="summary.status == 'checked' && premiumUser"
                    >
                      <img
                        src="@/assets/img/icons/checked-success-icon.svg"
                        alt="checked-success-icon"
                      />
                      <p class="ml-4">Checked</p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 class="sumflash__title mb-6">Flashcards</h3>
              <div
                class="sumflash__item flex justify-between items-center p-6 mb-6"
                v-for="(flashCard, f) of flashCards"
                :key="f"
              >
                <div class="flex items-center relative">
                  <img
                    v-if="premiumUser"
                    class="sumflash__icon"
                    src="@/assets/img/icons/premium-star-icon.svg"
                    alt="premium-star-icon"
                  />
                  <img
                    class="sumflash__img mr-4"
                    src="@/assets/img/icons/topic-flashcard-icon.svg"
                    alt="topic-flashcard-icon"
                  />
                  <div class="sumflash__text">
                    <small class="sumflash__subtitle"
                      >{{ flashCard.num }} Flashcards</small
                    >
                    <h4 class="sunflash__main-title">{{ flashCard.title }}</h4>
                  </div>
                </div>
                <div class="sumflash__status status">
                  <div class="flex items-center status__premium">
                    <img
                      class="mr-4"
                      src="@/assets/img/icons/premium-star-icon.svg"
                      alt="premium-star-icon"
                    />
                    <span class="status__text">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Exams" name="exams">
            <div class="exam flex justify-between mt-16">
              <div class="exam__sidebar">
                <aside class="exercises__sidebar sidebar">
                  <nav class="sidebar__menu">
                    <h3 class="sidebar__title mb-6">Exam topics</h3>
                    <ul class="sidebar__list flex flex-col">
                      <li>
                        <a
                          :class="{
                            sidebar__item: sidebarItem,
                            _active: examsTopic.active
                          }"
                          v-for="(examsTopic, s) of examTopics"
                          :key="s"
                          @click="sidebarActive"
                        >
                          {{ examsTopic.title }}
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>
              </div>
              <div class="exam__main">
                <div class="exam__items">
                  <div
                    class="exam__item p-6 mb-6 flex items-center justify-between"
                    v-for="(examTopic, e) of examTopics"
                    :key="e"
                  >
                    <div class="exam__info flex items-center">
                      <img
                        class="exam__img mr-4"
                        src="@/assets/img/icons/topic-exam-icon.svg"
                        alt="exam-icon"
                      />
                      <div class="exam__text">
                        <small class="exam__suptitle">Exam</small>
                        <h4 class="exam__title">{{ examTopic.title }}</h4>
                      </div>
                    </div>
                    <div class="status">
                      <div v-if="examTopic.status == 'notStarted'"></div>
                      <div
                        class="status__revise-again flex items-center"
                        v-if="examTopic.status == 'reviseAgain'"
                      >
                        <img
                          src="@/assets/img/icons/reload-icon.svg"
                          alt="reload-icon"
                        />
                        <p class="ml-4">To revise again</p>
                      </div>
                      <div
                        class="status__not-completed flex items-center"
                        v-if="examTopic.status == 'notCompleted'"
                      >
                        <img
                          src="@/assets/img/icons/checked-warning-icon.svg"
                          alt="checked-warning-icon"
                        />
                        <p class="status__not-completed-text ml-4">
                          Your result:
                          {{ examTopic.currentResult }}/{{
                            examTopic.totalResult
                          }}
                        </p>
                      </div>
                      <div
                        class="status__checked flex items-center"
                        v-if="examTopic.status == 'checked'"
                      >
                        <img
                          src="@/assets/img/icons/checked-success-icon.svg"
                          alt="checked-success-icon"
                        />
                        <p class="ml-4">Checked</p>
                      </div>
                    </div>
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
import UseApp from "@/components/UseApp.vue";
export default {
  data: () => ({
    premiumUser: true,
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
            status: "reviseAgain"
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted",
            exercise: {
              title: "The complex plane",
              status: "notCompleted",
              currentResult: 4,
              totalResult: 8
            }
          }
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
            status: "reviseAgain"
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted"
          }
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
            status: "notStarted"
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "checked",
            exercise: {
              title: "The complex plane",
              status: "notStarted"
            }
          }
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
            status: "notStarted"
          },
          {
            type: "video",
            title: "What are the imaginary numbers?",
            status: "notStarted"
          }
        ]
      }
    ],
    summaries: [
      { title: "Serial Communication", status: "reviseAgain" },
      { title: "What are the imaginary numbers?", status: "checked" }
    ],
    flashCards: [
      {
        num: 12,
        title: "Serial Communication"
      },
      {
        num: 19,
        title: "What are the imaginary numbers?"
      },
      {
        num: 4,
        title: "Serial Communication"
      }
    ],
    examTopics: [
      {
        title: "Complex numbers",
        status: "notCompleted",
        currentResult: 4,
        totalResult: 8,
        active: true
      },
      {
        title: "PolynomialsComposite functions",
        status: "notStarted"
      },
      {
        title: "Composite functions",
        status: "notCompleted",
        currentResult: 4,
        totalResult: 8
      },
      {
        title: "Trigonometry",
        status: "notStarted"
      },
      {
        title: "Vectors",
        status: "notStarted"
      },
      {
        title: "Conic sections",
        status: "notStarted"
      }
    ]
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
  mounted() {},
  component: { UseApp }
};
</script>
