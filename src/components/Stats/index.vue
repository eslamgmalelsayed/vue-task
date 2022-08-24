<template>
    <div class="row py-3 m-auto g-5">
        <div v-for="n in 5" class="col-lg-2 col-md-6">
            <div class="row item-row align-items-center">
                <div class="col-5 text-end">
                    <i class="bi bi-journal-medical fs-1"></i>
                </div>
                <div class="col ps-0">
                    <p class="fw-bold mb-0 pt-3 fs-4">3251</p>
                    <p class="desc fw-bold text-muted mb-0">طلباتي</p>
                    <p class="text-danger mb-1 fw-bold">حدث حدث حدث حدث خطأ</p>
                </div>  
            </div>
        </div>
          <div class="col-lg-2 col-md-6 text-center diff-div pt-3">
            <p class="mb-0"><i class="bi bi-journal-medical fs-1"></i></p>
            <p class="mb-0">الاحصائيات</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../../assets/styles/commonStyles';
@import '../../assets/styles/btn';
.diff-div{
    background: #FAF9F3;
    i{
        color: #D1BD7D;
    }
}
.item-row{
    border: 2px solid $borderColor;
    background: #F7FBFB;
    i{
        color: $borderColor;
    }
    .col{
        overflow: hidden;
        text-overflow: ellipsis;
        .desc{
            font-size: .8rem;
            white-space: nowrap;
        }
        .text-danger{
            font-size: .6rem;
            white-space: pre-wrap;
        }
    }
}
</style>