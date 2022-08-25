<template>
    <div class="shadow-lg p-0 rounded-3">
        <h6 class="text-light py-2 rounded-top" style="background:#448E8D">ادخل رمز التحقق</h6>
        <p>برجاء ادخال الرمز</p>
        <p><i class="bi bi-dash-lg"></i> <i class="bi bi-dash-lg"></i> <i class="bi bi-dash-lg"></i> <i class="bi bi-dash-lg"></i></p>
        <p>32 : 05</p>
        <button @click="$emit('hideModal')" class="text-light border-0 p-1 rounded">تأكيد</button>
        <button class="text-light border-0 p-1 rounded">إعادة ارسال</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['hideModal'])
</script>

<style scoped lang="scss">
div{
    position: fixed;
    min-width: 40%;
    min-height: 35%;
    width: fit-content;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    color: #448E8D;
    text-align: center;
    line-height: 1.7rem;
    z-index: 999;
    button{
        width: 100px;
        margin: 1rem;
        background: #448E8D;
    }
    @media(max-width: 768px){
        button{
            font-size: .6rem;
            margin: .4rem;
        }
    }
}
</style>
