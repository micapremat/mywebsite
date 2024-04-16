<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isRunning = ref(false)

const handleKeyPress = (e: KeyboardEvent) => {
    //get runner image
    let runner = document.getElementById("runner")
    //get runner image position
    let runnerX = runner?.offsetLeft || 0
    
    //get finish image
    let finish = document.getElementById("finish")
    //get finish image position minus it width
    let finishX = 0
    if(finish !== null) {
         finishX = finish.offsetLeft - finish.offsetWidth
    }

    if(runner !== null) {
        if(e.key == 'ArrowRight') {
            runnerX+=20
            //add the position to the runner image
            runner.style.left =  `${runnerX}px` 
            //when runner position mayor to finish position go to about page
            if (finishX <= runnerX) {
                runnerX = 0
                document.removeEventListener("keyup", handleKeyPress)
                router.push("/about")
            }
        } else if(e.key == 'ArrowLeft') {
            runnerX-=20
            //add the position to the runner image
            runner.style.left =  `${runnerX}px` 
        }
    }
};  

const followme = () => {
    isRunning.value = true
    
    //start to move the runner when key up
    document.addEventListener("keyup", handleKeyPress)
}

const stopRunner = () => {
    isRunning.value = false;
    document.removeEventListener("keyup", handleKeyPress)
}
</script>

<template>
  <div class="lg:flex justify-around flex-row mt-14">
    <div class="flex-col">
        <div class="text-center">
            <h3 class="text-xl text-primary font-medium"> Do you want to know me better?</h3>
        </div>
        <div class="text-center mb-2">
            <p class="underline font-semibold text-xl py-4 cursor-pointer" @click="followme">Go for it</p>
            <p class="w-2/3 mx-auto font-bold text-sm">You just need to guide the runner to the finish line </p>
        </div>
        <div class="flex flex-row justify-around">
            <div class=" self-end">
                <img src="../assets/img/run.gif" class="absolute left-[20px] sm:left-[10%] lg:left-[15%] header-img w-20 cursor-pointer" id="runner" @click="followme"/>
            </div>
            <div class=" self-start">
                <img src="../assets/img/finish.png" class="absolute right-[20px] sm:right-[15%] lg:left-[40%]  header-img w-6 cursor-pointer" id="finish"/>
            </div>
        </div>
        <div class="text-center" v-if="isRunning">
            <button class=" text-red-600 font-semibold" @click="stopRunner">Stop the runner</button>
        </div>
        <div class="text-center py-4 mt-20">
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
