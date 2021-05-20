<template>
  <div class="lessons">
    <div class="container mx-auto">
      <div class="lessons__breadcumb">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >Dashboard</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/dashboard/chapters' }">{{
            subjectName
          }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/dashboard/chapters/topics' }">{{
            chapterName
          }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ topicName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="lessons__wrapper relative flex justify-between">
        <!-- <h3 class="lessons__title absolute">{{ lessonName }}</h3> -->
        <!-- <el-tabs type="border-card" tab-position="left">
          <el-tab-pane label="`<div>Label</div>`">User</el-tab-pane>
          <el-tab-pane label="Config">Config</el-tab-pane>
          <el-tab-pane label="Role">Role</el-tab-pane>
          <el-tab-pane label="Task">Task</el-tab-pane>
        </el-tabs> -->
        <lessons-tabs />
      </div>

      <div class="lessons-footer">
        <div class="container mx-auto flex justify-between">
          <div class="lessons-footer__questions">
            <button class="lessons-footer__btn flex question-btn">
              <img
                class="mr-4"
                src="@/assets/img/icons/question-icon.svg"
                alt="questions-icon"
              />
              <span>Do you have a question?</span>
            </button>
          </div>
          <div class="lessons-footer__actions flex">
            <button class="lessons-footer__btn checked-btn">
              <img
                class="mr-4"
                src="@/assets/img/icons/checked-success-icon.svg"
                alt="reload-icon"
              />
              <span>Checked</span>
            </button>
            <button class="lessons-footer__btn revise-again-btn ml-4">
              <img
                class="mr-4"
                src="@/assets/img/icons/reload-icon.svg"
                alt="reload-icon"
              />
              <span>To revise again</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <use-app />
  </div>
</template>

<script>
import UseApp from "@/components/UseApp.vue";
import LessonsTabs from "@/components/LessonsTabs.vue";
export default {
  components: { UseApp, LessonsTabs },
  data: () => ({
    subjectName: "Mathematics",
    chapterName: "Serial Communication",
    topicName: "What are the imaginary numbers?",
    lessonName: "Increasing and decreasing function",
    activeName: "first"
  })
};
</script>
