<template>
    <div class="p-5 bg-primary-900 text-primary-500 h-screen flex">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
