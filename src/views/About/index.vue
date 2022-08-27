<template>
  <h4 class="text-lg-start text-center">إدارة الوكلاء</h4>
  <!-- tabs -->
  <div class="row py-3 text-lg-start text-center g-3">
    <div class="col-xl-5 col-lg-6 col-12">
      <Button
        @click="handleFirst"
        :class="activeClass"
        :darkGreen="true"
        class="darkGreen col-btn"
        ><slot>وكالات أنت أصدرتها </slot>
      </Button>
    </div>
    <div class="col-xl-5 col-lg-6 col-12">
      <Button
        @click="handleSecond"
        :class="removeActiveClass"
        :darkGreen="true"
        class="col-btn"
        ><slot>وكالات صادرة لك</slot></Button
      >
    </div>
  </div>
  <!-- tab one -->
  <div v-if="showFirst.show">
    <TabOne class="animate__animated animate__zoomInUp" />
  </div>
  <!-- tab two -->
  <div v-if="showSecond.show">
    <TabTwo class="animate__animated animate__zoomInUp" />
  </div>
  <!--  -->
  <TabMutual />
</template>

<script setup>
// imports
import Button from "@/components/Button/index.vue";
import TabOne from "@/components/TabOne/index.vue";
import TabTwo from "@/components/TabTwo/index.vue";
import ShowData from "@/components/ShowData/index.vue";
import TabMutual from "@/components/TabMutual/index.vue";
import Modal from "@/components/Modal/index.vue";
import CusomSearchArea from "@/components/CusomSearchArea/index.vue";
import { computed, reactive } from "vue";
//  handle tab behavior
const showFirst = reactive({
  show: true,
  class: "",
});
const showSecond = reactive({
  show: false,
  class: "activeClass",
});
const handleFirst = () => {
  showFirst.show = true;
  showSecond.show = false;
};
const handleSecond = () => {
  showSecond.show = true;
  showFirst.show = false;
};
// active class
const activeClass = computed(() => {
  return showFirst.show ? "" : "activeClass";
});
const removeActiveClass = computed(() => {
  return showSecond.show ? "" : "activeClass";
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/commonStyles";
.col-btn {
  width: 413px;
  height: 49px;
  border-radius: $borderRadius;
  @media (max-width: 425px) {
    width: 200px;
  }
}
h4 {
  color: #1d4b52;
}
.form-select {
  color: #36c5ba !important;
}
.btn-dangerr {
  border: 1px solid rgb(249, 137, 137);
  color: red !important;
  background: #faf9f4;
}
.activeClass {
  background: #dbdbdb !important;
}
// btn size
@media (max-width: 1024px) {
  .btn-size {
    font-size: 0.5rem;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .btn-size {
    font-size: 0.4rem;
  }
}
@media (max-width: 768px) {
  .btn-size {
    width: 100%;
    margin: 1rem;
  }
}
</style>
