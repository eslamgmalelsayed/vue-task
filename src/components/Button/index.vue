<template>
     <button :class="[{...props}, 'text-white']"><slot></slot></button>
</template>

<script setup>
    // color
    const props = defineProps({
        darkGreen: {
            type: Boolean,
            default: () => false
        },
        lightGreen: {
            type: Boolean,
            default: () => false
        },
        darkYellow: {
            type: Boolean,
            default: () => false
        },
    })
</script>

<style lang="scss" scoped>
    // light
    .lightGreen{
        background:#36C5BA;
    }
    // dark
    .darkGreen{
        background:#158E8D;
    }
    // darker
    .darkerGreen{
        background:#448E8D;
    }
    // yellow
    .darkYellow{
        background:#D1BD7D;
    }
    button{
        border: 0;
        width: 163px;
        height: 49px;
        @media (max-width:768px){
            width: 80px;
            font-size: .7rem;
            margin-top: 1rem;
        }
    }
</style>