<template>
    <div class="yours">
    <!--  -->
    <h4 style="color:#36C5BA" class="py-4">قائمة الوكلاء الحاليين</h4>
    <!-- select area -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-3">
        <select class="form-select shadow-none py-3" aria-label="Default select example">
        <option selected>سالم</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>
        <div class="col-lg-5 col text-end justify-self-between">
            <CusomSearchArea />
        </div>
    </div>
    <!-- show data and  delete -->
   <CustomShowData />
    <!--  -->
    <Button @click="store.clear()" class="btn-dangerr rounded-2 my-3"><slot> اسفاط الوكالة عن الطلبات المحددة</slot></Button>
    
</div>
</template>

<script setup>
// imports
import Button from '@/components/Button/index.vue'
import CusomSearchArea from '@/components/CusomSearchArea/index.vue'
import ShowData from '@/components/ShowData/index.vue'
import CustomShowData from '@/components/customShowData/index.vue'
import { useUsersStore } from '@/stores/users';
// store
 const store = useUsersStore()
</script>

<style scoped lang="scss">
.btn-dangerr{
    border: 1px solid rgb(249, 137, 137);
    color: red !important;
    background: #FAF9F4;
}
</style>