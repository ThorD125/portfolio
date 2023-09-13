<template>
    <div class="p-5 bg-primary-700 text-white h-screen flex overflow-y-scroll">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
