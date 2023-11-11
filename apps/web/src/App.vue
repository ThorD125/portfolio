<template>
    <div class="p-5 md:px-20 xl:px-40 h-screen w-screen flex flex-wrap overflow-hidden">
        <RouterView :key="$route.fullPath" />
    </div>
</template>
<script setup lang="ts"></script>

<style>
    ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
        background: #eee;
    }
    ::-webkit-scrollbar-track-piece {
        background: #ccc;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
</style>
