
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hero from '@/components/Hero.vue'

</script>
<template>
  <div class="">
    <hero/>
    <!-- Dev -->
    <div class="w-screen justify-center text-center h-auto bg-sky-950 content-center">
      <h1 class="text-gray-300 text-7xl font-extrabold">About me</h1>
      <div class="flex items-center justify-center">
        <div class="basis-80">
          <div class="mt-3 rounded-full">
          <span class="block h-1.5 w-full rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>

      <p class="text-xl font-bold p-10 ">Hello, I’m Zik, a passionate Filipino web developer dedicated to bringing ideas to life in the digital realm.<br>
        In everyday life, I’m known as Exequiel (Hard to read right?), but I prefer to be called Zik.
      </p>

      <p class="text-xl font-bold p-10 ">
        I graduated with a Bachelor's degree in Information Technology from Silliman University in the Philippines.
      </p>

      <p class="text-xl font-bold p-10 ">
        After graduating, I launched my career journey at Perti Solutions Ca as a technical consultant, a role I held from [start year] to [end year].
      </p>

      <p class="text-xl font-bold p-10 ">
        Currently, I work at Mobile Internet Technology .co .ltd in Japan as a mobile apps and software developer.
      </p>

      
    </div>

    <!-- Design 
    <div class="m-12 p-11">
      <span class="text-5xl font-extrabold">
        I Can also do this
      </span><br/>
    </div>

    <!-- Photo Editing 
    <div class="m-12 p-11 flex justify-end">
      <span class="text-5xl font-extrabold">
        Hmm Hobbies? I work on it <span class="text-sky-600 font-extrabold">(Literally)</span>
      </span><br/>
    </div> -->
  </div>
</template>


