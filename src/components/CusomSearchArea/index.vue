<template>
    <div class="row search-area border py-2 m-auto align-items-center g-1">
        <div class="col-lg-4 col-5">
            <select class="form-select shadow-none" aria-label="Default select example">
            <option selected>رقم الطلب</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col-lg-4 col">
            <div class="input-group">
            <input
              v-model="searchBox"
              @change="handleSearchUsers(searchBox)"
              class="form-control fs-6 border-0 shadow-none p-0 search-icon"
              aria-describedby="button-addon1"
              aria-label="Example text with button addon"
              placeholder="بحث"
              type="text"
            >
            <button 
            @click="handleSearchUsers(searchBox)" 
            class="btn btn-outline-none border-0 p-0" 
            type="button" 
            id="button-addon1">
            <i class="bi bi-search"></i>
            </button>
            </div>
        </div>
        <div class="col text-end">
            <p class="mb-0"><i class="bi bi-funnel"></i> تصفية النتائج</p>
        </div>
            </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import { useUsersStore } from '@/stores/users';
// store
const store = useUsersStore()
const searchBox = ref()
const handleSearchUsers = (searchBox) => store.searchUsers(searchBox)
</script>

<style lang="scss" scoped>
.search-area{
    font-size: .7rem;
}
.form-select{
    font-size: .6rem;
}
@media(max-width:425px){
    .search-area,.form-select,.search-icon{
        font-size: .4rem;
    }
}</style>