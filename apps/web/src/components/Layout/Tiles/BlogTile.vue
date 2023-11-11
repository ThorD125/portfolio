<template>
      <div class="hover:cursor-pointer hover:text-accent hover:underline duration-300" @click="toggleDiv">
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
  