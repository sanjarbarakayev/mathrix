<template>
  <section class="app relative">
      <div class="container mx-auto text-center relative z-10">
        <h2 class="app__title section-title">Use the app to review anywhere</h2>
        <div class="flex justify-center">
          <a class="app__btn" href="#">
            <img
              src="@/assets/img/icons/play-market-icon.svg"
              alt="play-market"
              class="app__bnt"
            />
          </a>
          <a class="app__btn" href="#">
            <img
              src="@/assets/img/icons/app-store-icon.svg"
              alt="app-store"
              class="app__bnt"
            />
          </a>
        </div>
      </div>
      <div class="app__patterns">
        <img
          :src="appPattern.img"
          alt="pattern"
          v-for="appPattern of appPatterns"
          :key="appPattern"
        />
      </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      appPatterns: [
        { img: require("@/assets/img/patterns/disc.svg") },
        { img: require("@/assets/img/patterns/disc.svg") },
        { img: require("@/assets/img/patterns/disc.svg") },
      ],
    };
  },
}
</script>