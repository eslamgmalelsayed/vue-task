<template>
  <div class="col-xl col-lg-3 col-md-4 col-6 animate__animated animate__zoomInUp">
    <div class="custom-card py-3 text-center">
      <i><slot name="icon"></slot></i>
      <p class="mb-0"><slot name="desc"></slot></p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../../assets/styles/commonStyles";
.custom-card {
  background: #faf9f3;
  min-height: 125px;
  p {
    color: $mainColor;
  }
  span {
    color: $redColor;
    font-size: 10px;
  }
}
</style>
