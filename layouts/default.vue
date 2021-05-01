<template>
  <div class="default-layout">
    <Header />
    <div class="main-wrapper">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer },
};
</script>

<style>
.main-wrapper {
  padding-top: 74px;
}
</style>
