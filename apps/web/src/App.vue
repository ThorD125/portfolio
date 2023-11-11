<template>
    <div class="p-5 h-screen w-screen flex flex-wrap overflow-hidden">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
