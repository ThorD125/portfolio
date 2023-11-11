<template>
      <div class="px-2 text-center hover:cursor-pointer" @click="toggleDiv">
        <h1>{{ props.title }}</h1>
      </div>
      <div v-show="!showFirstDiv">
        <slot></slot>
      </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface IProps {
    title: string;
  }
  
  const props = withDefaults(defineProps<IProps>(), {
  });
  
  const showFirstDiv = ref(true);
  
  const toggleDiv = () => {
    showFirstDiv.value = !showFirstDiv.value;
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  