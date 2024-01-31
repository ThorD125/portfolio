<template>
    {{ props.type }}
</template>

<script setup lang="ts">
    interface IProps {
        type: string;
    }

    const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped></style>
