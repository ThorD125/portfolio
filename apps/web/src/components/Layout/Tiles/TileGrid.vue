<template>
    <div class="flex flex-wrap justify-between gap-5">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    
interface IProps {
}
const props = withDefaults(defineProps<IProps>(), {
});

import theImage from "@/assets/images/test.jpg";
const color = "purple";

const rand = Math.floor(Math.random() * 16777215).toString(16);
    
</script>

<style scoped>

</style>
