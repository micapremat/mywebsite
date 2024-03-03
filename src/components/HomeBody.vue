<script setup lang="ts">
</script>

<template>
  <div class="flex justify-around flex-row mt-14">
    <div class="flex-col">
        <div class="text-center">
            <h3 class="text-xl text-primary font-medium"> Do you want to know me better?</h3>
        </div>
        <div class="text-center">
            <p class="underline font-semibold text-xl py-4">Follow me</p>
        </div>
        <div>
            <img src="../assets/img/follow-me.png" class="block mx-auto header-img w-10"/>
        </div>
        <div class="text-center py-4">
            <p class="w-2/3 mx-auto font-bold text-lg">I will tell you about who I am, what I do, what I like, where I go... </p>
        </div>
    </div>
    <div class="flex-col">
        <div class="text-center">
            <h3 class="text-xl text-primary font-medium ">Core values:</h3>
        </div>
        <div class="text-left">
            <ul class="list-disc mt-4">
                <li class=" font-semibold py-1 text-lg">UI/UX is essential</li>
                <li class=" font-semibold py-1 text-lg">Behind every programmer there is a team</li>
                <li class=" font-semibold py-1 text-lg">Teamwork is better than individual work</li>
                <li class=" font-semibold py-1 text-lg">Codebase must be documented</li>
                <li class=" font-semibold py-1 text-lg">The name of the variables matters</li>
                <li class=" font-semibold py-1 text-lg">Clear mind to make the code work</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
    li::marker {
        color: var(--primary);
    }
    
</style>
