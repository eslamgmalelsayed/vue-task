<template>
  <div class="row border py-2 m-auto align-items-center my-3">
    <div class="col-lg-2 col-4">
      <select class="form-select shadow-none" aria-label="Default select example">
        <option selected>رقم الطلب</option>
        <option v-for="{ orderId } in store.users" :key="orderId" :value="orderId">
          {{ orderId }}
        </option>
      </select>
    </div>
    <div class="col-lg-3 col">
      <div class="input-group">
        <input
          v-model="searchBox"
          @keyup="handleSearchUsers(searchBox)"
          class="form-control border-0 shadow-none"
          aria-describedby="button-addon1"
          aria-label="Example text with button addon"
          placeholder="البحث"
          type="text"
        />
        <button class="btn btn-outline-none border-0" type="button" id="button-addon1">
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
import { ref } from "vue";
import { useUsersStore } from "@/stores/users";
// store
const store = useUsersStore();
const searchBox = ref();
const handleSearchUsers = (searchBox) => store.searchUsers(searchBox);
</script>
<style scoped lang="scss">
@media (max-width: 455px) {
  * {
    font-size: 0.6rem;
  }
}
@media (max-width: 380px) {
  * {
    font-size: 0.4rem;
  }
}
</style>
