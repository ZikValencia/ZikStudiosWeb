
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { RoughEase } from "gsap/dist/EasePack";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin,RoughEase);

const words = ref<Array<string>>(['developer', 'designer', 'photo editor'])
onMounted(() => {
  const blink = gsap.to('.cursor', {opacity:0, ease:'power2.inOut', repeat: -1, repeatDelay: 0.5})
  let mainTimeLine = gsap.timeline({repeat: -1})
  words.value.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    mainTimeLine.add(tl)
  });
});

</script>
<template>
  <div class="m-12 p-11 ">
    <h1 class="relative inline-block">
      <span class="box"></span>
      <span class="text-7xl font-extrabold ">Hi I am Zik</span> <br>
      <span class="text-7xl font-extrabold im">I'm a </span>
      <span class="text-7xl font-extrabold text-sky-600 text">
      </span>
      <span class="text-7xl font-extrabold text-white cursor">|</span>
    </h1>
  </div>
</template>
