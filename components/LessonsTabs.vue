<template>
  <div class="lessons-tabs flex">
    <aside class="lessons-tabs__sidebar">
      <nav class="lessons-tabs__menu tabs-menu">
        <h3 class="tabs-menu__title">{{ lessonTopics.title }}</h3>
        <ul class="tabs-menu__list">
          <li
            :class="{
              'tabs-menu__item flex justify-between items-center': defaultClasses,
              'active-tab': topic.active
            }"
            v-for="(topic, t) of lessonTopics.topics"
            :key="t"
            @click="changeLesson($event, topic.id)"
          >
            <div class="tabs-menu__info flex items-center">
              <div class="tabs-menu__img mr-4 relative">
                <img
                  v-if="topic.isPremium == true"
                  class="absolute premium-icon"
                  src="@/assets/img/icons/premium-star-icon.svg"
                  alt="premium-star"
                />
                <img
                  v-if="topic.type == 'video'"
                  src="@/assets/img/icons/topic-video-icon.svg"
                  alt="topic-video-icon"
                />
                <img
                  v-if="topic.type == 'exercise'"
                  src="@/assets/img/icons/topic-img-icon.svg"
                  alt="topic-img-icon"
                />
              </div>
              <div class="tabs-menu__info-text">
                <small v-if="topic.type == 'video'">Video</small>
                <small v-if="topic.type == 'exercise'">Exercise</small>
                <p class="tabs-menu__info-title">{{ topic.title }}</p>
              </div>
            </div>
            <div class="tabs-menu__status">
              <span v-if="topic.status == 'notStarted'"></span>
              <img
                v-if="topic.status == 'checked'"
                src="@/assets/img/icons/checked-success-icon.svg"
                alt="checked-succes-icon"
              />
              <img
                v-if="topic.status == 'reviseAgain'"
                src="@/assets/img/icons/reload-icon.svg"
                alt="reload-icon"
              />
            </div>
          </li>
        </ul>
      </nav>
      <div
        class="lessons-tabs__menu next-topic"
        v-if="nextTopicId == totalLessonTopics"
      >
        <h5 class="lessons-tabs__menu-title">Next topic</h5>
        <nav class="lessons-tabs__menu tabs-menu">
          <h3 class="tabs-menu__title">{{ nextLessonTopics.title }}</h3>
          <ul class="tabs-menu__list">
            <li
              class="tabs-menu__item flex justify-between items-center"
              v-for="(topic, topicIndex) of nextLessonTopics.topics"
              :key="topicIndex"
            >
              <div class="tabs-menu__info flex items-center">
                <div class="tabs-menu__img mr-4 relative">
                  <img
                    v-if="topic.isPremium == true"
                    class="absolute"
                    src="@/assets/img/icons/premium-star-icon.svg"
                    alt="premium-star-icon"
                  />
                  <img
                    v-if="topic.type == 'video'"
                    src="@/assets/img/icons/topic-video-icon.svg"
                    alt="topic-video-icon"
                  />
                  <img
                    v-if="topic.type == 'exercise'"
                    src="@/assets/img/icons/topic-img-icon.svg"
                    alt="topic-img-icon"
                  />
                </div>
                <span class="tabs-menu__info-title">{{ topic.title }}</span>
              </div>
              <div class="tabs-menu__status">
                <span v-if="topic.status == 'notStarted'"></span>
                <img
                  v-if="topic.status == 'checked'"
                  src="@/assets/img/icons/checked-success-icon.svg"
                  alt="checked-succes-icon"
                />
                <img
                  v-if="topic.status == 'reviseAgain'"
                  src="@/assets/img/icons/reload-icon.svg"
                  alt="reload-icon"
                />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <main class="lessons-tabs__main lesson">
      <div class="lesson__content p-8 mb-8">
        <div class="lesson__wrapper">
          <div class="lesson__header flex justify-between mb-6">
            <h2 class="lesson__title">{{ lessonContent.title }}</h2>
            <div class="lesson__share flex items-center">
              <span>Share: </span>
              <img
                class="ml-4"
                src="@/assets/img/icons/orign-facebook-icon.svg"
                alt="facebook-icon"
              />
              <img
                class="ml-4"
                src="@/assets/img/icons/orign-twitter-icon.svg"
                alt="twitter-icon"
              />
            </div>
          </div>
          <div class="lesson__main">
            <div class="lesson__video lesson-video" v-if="lessonContent.poster">
              <div class="lesson-video__wrapper relative">
                <img
                  class="lesson-video__poster"
                  :src="lessonContent.poster"
                  alt="mathrix-video-poster"
                />
                <img
                  class="lesson-video__play-btn absolute"
                  src="@/assets/img/icons/video-icon.svg"
                  alt="vieo-play"
                />
              </div>
            </div>
            <div class="lesson__summary mb-4 pb-4">
              <h4 class="lesson__summary-title mb-4">Summary</h4>
              <ul class="lesson__summary-list grid grid-cols-2 gap-2">
                <li
                  class="lesson__summary-item relative"
                  v-for="(summary, s) of lessonContent.summaries"
                  :key="s"
                >
                  {{ 10 > Math.floor(summary.delay / 60) ? "0" : ""
                  }}{{ Math.floor(summary.delay / 60) }}:{{
                    summary.delay % 60
                  }}
                  — {{ summary.title }};
                </li>
              </ul>
            </div>
            <div
              class="lesson__section"
              v-for="(section, s) of lessonContent.sections"
              :key="s"
            >
              <h4 class="lesson__section-title mb-4">
                <span class="mr-4">{{ section.id }}.</span>{{ section.title }}
              </h4>
              <p class="lesson__section-text" v-html="section.text"></p>
              <div
                class="lesson__section-img section-img mb-4"
                v-for="(img, i) of section.images"
                :key="'A' + i"
              >
                <img
                  class="section-img__img mx-auto mb-2"
                  :src="img.img"
                  :alt="img.title"
                />
                <p class="section-img__title text-center">{{ img.title }}</p>
              </div>
              <div
                class="lesson__theorem theorem mb-6"
                v-for="(theorem, th) of section.theorems"
                :key="th"
              >
                <div class="theorem__wrapper" v-if="theorem">
                  <h5 class="theorem__title sectoin-highlight mb-4">
                    Theorem
                  </h5>
                  <p class="theorem__text lesson__quote">{{ theorem }}</p>
                </div>
              </div>
              <div
                class="lesson__definition definition mb-4"
                v-if="section.definitionList"
              >
                <div class="definition__wrapper">
                  <h5 class="definition__title sectoin-highlight mb-4">
                    Definition
                  </h5>
                  <div class="lesson__quote">
                    <p class="definition__subtitle mb-4">
                      {{ section.definitionTitle }}
                    </p>
                    <ul class="definition__list">
                      <li
                        class="definition__item relative"
                        v-for="(definition, d) of section.definitionList"
                        :key="d"
                        v-html="definition"
                      ></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="lesson__tip relative my-14"
                v-for="(tip, tipId) of section.tips"
                :key="'B' + tipId"
              >
                <img
                  class="absolute"
                  src="@/assets/img/logo/thinking-logo.svg"
                  alt="thinking-mathrix"
                />
                <p v-html="tip"></p>
              </div>
              <div
                class="lesson__example example mb-8"
                v-for="(example, e) of section.examples"
                :key="e"
              >
                <div class="example__wrapper" v-if="example">
                  <h5 class="example__title sectoin-highlight mb-4">
                    Example
                  </h5>
                  <p class="lesson__quote example__text" v-html="example"></p>
                </div>
              </div>
            </div>
            <div class="lesson__conclusion conclusion mb-4">
              <ul class="conclusion__list">
                <li
                  class="conclusion__item"
                  v-for="(conclusion, c) of lessonContent.conclusions"
                  :key="c"
                >
                  <span class="mr-2">{{ conclusion.id }}.</span>
                  {{ conclusion.title }}
                </li>
              </ul>
            </div>
            <div class="lesson__footer flex justify-between">
              <span class="lesson__footer-report">Report a problem</span>
              <div class="lesson__share flex">
                <span>Share: </span>
                <img
                  class="ml-4"
                  src="@/assets/img/icons/orign-facebook-icon.svg"
                  alt="facebook-icon"
                />
                <img
                  class="ml-4"
                  src="@/assets/img/icons/orign-twitter-icon.svg"
                  alt="twitter-icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div class="lesson__action flex justify-between">
          <div>
            <button
              class="lesson__action-btn prev-lesson-btn"
              v-if="currentTopicId > 1"
              @click="prevLesson"
            >
              <el-icon class="el-icon-back"></el-icon>
              Previous lesson
            </button>
          </div>
          <div>
            <button
              class="lesson__action-btn next-lesson-btn"
              v-if="currentTopicId >= 1 && currentTopicId < totalLessonTopics"
              @click="nextLesson"
            >
              Next lesson
              <el-icon class="el-icon-right"></el-icon>
            </button>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    currentTopicId: 1,
    nextTopicId: 2,
    currentContentId: 1,
    lessonTopics: [],
    totalLessonTopics: 3,
    nextLessonTopics: [],
    lessonContent: [],
    defaultClasses: true
  }),
  computed: {
    ...mapGetters("lessons", [
      "getCurrentLesson",
      "getCurrentLessons",
      "getCurrentContent"
    ])
  },
  methods: {
    changeLesson(event, topicId) {
      let currentTarget = event.currentTarget,
        tabItems = document.getElementsByClassName("tabs-menu__item");

      this.currentTopicId = topicId;

      this.lessonContent = this.getCurrentContent(this.currentTopicId);

      tabItems.forEach(element => {
        if (element.classList.contains("active-tab")) {
          element.classList.remove("active-tab");
        }
      });
      currentTarget.classList.add("active-tab");
    },
    prevLesson() {
      --this.currentTopicId;
      --this.nextTopicId;

      this.lessonTopics = this.getCurrentLesson(this.currentTopicId);
      this.nextLessonTopics = this.getCurrentLesson(this.nextTopicId);
    },
    nextLesson() {
      ++this.currentTopicId;
      ++this.nextTopicId;

      this.lessonTopics = this.getCurrentLesson(this.currentTopicId);
      this.nextLessonTopics = this.getCurrentLesson(this.nextTopicId);
    }
  },
  mounted() {
    this.lessonTopics = this.getCurrentLesson(this.currentTopicId);
    this.nextLessonTopics = this.getCurrentLesson(this.nextTopicId);
    this.lessonContent = this.getCurrentContent(this.currentContentId);
    this.totalLessonTopics = this.getCurrentLessons.length;
  }
};
</script>
