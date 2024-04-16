<script setup lang="ts">
import AboutDescription from '@/components/AboutDescription.vue'
import AboutEducation from '@/components/AboutEducation.vue'
import AboutExperience from '@/components/AboutExperience.vue'
import AboutCourse from '@/components/AboutCourse.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col md:flex-row w-full mt-5">
      <div class=" md:w-9/12 mr-10">
        <h1 class=" font-bold text-4xl text-black pb-3 border-b-2 border-primary">About</h1>
        <AboutDescription />
      </div>
      <div class=" lg:w-3/12 mt-8">
        <AboutEducation />
      </div>
    </div>
    <div class="mt-8">
      <AboutExperience />
    </div>
    <div class="my-8">
      <AboutCourse />
    </div>
  </div>
</template>

<style scoped>
</style>
