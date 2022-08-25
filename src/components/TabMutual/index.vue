<template>
    <!-- mutual part -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-md-3 col-12">
        <Button class="darkGreen px-5 rounded-2 btn-size btn-last"><i class="bi bi-person-plus-fill"></i> <slot>تفعيل الوكالة لطلب جديد</slot></Button>
        </div>
        <div class="col-lg-5 col text-end">
            <CusomSearchArea />
        </div>
    </div>
    <!--  -->
    <p class="py-3" style="color:#36C5BA">اسم الوكيل سالم محمود</p>
    <!-- show data -->
    <ShowData />
    <!--  -->
    <div class="row py-3 align-items-center last-row">
        <div class="col">
        <div class="d-flex mt-3">
        <input class="form-check-input shadow-none" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
        <p style="color:#36C5BA" class="fw-bold ps-2">تفعيل الوكالة علي الطلبات</p>
        </div>
        </div>
        <div class="col text-end">
        <Button @click="(showModal = true)" class="darkGreen px-5 rounded-2 btn-size"><slot>تفعيل علي الطلبات المختارة</slot></Button>
        </div>
        <!-- modal -->
        <Modal @hideModal="showModal = false" v-if="showModal" />
    </div>
    <!-- instructions -->
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليماتتعليمات</p>
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليمات تعليمات</p>
</template>

<script setup>
// imports
import Button from '@/components/Button/index.vue'
import CusomSearchArea from '@/components/CusomSearchArea/index.vue'
import ShowData from '@/components/ShowData/index.vue'
import Modal from '@/components/Modal/index.vue'
import {ref} from 'vue'
// handle modal
const showModal = ref(false)
</script>

<style scoped lang="scss">
@import '@/assets/styles/btn';
// btn size
@media(max-width:1024px) {
    .btn-size{
        font-size: .5rem;
    }
}
@media(min-width:768px) and (max-width:991px) {
    .btn-size{
        font-size: .4rem;
        padding: 1rem;
    }
}
@media(max-width:768px) {
    .btn-size{
        width: 100%;
        margin: 0;
    }
}
.last-row{
    @media(max-width:768px) {
       font-size: .6rem;
    }
}
</style>