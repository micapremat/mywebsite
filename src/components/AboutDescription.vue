<script setup lang="ts">
import useDownloadPdf from '../composables/useDownloadPdf';
import BaseButton from './BaseButton.vue';

const { downloadPdf } = useDownloadPdf();
const goToGithub = () => {
    window.open('https://github.com/micapremat?tab=repositories', '_blank')
} 
</script>

<template>
  <div>
    <div>
      <p class="mt-4 text-md">
        I am from Argentina. I started my career a long time ago when I was curious about video games and web development so I started studying Multimedia Design.
        During that time I learned about graphic design, programming, film, interactive art, among other things. Meanwhile I took a course on web development 
        (Javascript, HTML5, CSS3, Jquery and Boostrap) and developed a website for a school. <br/>
        While studying Multimedia Design I became more curious about programming, so I decided to change my career to IT. At the same time I took an online course on
        Angular, Javascript, NodeJS and Jquery. After a while I started to work as a fullstack developer with Angular and Yii2 at Corsisa and I was in a bootcamp at GlobalLogic
        aboout Java, Springboot, API REST and Microservices. Then I started to work at Danaide as a fullstack developer with Vue 2 and ASP .Net. 
        Then I moved to Copenhagen on July 2022 and I started to work as a frontend developer with Vue 3 at Appvestor. I also developed a website for Disie with wordpress. <br/>
        In addition to courses, work, and my career I am always working in my own projects that you can see in my 
        <span class=" cursor-pointer underline font-semibold" @click="goToGithub"> github.</span>
        As a programmer I love learning new technologies and improving my skills. <br/>
        Speaking about myself, I am calm, curious, friendly and collaborative. I enjoy spending time with friends and going out. I love cooking and pastry so I like to spend
        time in the kitchen. I also like watching series and spending time on the computer. 
      </p>
    </div>
    <div  class=" text-center mt-5">
      <BaseButton :text="'Download resume'" @click="downloadPdf('https://drive.google.com/file/d/1ikbWjxQRd7YtYsiVV8hrUZS5PJglam1y/view?usp=sharing')" class="bg-primary text-white hover:bg-primary-100" rounded/>
    </div>
  </div>
</template>

<style scoped>
</style>
