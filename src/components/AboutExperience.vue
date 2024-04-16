<script setup lang="ts">
</script>

<template>
    <div>
        <h1 class=" font-bold text-3xl text-black pb-3 border-b-2 border-primary">Experience</h1>
        <div class="flex flex-col lg:flex-row lg:justify-between mt-8">
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold">Appvestor APS</h2>
                <h3 class="text-2xl font-semibold my-3">Frontend Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">November 2022 - August 2023</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1">Copenhagen - Denmark</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I worked on a project from scratch With VueJs 3. We developed a web application to work with users 
                    mobile applications. We used tailwind to manage styles and responsive design.</li>
            </div>
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold">Danaide SA</h2>
                <h3 class="text-2xl font-semibold my-3">Fullstack Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">November 2022 - August 2023</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1">Copenhagen - Denmark</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I worked on a project from scratch With VueJs 3. We developed a web application to work with users 
                    mobile applications. We used tailwind to manage styles and responsive design.</li>
            </div>
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold">Corsisa SA</h2>
                <h3 class="text-2xl font-semibold my-3">Fullstack Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">November 2022 - August 2023</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1">Copenhagen - Denmark</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I worked on a project from scratch With VueJs 3. We developed a web application to work with users 
                    mobile applications. We used tailwind to manage styles and responsive design.</li>
            </div>
        </div>
    </div>
</template>

<style scoped>
    li::marker {
        color: var(--primary);
    }
</style>
