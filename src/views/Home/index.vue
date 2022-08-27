<template>
  <!-- BreadCrumb -->
  <BreadCrumb />
  <!-- btns row start -->
  <div class="row py-3">
    <div class="col-lg-1 col-md-2 text-md-start text-center">
      <h4>التنفيذ</h4>
    </div>
    <div class="col-lg col-md text-md-end text-center">
      <div class="row justify-content-xl-end justify-content-md-evenly">
        <div class="col-md-2 col">
          <Button :darkGreen="true" @click="$router.push('/about')"
            ><slot>إدارة الوكلاء</slot></Button
          >
        </div>
        <div class="col-md-2 col">
          <Button :lightGreen="true"><slot>البيانات الشخصية</slot></Button>
        </div>
        <div class="col-md-2 col">
          <Button :darkYellow="true"><slot>طلب تنفيذ جديد</slot></Button>
        </div>
      </div>
    </div>
  </div>
  <!-- stats start -->
  <div class="row py-3 m-auto justify-content-center g-3">
    <Stats>
      <template #icon><i class="bi bi-journal-medical fs-1"></i></template>
      <template #num>5195</template>
      <template #desc>طلباتي</template>
    </Stats>
    <Stats>
      <template #icon><i class="bi bi-journal-medical fs-1"></i></template>
      <template #num>5195</template>
      <template #desc>طلباتي</template>
    </Stats>
    <Stats>
      <template #icon><i class="bi bi-journal-medical fs-1"></i></template>
      <template #num>5195</template>
      <template #desc>طلباتي</template>
    </Stats>
    <Stats>
      <template #icon><i class="bi bi-journal-medical fs-1"></i></template>
      <template #num>5195</template>
      <template #desc>طلباتي</template>
    </Stats>
    <Stats>
      <template #icon><i class="bi bi-journal-medical fs-1"></i></template>
      <template #num>5195</template>
      <template #desc>طلباتي</template>
      <template #error>حدث خطأ</template>
    </Stats>
    <CustomStat>
      <template #icon><i class="bi bi-journal-medical fs-1 last-icon"></i></template>
      <template #desc>الاحصائيات</template>
    </CustomStat>
  </div>
  <h4 class="border-top pt-3 my-3">قائمة الطلبات</h4>
  <!-- search area -->
  <SearchArea />
  <!-- show data -->
  <ShowData />
</template>

<script setup>
// imports
import BreadCrumb from "@/components/BreadCrumb/index.vue";
import Button from "@/components/Button/index.vue";
import Stats from "@/components/Stats/index.vue";
import SearchArea from "@/components/SearchArea/index.vue";
import ShowData from "@/components/ShowData/index.vue";
import CustomStat from "../../components/customStat/index.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/commonStyles";
i {
  color: $lightGreen;
}
.last-icon {
  color: $darkYellow;
}
</style>
