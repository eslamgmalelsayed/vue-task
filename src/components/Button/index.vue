<template>
     <button class="btn rounded-0 text-white mx-1"><slot></slot></button>
</template>

<script setup>
</script>

<style lang="scss" scoped>

    @media (max-width:500px){
        button{
            font-size: .4rem;
        }
    }
</style>