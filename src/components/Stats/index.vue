<template>
  <div class="col-xl col-lg-3 col-md-4 col-6 animate__animated animate__zoomInUp">
    <div class="custom-card py-3 ps-xl-3">
      <div class="row align-items-xl-start">
        <div class="col-xl-4 col-5 text-end">
          <slot name="icon"></slot>
        </div>
        <div class="col ps-2 text-lg-start">
          <h4 class="mb-0"><slot name="num"></slot></h4>
          <p class="mb-0"><slot name="desc"></slot></p>
          <span class="fw-bold"><slot name="error"></slot></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/styles/commonStyles";
.custom-card {
  border: 1px solid $lightGreen;
  background: #f7fbfb;
  min-height: 125px;
  i {
    color: $lightGreen;
  }
  p {
    color: $mainColor;
  }
  span {
    color: $redColor;
    font-size: 10px;
  }
}
</style>
