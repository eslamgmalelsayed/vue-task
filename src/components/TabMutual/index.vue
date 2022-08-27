<template>
  <!-- mutual part -->
  <div class="row justify-content-between align-items-center py-3">
    <div class="col-lg-4 col-12 text-lg-start text-center">
      <Button darkGreen="true" class="px-4 btn-size"
        ><i class="bi bi-person-plus-fill"></i>
        <slot> تفعيل الوكالة لطلب جديد</slot></Button
      >
    </div>
    <div class="col-lg-5 col-12 text-end">
      <CusomSearchArea />
    </div>
  </div>
  <!--  -->
  <p class="py-3" style="color: #36c5ba">اسم الوكيل سالم محمود</p>
  <!-- show data -->
  <ShowData />
  <!--  -->
  <div class="row py-3 align-items-center last-row">
    <div class="col-md col-12">
      <div class="d-flex mt-3">
        <input
          class="form-check-input shadow-none"
          type="checkbox"
          id="checkboxNoLabel"
          aria-label="..."
          v-model="checked"
        />
        <p style="color: #36c5ba" class="fw-bold ps-2">تفعيل الوكالة علي كل الطلبات</p>
      </div>
    </div>
    <div class="col-md col-12 text-lg-end text-center">
      <Button darkGreen="true" @click="handleModal" class="px-2 btn-size"
        ><slot>تفعيل علي الطلبات المختارة</slot></Button
      >
    </div>
    <!-- modal -->
    <Modal @hideModal="showModal = false" v-if="showModal" />
  </div>
  <!-- instructions -->
  <div class="text-md-start text-center">
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليماتتعليمات</p>
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليمات تعليمات</p>
  </div>
</template>

<script setup>
// imports
import Button from "@/components/Button/index.vue";
import CusomSearchArea from "@/components/CusomSearchArea/index.vue";
import ShowData from "@/components/ShowData/index.vue";
import Modal from "@/components/Modal/index.vue";
import { ref } from "vue";
// handle modal
const checked = ref(false);
const showModal = ref(false);
const handleModal = () => {
  checked.value ? (showModal.value = true) : alert("من فضلك قم بتفعيل الوكالة");
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/commonStyles";
.btn-size {
  width: fit-content;
  border-radius: $borderRadius;
}
.last-row {
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
}
</style>
