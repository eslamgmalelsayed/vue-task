<template>

    <div v-for=" {orderId, orderType, checkType, date, court, person} in db" :key="orderId" class="row m-auto py-3 shadow-sm my-3">
        <div class="col">
            <div class="row">
                <div class="col">
                    <p>طلب رقم</p>
                    <h6>{{orderId}}</h6>
                </div>
                <div class="col pt-1 fs-4">
                    <i class="bi bi-arrow-left"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <p>نوع الطلب</p>
            <h6>{{orderType}}</h6>
        </div>
        <div class="col">
            <p>نوع السند</p>
            <h6>{{checkType}}</h6>
        </div>
        <div class="col">
            <p>تاريخ تقديم الطلب</p>
            <h6>{{date}}</h6>
        </div>
        <div class="col">
            <p>المحكمة </p>
            <h6>{{court}}</h6>
        </div>
        <div class="col">
            <p>المنفذ ضده</p>
            <h6>{{person}}</h6>
        </div>

    </div>

</template>
<script setup>
import db from '@/db.json'

</script>

<style scoped lang="scss">
    @import '@/assets/styles/commonStyles';
    .row{
        color: $mainColor;
         p{
            font-size: .6rem;
            font-weight: bold;
            margin-bottom: 0;
        }
        @media(max-width:991px){
            h6,p{
                font-size: .5rem;
            }
            i{
                display: none;
            }
        }
        @media(max-width:768px){
            h6,p{
                font-size: .3rem;
            }
            i{
                display: none;
            }
        }
    }
</style>