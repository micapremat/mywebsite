<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div >
            <video  autoplay muted loop class="max-w-3xl w-[400px] lg:w-[600px]"> 
              <source src="@/assets/video/todolist.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="lg:ml-10 self-center">
            <h2 class=" text-primary font-bold text-xl">To do list</h2>
            <h4 class=" font-semibold"> VueJs 3 - Tailwind - Asp.Net</h4>
            <p class=" text-lg">
                This app is to create tasks. Each task can has title - subtitle - priority - description and subtasks. Each subtask can has title - 
                subtitle and description. The user can create, update and delete tasks and subtasks. The user can order tasks by title or priority and search by title.
                <br />
                The client sends requests to the server to bring and store data. 
            </p>
                
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <video  autoplay muted loop class="max-w-3xl w-[400px] lg:w-[600px]"> 
              <source src="@/assets/video/rickyandmorty.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="lg:ml-10 self-center">
            <h2 class=" text-primary font-bold text-xl">Ricky and Morty</h2>
            <h4 class=" font-semibold"> VueJs 2 - Vuetify - Vuex store - Ricky and Morty API</h4>
            <p class=" text-lg">
                This app is to create tasks. Each task can has title - subtitle - priority - description and subtasks. Each subtask can has title - 
                subtitle and description. The user can create, update and delete tasks and subtasks. The user can order tasks by title or priority and search by title.
                <br />
                The client sends requests to the server to bring and store data. 
            </p>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <video  autoplay muted loop class="max-w-3xl w-[400px] lg:w-[600px]"> 
              <source src="@/assets/video/sharedrecipes.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="lg:ml-10">
            lala
        </div>
    </div>
    <div class="flex flex-col lg:flex-row w-full mt-8">
        <div>
            <video  autoplay muted loop class="max-w-3xl w-[400px] lg:w-[600px]"> 
              <source src="@/assets/video/laravel.mp4" type="video/mp4" />
            </video>
        </div>
        <div class="lg:ml-10">
            lala
        </div>
    </div>
  </div>
</template>

<style scoped>
    .title {
        font-family: "Montserrat", sans-serif;
    }
</style>
