<template>
    <div class="p-5">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>
