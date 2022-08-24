<template>
    <!-- BreadCrumb -->
    <BreadCrumb />
    <!-- btns row start -->
    <div class="row py-3">
        <div class="col-1">
            <h4>التنفيذ</h4>
        </div>
        <div class="col text-end">
            <Button class="lightGreen"><slot>إدارة الوكلاء</slot></Button>
            <Button class="darkGreen"><slot>البيانات الشخصية</slot></Button>
            <Button class="darkYellow"><slot>طلب تنفيذ جديد</slot></Button>
        </div>
    </div>
    <!-- stats start -->
        <Stats />
    <h4 class="border-top pt-3 my-3">قائمة الطلبات</h4>  
    <!-- search area -->
    <SearchArea />
    <!-- show data -->
    <ShowData />

</template>

<script setup>
// imports
import BreadCrumb from '@/components/BreadCrumb/index.vue'
import Button from '@/components/Button/index.vue'
import Stats from '@/components/Stats/index.vue'
import SearchArea from '@/components/SearchArea/index.vue'
import ShowData from '@/components/ShowData/index.vue'

</script>

<style lang="scss" scoped>

</style>