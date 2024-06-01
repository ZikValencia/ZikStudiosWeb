
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

      <p class="text-xl font-bold p-10 ">
        Hello! I'm a passionate Filipino web developer dedicated to bringing ideas to life in the digital realm. <br />
        With a keen eye for detail and a drive for perfection, I strive to create websites that are not only functional <br />
         but also visually appealing and user-friendly. When I'm not coding, you'll likely find me behind a camera. <br />
         I have a deep passion for photography and enjoy capturing core memories, making good memories even better <br />
         through thoughtful editing and creative enhancements. 
      </p>
    </div>

    
    </div>
</template>


