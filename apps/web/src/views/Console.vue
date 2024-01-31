<template>
    
    <div class="h-100">
        <input @keyup.enter="getResult" type="text" class="w-[90%] text-black focus-visible:outline-none p-1" value="alert('test')">
        <!-- <input @keyup.enter="getResult" type="text" class="w-[90%] text-black focus-visible:outline-none p-1"> -->
        <input @click="getResult" type="button" value="Run" class="w-[10%] text-center hover:font-bold">
        <p>{{ result }}</p>
    </div>

</template>

<script setup lang="ts">

import { ref } from "vue";

var result = ref<string>("output");

const getResult = (e) => {
    const text = e.target.value;
    eval(text);
    result.value = text+"\n"+result.value;
}



</script>

<style scoped>
</style>
