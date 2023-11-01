<template>

    <img :src="'src/assets/icons/linkedin.svg'" class="w-5 h-5" alt="test">

</template>

<script lang="ts" setup>


    interface IProps {
        src: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        src: "test",
    });
</script>

<style scoped></style>
