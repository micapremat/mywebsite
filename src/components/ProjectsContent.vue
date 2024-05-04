<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div >
            <iframe width="500" height="315" src="https://www.youtube.com/embed/PEwpqdzqdRg?si=c1a14W5Gymac8wkW" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
        <div class="lg:ml-10 self-center">
            <h2 class=" text-primary font-bold text-xl">To do list</h2>
            <h4 class=" font-semibold"> VueJs 3 - Tailwind - Asp.Net</h4>
            <p class=" text-lg">
                In this app the user can create tasks. Each task can have title - subtitle - priority - description and subtasks. Each subtask can have title - 
                subtitle and description. The user can create, update and delete tasks and subtasks. The user can order tasks by title or priority and search by title.
                <br />
                The client comunicates with a REST API that serves and persist data. 
            </p>
                
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/aoi8-nlOTEo?si=ewEoJsrPxtItvt41" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
        <div class="lg:ml-10 self-center">
            <h2 class=" text-primary font-bold text-xl">Rick and Morty</h2>
            <h4 class=" font-semibold"> VueJs 2 - Vuetify - Vuex store - Rick and Morty API</h4>
            <p class=" text-lg">
                In this app you can see all the Rick and Morty characters. If you pick one character you can see the information card. 
                <br />
                You can choose you favorites characters, filter and search them. 
                <br />
                Pagination is resolved via API. I used vuex store to manage data between components. 
            </p>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/CrooTFxKyfo?si=n6RF0DC4N6jB90YX" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>
        <div class="lg:ml-10">
            <h2 class=" text-primary font-bold text-xl">Shared recipes</h2>
            <h4 class=" font-semibold"> VueJs 3 - Tailwind - Pinia store - Typescript - Asp.Net</h4>
            <p class=" text-lg">
                In this app users can create an account, login, see and share recipes. Each recipe has Title - Ingredients - Photo - Steps - Recipe author.
                Users can filter and search recipes and also rate them.    
                <br />
                I used Vue 3 with Typescript to build the components, I used Tailwind to style them and Asp.Net to build the backend.
            </p>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <iframe width="500" height="315" src="https://www.youtube.com/embed/B2cWIUGa76U?si=0TdEvBRHfo_dS250" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
        <div class="lg:ml-10">
            <h2 class=" text-primary font-bold text-xl">Invoices App</h2>
            <h4 class=" font-semibold"> VueJs 3 - Tailwind - Laravel 10</h4>
            <p class=" text-lg">Create - edit - delete invoices.</p>
            <p class=" text-lg">This app was made to learn a bit about Laravel</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .title {
        font-family: "Montserrat", sans-serif;
    }
</style>
