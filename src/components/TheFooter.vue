<script setup lang="ts">
import { ref } from 'vue'

const goToLinkedin = () => {
    window.open('https://www.linkedin.com/in/micaela-premat/', '_blank')
}
const goToGithub = () => {
    window.open('https://github.com/micapremat?tab=repositories', '_blank')
} 

</script>

<template>
  <div class="flex flex-row justify-center mt-5">
    <div>
        <button @click="goToLinkedin">
            <img src="@/assets/img/linkedin.png" class="w-6 mx-2"/>
        </button>
    </div>
    <div>
        <button @click="goToGithub">
            <img src="@/assets/img/github.png" class="w-6 mx-2"/>
        </button>
    </div>
    <div>
        <p class="mx-2">© Micaela Premat - 2024</p>
    </div>
  </div>
</template>

<style scoped>

</style>
