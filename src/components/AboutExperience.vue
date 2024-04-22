<script setup lang="ts">

const goToUrl = (url: string) => {
    window.open(url, '_blank')
}
</script>

<template>
    <div>
        <h1 class=" font-bold text-3xl text-black pb-3 border-b-2 border-primary">Work experience</h1>
        <div class="flex flex-col lg:flex-row lg:justify-between mt-8">
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold cursor-pointer"  @click="goToUrl('https://appvestor.com/')">Appvestor APS</h2>
                <h3 class="text-2xl font-semibold my-3">Frontend Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">November 2022 - August 2023</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1 cursor-pointer " @click="goToUrl('https://maps.app.goo.gl/SR2ZEvtasyuGkNubA')">Copenhagen - Denmark</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I worked on a project from scratch With VueJs 3. We developed a web application to work with users 
                    mobile applications. We used tailwind to manage styles and responsive design.</li>
            </div>
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold cursor-pointer" @click="goToUrl('https://danaide.com.ar/en/')">Danaide SA</h2>
                <h3 class="text-2xl font-semibold my-3">Fullstack Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">September 2020 - July 2022</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1 cursor-pointer" @click="goToUrl('https://maps.app.goo.gl/AF58ejHtkF7eUzdy5')">La Plata - Argentina</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I contributed to two different projects involving the management of urban cameras. I started working as a frontend
                    developer with Vue Js 2 and after a few months I started to work on the backend as well, with .Net and relational databases with MySQL.</li>
            </div>
            <div class=" lg:w-1/3">
                <h2 class=" text-xl text-primary font-semibold cursor-pointer"  @click="goToUrl('https://www.corsisa.com.ar/')">Corsisa SA</h2>
                <h3 class="text-2xl font-semibold my-3">Fullstack Developer</h3>
                <div class="flex flex-row mb-1">
                    <img src="@/assets/img/calendar.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md self-end">March 2020 - July 2020</p>
                </div>
                <div class="flex flex-row ">
                    <img src="@/assets/img/location.png" class="w-6 mr-2" />
                    <p class="font-semibold text-md mt-1">La Plata - Argentina</p>
                </div>
                <li class=" font-semibold text-md ml-2 mt-3">I helped develop a dedicated CMS using Angular and Yii2 to manage logistics for one of the largest food production
                    companies in Argentina, facilitating the coordination with its network of store providers.</li>
            </div>
        </div>
    </div>
</template>

<style scoped>
    li::marker {
        color: var(--primary);
    }
</style>
