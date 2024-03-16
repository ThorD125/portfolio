<template>

    <router-link class="block h-fit md:p-1 md:mx-5 hover:underline text-lg"
        :class="$route.fullPath == to ? 'font-semibold underline hover:no-underline' : ''" :to="to">&lt;<slot></slot>
        /&gt;</router-link>

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
