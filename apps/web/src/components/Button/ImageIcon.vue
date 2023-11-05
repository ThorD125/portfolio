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
img{
    color: aliceblue !important;
    fill: aqua !important;
    background-color: darksalmon !important;
    stroke: blueviolet;
    
}
</style>
