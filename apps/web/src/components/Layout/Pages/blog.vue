<template>
    <div>
        <h1 class="w-full h-fit">Blog</h1>
        <BlogTile title="International Project Week">
            <BlogInternationaleProjectWeek></BlogInternationaleProjectWeek>
        </BlogTile>
        <BlogTile title="Digitilize Flanders">
            <BlogDigitilizeFlanders></BlogDigitilizeFlanders>
        </BlogTile>
        <BlogTile title="Campus Cloud Cafe">
            <BlogCloudCafe></BlogCloudCafe>
        </BlogTile>
        <BlogTile title="Hacking Garage Doors With RF">
            <BlogHackingGarageDoorsWithRF></BlogHackingGarageDoorsWithRF>
        </BlogTile>
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
