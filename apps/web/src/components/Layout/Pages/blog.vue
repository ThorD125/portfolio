<template>
  <div class="rounded-lg h-full">
    <BlogDigitilizeFlanders ></BlogDigitilizeFlanders>
    <BlogCloudCafe class="bg-white color-black"></BlogCloudCafe>
  </div>
 
</template>

<script setup lang="ts">
    
</script>

<style>

h1 {
  font-size: 1.75rem; 
  font-weight: bold;
  text-align: center;
  margin: 1.25rem 0; 
}



h2, h3 {
  font-size: 1.5rem; 
  font-weight: bold;
  margin: 1.25rem 0; 
}


h1,h2,h3 {
  color: #1e90ff; 
}

.blog:first-of-type h1{
  margin-top: 0;
}

.blog{
  background-color: white;
  color: #0f0f0f;
  border-radius: 0.5rem;
  padding: 1rem;
}
.blog.black{
  background-color: #0f0f0f;
  color: white;
}
/* .blog.black h1{
  color: white;
}
.blog.black h2 strong{
  color: lightgray;
}
.blog.black h3 strong{
  color: lightgray;
} */



/* For webkit-based browsers (Chrome, Safari) */
/* Customize the scrollbar itself */
::-webkit-scrollbar {
  width: 4px; /* Set the width of the scrollbar */
}

/* Customize the scrollbar thumb (the draggable part) */
::-webkit-scrollbar-thumb {
  background: #888; /* Set the color of the thumb */
  border-radius: 2px; /* Set the border radius of the thumb */
}

/* Customize the scrollbar track (the area behind the thumb) */
::-webkit-scrollbar-track {
  background: #eee; /* Set the color of the track */
}

/* Customize the scrollbar track piece (part of the track not covered by the thumb) */
::-webkit-scrollbar-track-piece {
  background: #ccc; /* Set the color of the track piece */
}

/* Optionally, hide the scrollbar buttons */
::-webkit-scrollbar-button {
  display: none;
}

</style>
