<template>
  <div v-if="store.filtered.length">
    <div
      v-for="{ orderId, orderType, checkType, date, court, person } in store.filtered"
      :key="orderId"
      class="row m-auto gx-3 shadow-sm my-3"
    >
      <div class="col diff-bg py-3">
        <div class="row">
          <div class="col">
            <p>طلب رقم</p>
            <h6>{{ orderId }}</h6>
          </div>
          <div class="col pt-1 fs-4">
            <i class="bi bi-arrow-left float-end"></i>
          </div>
        </div>
      </div>
      <div class="col py-3">
        <p>نوع الطلب</p>
        <h6>{{ orderType }}</h6>
      </div>
      <div class="col py-3">
        <p>نوع السند</p>
        <h6>{{ checkType }}</h6>
      </div>
      <div class="col py-3">
        <p>تاريخ تقديم الطلب</p>
        <h6>{{ date }}</h6>
      </div>
      <div class="col py-3">
        <p>المحكمة</p>
        <h6>{{ court }}</h6>
      </div>
      <div class="col py-3">
        <p>المنفذ ضده</p>
        <h6>{{ person }}</h6>
      </div>
      <div class="col py-3">
        <button class="btn bg-light text-dangerr" @click="handleDelete(orderId)">
          <i class="bi bi-trash3-fill"></i>
          اسقاط الوكالة
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="bg-danger text-white text-center py-2 my-5">no items</h1>
  </div>
</template>
<script setup>
// imports
import { useUsersStore } from "@/stores/users";
// store
const store = useUsersStore();
//  delete
const handleDelete = (orderId) => store.delete(orderId);
</script>

<style scoped lang="scss">
@import "@/assets/styles/commonStyles";
.diff-bg {
  background: #faf9f3;
}
.row {
  color: $mainColor;
  p {
    font-size: 0.6rem;
    font-weight: bold;
    margin-bottom: 0;
  }
  h6 {
    font-size: 0.9rem;
  }
  i {
    font-size: 0.9rem;
  }
  @media (max-width: 1200px) {
    h6 {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 991px) {
    h6,
    p {
      font-size: 0.5rem;
    }
    i {
      display: none;
    }
  }
  @media (max-width: 768px) {
    h6,
    p {
      font-size: 0.3rem;
    }
    i {
      display: none;
    }
  }
}
.text-dangerr {
  color: $redColor !important;
  font-size: 0.7rem;
  font-weight: bold;
  width: 100%;
}
@media (max-width: 768px) {
  .text-dangerr {
    font-size: 0.25rem;
  }
}
</style>
