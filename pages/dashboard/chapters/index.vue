<template>
  <div class="chapters pt-8">
    <div class="container mx-auto">
      <div class="chapters__breadcumb mb-12">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }"
            >Dashboard</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{ chapterName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="flex chapters__wrapper">
        <aside class="chapters__sidebar sidebar">
          <nav class="sidebar__menu">
            <h3 class="sidebar__title mb-6">Chapter summary</h3>
            <ul class="sidebar__list flex flex-col">
              <li>
                <a
                  :class="{
                    sidebar__item: sidebarItem,
                    _active: summary.active
                  }"
                  v-for="(summary, s) of summaries"
                  :key="s"
                  @click="sidebarActive"
                >
                  {{ summary.title }}
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <div class="chapter__main pl-6">
          <div class="chapter__list relative p-8 mx-8">
            <h2 class="chapter__title mb-4">{{ chapterName }}</h2>
            <img class="chapter__img" :src="chapterImg" alt="mathrix-subject" />
            <div
              class="cahpter__item"
              v-for="(item, i) of chapterItems"
              :key="i"
            >
              <div class="chapter__item-header flex justify-between">
                <h4 class="chapter__item-title relative mb-6">
                  {{ item.title }}
                </h4>
                <div class="chapter__item-progress relative">
                  <span class="chapter__item-percent"
                    >{{ item.percent }}% viewed</span
                  >
                  <el-progress :percentage="item.percent" co></el-progress>
                </div>
              </div>
              <div
                class="grid grid-cols-4 mb-8 gap-4 pb-4 chapter__item-wrapper"
              >
                <div
                  class="chapter__item"
                  v-for="(content, c) of contents"
                  :key="c"
                >
                  {{ content.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <use-app />
  </div>
</template>

<script>
import UseApp from "@/components/UseApp.vue";
export default {
  components: { UseApp },
  data: () => ({
    chapterName: "",
    chapterImg: null,
    sidebarItem: true,
    summaries: [
      { title: "Limit of functions", active: true },
      { title: "Bac oblective", active: false },
      { title: "Serial Communication", active: false },
      { title: "Continuity and Derivation", active: false },
      { title: "Vectors", active: false },
      { title: "Matrices", active: false },
      { title: "Series", active: false },
      { title: "Conic sections", active: false }
    ],
    chapterItems: [
      { title: "Limit of functions", percent: 40 },
      { title: "Bac oblective", percent: 0 },
      { title: "Serial Communication", percent: 100 },
      { title: "Continuity and Derivation", percent: 0 },
      { title: "Vectors", percent: 40 },
      { title: "Matrices", percent: 80 },
      { title: "Series", percent: 40 }
    ],
    contents: [
      { tite: "First step" },
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
  mounted() {
    this.chapterName = this.$route.params.chapterName;
    this.chapterImg = this.$route.params.chapterImg;
  }
};
</script>
