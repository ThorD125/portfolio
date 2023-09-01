<template>
    <a :href="props.url" :style="theStyle" class="w-[300px] h-[150px] p-5 text-center"><h2 class="text-3xl font-bold"><slot></slot></h2></a>
</template>

<script setup lang="ts">
    
interface IProps {
    bgImage?: string;
    bgColor?: string;
    url: string;
}
const props = withDefaults(defineProps<IProps>(), {
});

import theImage from "@/assets/images/test.jpg";
import { computed } from "vue";
const color = "purple";

const rand = Math.floor(Math.random() * 16777215).toString(16);

const theStyle = computed(() => {
    const returner = {};

    if (props.bgColor) {
        returner["backgroundColor"] = props.bgColor;
    } else {
        returner["backgroundColor"] = `#${rand}`;
    }
    if (props.bgImage) {
        returner["backgroundImage"] = `url(${props.bgImage})`;
    }
    return returner;
});
    
</script>

<style scoped>

</style>
