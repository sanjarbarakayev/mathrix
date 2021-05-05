<template>
  <div class="topics">
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

      <h2 class="toooics__title page-title my-6">
        {{ topicName }}
      </h2>

      <div class="topics__tabs relative">
        <img :src="subjectImg" alt="amthrix-subject" />
        <el-tabs v-model="activeTopicsTab" :stretch="true">
          <el-tab-pane label="Course and exercises" name="exercises">
            <div class="exercises">
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
    UseAppsubjectImg: null,
    subjectName: "",
    topicTitle: "",
    contents: [],
    activeTopicsTab: "exercises"
  }),
  mounted() {
    this.subjectName = this.$route.params.subjectName;
    this.subjectImg = this.$route.params.subjectImg;
    this.topicName = this.$route.params.topicName;
    this.contents = this.$route.params.contents;
  },
  component: { UseApp }
};
</script>
