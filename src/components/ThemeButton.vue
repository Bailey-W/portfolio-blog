<script setup>
import { ref } from 'vue'

let dark = ref(true)

function toggleTheme() {
    if(document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.cookie = "darkmode=0";
        dark = true;
    }
    else {
        document.documentElement.classList.add('dark');
        document.cookie = "darkmode=1";
        dark = false;
    }
}
</script>

<template>
  <button @click="toggleTheme()" v-if="dark" class="rounded-xl border dark:border-slate-700 dark:border-opacity-25 w-12 h-12">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
    aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink" class="dark:fill-white fill-black hover:fill-blue-600 dark:hover:fill-blue-600 transition-all duration-75">
      <title>Toggle theme</title>
      <desc>A solid styled icon from Orion Icon Library.</desc>
      <path data-name="layer2"
      d="M36.4 20.4a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 28a12 12 0 0 1-10.3-5.8l2.5.3A13.7 13.7 0 0 0 42 25.8a12 12 0 0 1-5.6 22.6z"
      ></path>
      <path data-name="layer1" d="M36.4 16.4a2 2 0 0 0 2-2v-8a2 2 0 1 0-4 0v8a2 2 0 0 0 2 2zm-20 20a2 2 0 0 0-2-2h-8a2 2 0 0 0 0 4h8a2 2 0 0 0 2-2zm3-14.1a2 2 0 0 0 2.8-2.8l-5.7-5.7a2 2 0 0 0-2.8 2.8zM59 13.8a2 2 0 0 0-2.8 0l-5.7 5.7a2 2 0 1 0 2.8 2.8l5.7-5.7a2 2 0 0 0 0-2.8zM19.4 50.5l-5.7 5.7a2 2 0 1 0 2.9 2.8l5.7-5.7a2 2 0 1 0-2.8-2.8z"
      ></path>
    </svg>
  </button>
</template>