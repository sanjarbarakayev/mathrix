<template>
  <section class="media relative">
    <h2 class="media__title section-title">
      We may have crossed paths in the media
    </h2>
    <div class="container mx-auto flex justify-between flex-wrap lg:flex-nowrap">
      <div
        class="media__item"
        v-for="mediaItem of mediaItems"
        :key="mediaItem.id"
      >
        <img
          class="media__video-placeholder"
          :src="mediaItem.img"
          alt="mathric-video"
        />
        <p class="media__text">{{ mediaItem.title }}</p>
      </div>
    </div>
    <div class="media__patterns">
      <img
        :src="mediaPattern.img"
        alt="pattern"
        v-for="mediaPattern in mediaPatterns"
        :key="mediaPattern.id"
      />
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    mediaItems: [
      {
        img: require("@/assets/img/home/video-placeholder-1.jpg"),
        title: "We have official professors",
      },
      {
        img: require("@/assets/img/home/video-placeholder-2.jpg"),
        title: "How to better revice?",
      },
      {
        img: require("@/assets/img/home/video-placeholder-3.jpg"),
        title: "Are you studying and still can’t do it?",
      },
    ],
    mediaPatterns: [
      { img: require("@/assets/img/patterns/small-cross-pattern.svg") },
      { img: require("@/assets/img/patterns/small-circle-pattern.svg") },
      { img: require("@/assets/img/patterns/small-circle-pattern.svg") },
      { img: require("@/assets/img/patterns/disc.svg") },
      { img: require("@/assets/img/patterns/disc.svg") },
      { img: require("@/assets/img/patterns/disc.svg") },
      { img: require("@/assets/img/patterns/dotted-circle.svg") },
    ],
  }),
};
</script>

<style scoped>
</style>