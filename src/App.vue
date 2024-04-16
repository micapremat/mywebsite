<script setup lang="ts">
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <header>
    <TheNav />
  </header>
  <body>
    <router-view />
  </body>
  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped>

</style>
