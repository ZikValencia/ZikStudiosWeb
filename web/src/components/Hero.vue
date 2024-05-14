
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import gsap from 'gsap';
    import { RoughEase } from "gsap/dist/EasePack";
    import { TextPlugin } from "gsap/dist/TextPlugin";
    import image from '@/assets/Self_portrait.png'

    gsap.registerPlugin(TextPlugin,RoughEase);

    const words = ref<Array<string>>(['web developer', 'designer', 'photo editor'])
    onMounted(() => {
    const blink = gsap.to('.cursor', {opacity:0, ease:'power2.inOut', repeat: -1, repeatDelay: 0.5})
    let mainTimeLine = gsap.timeline({repeat: -1})
    words.value.forEach(word => {
        let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 2})
        tl.to('.text', {duration: 1, text: word})
        mainTimeLine.add(tl)
    });
    });
</script>
<template>
  <div class="flex items-start h-screen justify-center p-10 flex-wrap" style="margin-top: 20vh;">
    <h1 class="relative inline-block flex-row sm:w-screen sm:pl-52 xl:w-1/2" style="min-width: 50vw; margin-top: 50px;">
      <span class="box"></span>
      <span class="text-7xl sm:text-base font-extrabold ">Hi I am Zik</span> <br>
      <span class="text-7xl font-extrabold im">I'm a </span>
      <span class="text-7xl font-extrabold text-sky-600 text">
      </span>   
      
      <span class="text-7xl font-extrabold text-white cursor">|</span><br>
      <span class="text-2xl font-extrabold italic mt-5">My site is still under creative development</span> <br>
    </h1>
    <div class="person" >
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
          />
          <img
            class="img img1" :src="image"
          />
        </div>
      </div>
    </div>

    
  </div>
</template>
<style>
.person {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 500px;
}
.contianer{
    background-color: none;
}



.container-inner {
  clip-path: path(
    "M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z"
  );
  position: relative;
  transform-origin: 50%;
  top: -200px;
}
.circle {
  background-color: #fee7d3;
  border-radius: 50%;
  height: 380px;
  left: 10px;
  position: absolute;
  top: 210px;
  width: 380px;
}
.img {
  position: relative;
  transform: translateY(20px) scale(1.15);
  transform-origin: 50% bottom;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.container:hover .img {
  transform: translateY(0) scale(1.2);
}
.img1 {
  left: 22px;
  top: 100px;
  width: 340px;
}
</style>