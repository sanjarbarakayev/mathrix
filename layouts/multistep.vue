<template>
  <div class="multistep">
    <div class="multistep__header flex justify-between">
      <div></div>
      <h2 class="multistep__title">{{ multistepTitle }}</h2>
      <img src="@/assets/img/icons/close-icon.svg" alt="close-icon" />
    </div>
    <div class="multistep__main flex flex-column">
      <div class="multistep__slider"></div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>
