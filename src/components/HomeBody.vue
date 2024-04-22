<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// @ts-ignore
import { useSwitchFun } from '../stores/switchFun'

const store = useSwitchFun();

const router = useRouter();
const isRunning = ref(false);
const techList = [
	    'Javascript',
		'Vue Js',
		'Angular',
        'React',
        'NodeJS',
        'C#',
        'Asp .Net',
        'Java',
];
const count_li = ref(0);
const count = ref(0);
const speed = ref(100);

onMounted(() => {
    console.log('lala')
    animateText()
})

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
    if (store.getFun) {
        isRunning.value = true
        
        //start to move the runner when key up
        document.addEventListener("keyup", handleKeyPress)
    } else {
        router.push("/about")
    }
}

const stopRunner = () => {
    isRunning.value = false;
    document.removeEventListener("keyup", handleKeyPress)
}

const animateText = () => {
    let tipo = techList[count_li.value].substring(0, count.value);
    const techText = document.getElementById('tech-text');
    if (techText) {
        techText.textContent = tipo;
    }
	count.value++;
	var tempo = setTimeout(animateText, speed.value);
    if(count.value > techList[count_li.value].length) {
        count.value = 0;
        count_li.value++;
        clearTimeout(tempo);
        setTimeout(animateText, 2000);
    }

    if(count_li.value === techList.length) {
        count_li.value = 0;
    }
}
</script>

<template>
  <div class="lg:flex justify-around flex-row mt-14">
    <div class="flex-col">
        <div class="text-center py-4" :class="store.getFun ? 'mt-20' : 'mt-2'">
            <p class="w-2/3 mx-auto font-bold text-lg ">Hi! I'm Micaela. I'm a fullstack developer and I love implementing solutions through code. </p>
            <p class="w-2/3 h-10 mx-auto mt-5 text-lg" id="tech-text"> </p>
        </div>
        <div class="text-center">
            <h3 class="text-xl text-primary font-medium"> Do you want to know me better?</h3>
        </div>
        <div class="text-center mb-2">
            <p class="underline font-semibold text-xl py-4 cursor-pointer" @click="followme">Go for it</p>
            <p class="w-2/3 mx-auto font-bold text-sm" v-if="store.getFun">You just need to guide the runner to the finish line </p>
        </div>
        <div class="flex flex-row justify-around" v-if="store.getFun">
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
