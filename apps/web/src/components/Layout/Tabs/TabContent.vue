<template>
    <div>
        tab pane
        {{ title }}
    </div>
</template>

<script setup lang="ts">
    interface IProps {
        title: string;
        show: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        title: 'No title provided',
        show: false,
    });
</script>

<style scoped>

</style>
