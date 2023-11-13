<template>

    <router-link class="h-fit p-1 mx-5 hover:underline" :class="$route.fullPath == to?'font-semibold':''" :to="to"><slot></slot></router-link>
    
</template>

<script lang="ts" setup>
    interface IProps {
        to: string;

        default?: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        default: false,
    });

</script>

<style scoped></style>
