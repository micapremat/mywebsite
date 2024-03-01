<script setup lang="ts">
import Home from './views/Home.vue'
import TheNav from './components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav />
  </header>
  <body>
    <router-view />
  </body>
</template>

<style scoped>

</style>
