<script setup lang="ts">
</script>

<template>
  <div class=" border rounded-lg p-3 border-[#424242] bg-[#F4E9EF] text-center mt-5">
    <div class="flex flex-col">
        <h2 class=" font-bold text-lg mb-1">Education</h2>
        <li class=" font-semibold text-md">Multimedia Design</li>
        <div class="flex flex-row justify-center ">
            <img src="@/assets/img/location-city.png" class="w-5 mr-2" />
            <p class="font-semibold text-xs self-end">La Plata - Argentina</p>
        </div>
        <div class="flex flex-row justify-center mb-1">
            <img src="@/assets/img/calendar.png" class="w-5 mr-2" />
            <p class="font-semibold text-xs self-end">Studied up to the 4th year</p>
        </div>
        <li class=" font-semibold text-md">University programming analyst</li>
        <div class="flex flex-row justify-center ">
            <img src="@/assets/img/location-city.png" class="w-5 mr-2" />
            <p class="font-semibold text-xs self-end">La Plata - Argentina</p>
        </div>
        <div class="flex flex-row justify-center mb-1">
            <img src="@/assets/img/calendar.png" class="w-5 mr-2" />
            <p class="font-semibold text-xs self-end">Studied up to the 3er year</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
    li::marker {
        color: var(--primary);
    }
</style>
