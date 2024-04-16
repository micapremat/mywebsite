<script setup lang="ts">
</script>

<template>
    <div>
        <h1 class=" font-bold text-3xl text-black pb-3 border-b-2 border-primary">Courses</h1>
        <div class="flex flex-col mt-2">
            <div>
                <li class=" font-semibold text-md ml-2 mt-3">
                    Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS  
                    <a href="https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/?couponCode=ST13MT40224" target="_blank" class=" hover:text-primary hover:bg-transparent">
                        Udemy - by Victor Robles
                    </a>
                </li>
            </div>
            <div>
                <li class=" font-semibold text-md ml-2 mt-3">
                    Website design. HTML / CSS / JavaScript / jQuery / Bootstrap
                    <a href="https://laurachuburu.com.ar/" target="_blank" class=" hover:text-primary hover:bg-transparent">
                        Estudio Laura Chuburu - by Laura Chuburu
                    </a>
                </li>
            </div>
            <div>
                <li class=" font-semibold text-md ml-2 mt-3">
                    Bootcamp about API REST y Microservices.
                    <a href="https://drive.google.com/file/d/1LZchvPv5RHFh9vyauFh2IwLfN5OBBdOM/view?usp=sharing" target="_blank" class=" hover:text-primary hover:bg-transparent">
                        Online - by GlobalLogic Argentina
                    </a>
                </li>
            </div>
            <div>
                <li class=" font-semibold text-md ml-2 mt-3">
                    Deep Dive Into Modern Web Development
                    <a href="https://fullstackopen.com/en/#course-contents" target="_blank" class=" hover:text-primary hover:bg-transparent">
                        Online - by University of Helsinki
                    </a>
                    - In progress <img src="@/assets/img/loading.gif" class="w-5 inline-block" />
                </li>
            </div>
        </div>
    </div>
</template>

<style scoped>
    li::marker {
        color: var(--primary);
    }
</style>
