<template>
    <div v-show="props.currentTab == props.tab">the {{ props.tab }}</div>
</template>

<script setup lang="ts">
    
interface IProps {
    tab: string;
    currentTab: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
    });
</script>

<style scoped>

</style>
