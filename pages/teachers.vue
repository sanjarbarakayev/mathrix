<template>
  <div class="teachers">
    <div class="container mx-auto">
      <div class="teachers__breadcrumb page-breadcumb">
        <el-breadcrumb separator-class="el-icon-d-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>Our teachers</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <h2 class="teachers__title page-title">A project designed by teachers</h2>
      <p class="teachers__subtitle">
        In our team only professional teachers with big experience. These are
        truly professionals
      </p>
    </div>
    <div class="teachers__list">
      <div class="container mx-auto grid grid-cols-4 grid-rows-3 gap-6">
        <div
          class="teachers__item teacher"
          v-for="(teacher, index) in teachers"
          :key="index"
        >
          <img class="teacher__img" :src="teacher.img" alt="mathrix-teacher" />
          <img
            class="teacher__subject-img"
            :src="teacher.subjectImg"
            alt="subjects"
          />
          <div class="teacher__text">
            <h3 class="teacher__name">{{ teacher.name }}</h3>
            <p class="teacher__subject">{{ teacher.subject }}</p>
            <p class="teacher__descr">{{ teacher.descr }}</p>
          </div>
        </div>
      </div>
    </div>
    <use-app />
  </div>
</template>

<script>
import UseApp from "@/components/UseApp";

export default {
  data: () => ({
    teachers: [
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      },
      {
        img: require("@/assets/img/teachers/teacher-maths.jpg"),
        subjectImg: require("@/assets/img/subjects/maths.svg"),
        name: "Ella Hubbard",
        subject: "Math Teacher",
        descr:
          "Management of course allocation, teaching material, curricula, quality assurance of courses."
      }
    ]
  }),
  components: {
    UseApp
  }
};
</script>
