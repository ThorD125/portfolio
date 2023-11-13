<template>
    <img :src="getimage()">
</template>

<script lang="ts" setup>

    import LinkedIn from "@/assets/icons/linkedin.svg";


    interface IProps {
        src: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        src: "test",
    });

    const getimage = () => {
        switch (props.src) {
            case "linkedin":
                return LinkedIn;
            default:
                return "test";
        }
    };
</script>

<style scoped>
img {
    filter: invert(1);
    widows: 100%;
    height: 100%;
}
</style>
