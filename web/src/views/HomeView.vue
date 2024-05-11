
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import hero from '@/components/Hero.vue'

</script>
<template>
  <div class="">
    <hero/>
    <!-- Dev -->
    <div class="m-12 p-11 flex justify-end">
      <span class="text-5xl font-extrabold ">
        You don't Believe me?!
        <br/>
        Heres what I can do.
      </span>
      
    </div>

    <!-- Design -->
    <div class="m-12 p-11">
      <span class="text-5xl font-extrabold">
        I Can also do this
      </span><br/>
    </div>

    <!-- Photo Editing -->
    <div class="m-12 p-11 flex justify-end">
      <span class="text-5xl font-extrabold">
        Hmm Hobbies? I work on it <span class="text-sky-600 font-extrabold">(Literally)</span>
      </span><br/>
    </div>
  </div>
</template>


