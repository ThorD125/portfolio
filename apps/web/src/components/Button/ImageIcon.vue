<template>
    &nbsp;&nbsp;<img class="w-5 h-5" :src="getimage()">&nbsp;
</template>

<script lang="ts" setup>

    import LinkedIn from "@/assets/icons/linkedin.svg";
    import Github from "@/assets/icons/github.svg";


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
            case "github":
                return Github;
            default:
                return "test";
        }
    };
</script>

<style scoped>
img {
    filter: invert(1);
    height: 100%;
}
</style>
