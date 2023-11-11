<template>
    <div class="p-5 h-screen flex">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
