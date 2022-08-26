<template>
    <h4>إدارة الوكلاء</h4>
    <!-- tabs -->
    <div class="row py-3 g-0">
        <div class="col-lg-4 col-md-5 col">
             <Button @click="handleFirst" :class="activeClass" class="darkGreen px-5 rounded-2"><slot>وكالات أنت أصدرتها </slot></Button>
        </div>
        <div class="col">
             <Button @click="handleSecond" :class="removeActiveClass" class="darkGreen px-5 rounded-2"><slot>وكالات صادرة لك</slot></Button>
        </div>
    </div>
    <!-- tab one -->
    <div v-if="showFirst.show">
    <TabOne />
    </div>
    <!-- tab two -->
    <div v-if="showSecond.show">
   <TabTwo />
    </div>
    <!--  -->
    <TabMutual />
    <!-- <Modal @hideModal="showModal = false" v-if="showModal" /> -->
</template>

<script setup>
// imports
import Button from '@/components/Button/index.vue'
import TabOne from '@/components/TabOne/index.vue'
import TabTwo from '@/components/TabTwo/index.vue'
import ShowData from '@/components/ShowData/index.vue'
import TabMutual from '@/components/TabMutual/index.vue'
import Modal from '@/components/Modal/index.vue'
import CusomSearchArea from '@/components/CusomSearchArea/index.vue'
import {computed, reactive} from 'vue'
//  handle tab behavior
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
// active class
const activeClass = computed(() => {
    return showFirst.show ? '' : 'activeClass'
})
const removeActiveClass = computed(() => {
    return showSecond.show ? '' : 'activeClass'
})
</script>

<style lang="scss" scoped>
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
// btn size
@media(max-width:1024px) {
    .btn-size{
        font-size: .5rem;
    }
}
@media(min-width:768px) and (max-width:991px) {
    .btn-size{
        font-size: .4rem;
    }
}
@media(max-width:768px) {
    .btn-size{
        width: 100%;
        margin: 1rem;
    }
}
</style>