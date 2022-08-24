<template>
    <div class="row border py-2 m-auto align-items-center">
        <div class="col-lg-2 col-4">
            <select class="form-select shadow-none" aria-label="Default select example">
            <option selected>رقم الطلب</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="col-lg-3 col">
            <div class="input-group">
            <input
              v-model="searchBox"
              @change="handleSearchUsers(searchBox)"
              class="form-control border-0 shadow-none"
              aria-describedby="button-addon1"
              aria-label="Example text with button addon"
              placeholder="البحث"
              type="text"
            >
            <button 
            @click="handleSearchUsers(searchBox)" 
            class="btn btn-outline-none border-0" 
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
import { ref, watch, computed} from 'vue';
import { useUsersStore } from '@/stores/users';
// store
const store = useUsersStore()
const searchBox = ref()
const handleSearchUsers = (searchBox) => store.searchUsers(searchBox)
// const handleSearchUsers = (searchBox) => store.searchUsers(searchBox)
// () => somePiniaState
</script>
<style scoped lang="scss">
    @media(max-width:455px){
            *{
                font-size: .6rem;
            }
    }
       @media(max-width:380px){
            *{
                font-size: .4rem;
            }
    }
</style>