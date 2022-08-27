<template>
  <button :class="[{ ...props }, 'text-white hvr-float-shadow']"><slot></slot></button>
</template>

<script setup>
// color
const props = defineProps({
  darkGreen: {
    type: Boolean,
    default: () => false,
  },
  lightGreen: {
    type: Boolean,
    default: () => false,
  },
  darkYellow: {
    type: Boolean,
    default: () => false,
  },
});
</script>

<style lang="scss" scoped>
// light
.lightGreen {
  background: #36c5ba;
}
// dark
.darkGreen {
  background: #158e8d;
}
// darker
.darkerGreen {
  background: #448e8d;
}
// yellow
.darkYellow {
  background: #d1bd7d;
}
button {
  border: 0;
  width: 163px;
  height: 49px;
  @media (max-width: 768px) {
    width: 80px;
    font-size: 0.7rem;
    margin-top: 1rem;
  }
}
</style>
