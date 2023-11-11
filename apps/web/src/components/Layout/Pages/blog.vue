<template>
    <div class="rounded-lg h-full w-full">
        <h1 class="w-full h-fit m-0">Blog</h1>
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
    h1 {
        font-size: 1.75rem;
        font-weight: bold;
        text-align: center;
        margin: 1.25rem 0;
    }

    h2,
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 1.25rem 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        color: var(--accentcolor, #ff00ff);
    }

    .blog {
        background-color: white;
        color: #0f0f0f;
        border-radius: 0.5rem;
        padding: 1rem;
    }
    .blog.black {
        background-color: #0f0f0f;
        color: white;
    }
    .blog.black h1 {
        margin-top: 0;
    }
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
