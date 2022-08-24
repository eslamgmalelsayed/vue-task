<template>
    <h4>إدارة الوكلاء</h4>
    <!--  -->
    <div class="row py-3">
        <div class="col-3">
             <Button @click="handleFirst" class="darkGreen px-5 rounded-2"><slot>وكالات أنت أصدرتها </slot></Button>
        </div>
        <div class="col">
             <Button @click="handleSecond" class="darkGreen px-5 rounded-2"><slot>وكالات صادرة لك</slot></Button>
        </div>
    </div>
<div v-if="showFirst.show" class="yours">
    <!--  -->
    <h4>قائمة الوكلاء الحاليين</h4>
<!--  -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-3">
        <select class="form-select shadow-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>
        <div class="col-5 text-end">
            <SearchArea class="text-danger" />
        </div>
    </div>
    <!--  -->
    <ShowData />
    <!--  -->
    <Button class="btn-dangerr rounded-2 my-3"><slot> اسفاط الوكالة عن الطلبات المحددة</slot></Button>
    <!--  -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-3">
        <Button class="darkGreen px-5 rounded-2"><slot>تفعيل الوكالة لطلب جديد</slot></Button>
        </div>
        <div class="col-5 text-end">
            <SearchArea class="text-danger" />
        </div>
    </div>
    <!--  -->
    <p class="py-3" style="color:#36C5BA">اسم الوكيل سالم محمود</p>
    <!--  -->
    <ShowData />
    <!--  -->
    <div class="row py-3">
        <div class="col">
        <p>تفعيل الوكالة علي الطلبات</p>
        </div>
        <div class="col text-end">
        <Button class="darkGreen px-5 rounded-2"><slot>تفعيل علي الطلبات المختارة</slot></Button>
        </div>

    </div>
    <!--  -->
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليماتتعليمات</p>
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليمات تعليمات</p>
</div>
<div v-if="showSecond.show" class="for-you">
    <!--  -->
    <h4>قائمة الموكلين الحاليين</h4>
<!--  -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-3">
        <select class="form-select shadow-none" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
        </div>
        <div class="col-5 text-end">
            <SearchArea class="text-danger" />
        </div>
    </div>
    <!--  -->
    <ShowData />
    <!--  -->
    <Button class="btn-dangerr rounded-2 my-3"><slot> اسفاط الوكالة عن الطلبات المحددة</slot></Button>
    <!--  -->
    <div class="row justify-content-between align-items-center py-3">
        <div class="col-3">
        <Button class="darkGreen px-5 rounded-2"><slot>تفعيل الوكالة لطلب جديد</slot></Button>
        </div>
        <div class="col-5 text-end">
            <SearchArea class="text-danger" />
        </div>
    </div>
    <!--  -->
    <p class="py-3" style="color:#36C5BA">اسم الوكيل سالم محمود</p>
    <!--  -->
    <ShowData />
    <!--  -->
    <div class="row py-3">
        <div class="col">
        <p>تفعيل الوكالة علي الطلبات</p>
        </div>
        <div class="col text-end">
        <Button class="darkGreen px-5 rounded-2"><slot>تفعيل علي الطلبات المختارة</slot></Button>
        </div>

    </div>
    <!--  -->
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليماتتعليمات</p>
    <p class="text-danger fw-bold">* تعليمات تعليمات تعليمات تعليمات تعليمات</p>
</div>

    
</template>

<script setup>
// imports
import Button from '@/components/Button/index.vue'
import SearchArea from '@/components/SearchArea/index.vue'
import ShowData from '@/components/ShowData/index.vue'
import {ref, computed, reactive} from 'vue'
// const show = ref(true)
const showFirst = reactive({
    show: true,
    class: ''
})
const showSecond = reactive({
    show: false,
    class: 'activeClass'
})
const handleFirst = () => {
    showFirst.show = true
    showSecond.show = false
}
const handleSecond = () => {
    showSecond.show = true
    showFirst.show = false
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/btn';
h4{
    color: #1D4B52;
}
.form-select{
    color:#36C5BA !important;
}
.btn-dangerr{
    border: 1px solid rgb(249, 137, 137);
    color: red !important;
    background: #FAF9F4;
}
.activeClass{
    background: #DBDBDB !important;
}
</style>