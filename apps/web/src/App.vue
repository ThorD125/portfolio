<template>
    <div class="p-5 bg-primary-700 text-white min-h-screen">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
