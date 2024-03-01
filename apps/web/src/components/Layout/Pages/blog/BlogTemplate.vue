<template>
{{ test }}


<p @clicked="myclick">
    This is a blog template
</p>

<!-- <p :style="'dsf':' + color ? 'blue' : 'red'"></p> -->

</template>

<script setup lang="ts">
    // const test = 'Hello World';

    const myclick = () => {
        console.log('clicked');
    }

    import { ref } from 'vue';

    const test = ref('Hello World');
        
    const color = true;
</script>

<style scoped>

</style>
