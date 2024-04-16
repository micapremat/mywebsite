<script setup lang="ts">
import ProjectsContent from '@/components/ProjectsContent.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col md:flex-row w-full mt-5">
      <div class=" md:w-9/12 mr-10">
        <h1 class=" font-bold text-4xl text-black pb-3 border-b-2 border-primary">Projects</h1>
      </div>
    </div>
    <ProjectsContent />
  </div>
</template>

<style scoped>
    .title {
        font-family: "Montserrat", sans-serif;
    }
</style>
