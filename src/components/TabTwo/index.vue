<template>
  <div class="for-you">
    <!--  -->
    <h4 style="color: #158e8d" class="text-lg-start text-center py-4">
      قائمة الموكلين الحاليين
    </h4>
    <!-- select area -->
    <div class="row justify-content-between align-items-center py-3">
      <div class="col-md-3 col-12">
        <select class="form-select shadow-none py-2" aria-label="Default select example">
          <option selected>سالم</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-lg-5 col-md col-12 text-end justify-self-between">
        <CusomSearchArea />
      </div>
    </div>
    <!-- show data and  delete -->
    <CustomShowData />
  </div>
</template>

<script setup>
// imports
import Button from "@/components/Button/index.vue";
import CusomSearchArea from "@/components/CusomSearchArea/index.vue";
import ShowData from "@/components/ShowData/index.vue";
import CustomShowData from "@/components/customShowData/index.vue";
</script>
