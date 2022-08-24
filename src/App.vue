<template>
  <NavBar />
  <div class="container py-5">
    <Home />
  </div>
  <Footer />
</template>

<script setup>
// imports
import NavBar from '@/components/Layout/NavBar.vue'
import Home from '@/views/Home/index.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<style scoped lang="scss">

</style>
