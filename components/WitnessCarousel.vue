<template>
  <section class="witness relative">
    <div class="container mx-auto text-center">
      <h2 class="witness__title section-title">They witness!</h2>
      <p class="witness__subtitle section-subtitle">
        What YouTube users say about us
      </p>
      <div class="witness__carousel">
        <div
          v-swiper="swiperOption"
          class="w-5/6 ml-auto relative"
          :loadtheme="false"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide witness__slide"
              :key="banner"
              v-for="banner in 10"
            >
              <div class="witness__carousel-header flex items-center text-left">
                <img
                  class="witness__carousel-avatar rounded-full"
                  src="@/assets/img/home/witness-avatar-1.jpg"
                />
                <p class="witness__carousel-title">Julio Rilc</p>
              </div>
              <p class="witness__carousel-text text-left">
                «My kids and I LOVE Mathrix! The courses are amazing, the
                teachers are interesting and experienced. Too bad we found out
                about Mathrix just now.»
              </p>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="witness__patterns">
      <img
        v-for="witnessPattern in witnessPatterns"
        :key="witnessPattern.id"
        :src="witnessPattern.img"
        alt="pattern"
      />
    </div>
  </section>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  data: () => ({
    swiperOption: {
      slidesPerView: 3,
      draggable: true,
      spaceBetween: 25,
      slidesPerGroup: 3,
      loop: false,
      autoHeight: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
    },
    witnessPatterns: [
      { img: require("@/assets/img/patterns/small-cross-pattern.svg") },
      { img: require("@/assets/img/patterns/small-circle-pattern.svg") },
      { img: require("@/assets/img/patterns/small-cross-pattern.svg") },
      { img: require("@/assets/img/patterns/small-circle-pattern.svg") },
    ],
  }),
  directives: {
    swiper: directive,
  },
};
</script>