
<template>
    <div>
        <a href="{{ props.href }}" class="underline decoration-black decoration-solid underline-offset-4 decoration-3 hover:font-bold">{{ urlText }}</a>
    </div>
</template>

<script setup lang="ts">
    

    interface IProps {
        href: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
    });

    const urlText = props.href.replace(/https?:\/\//, '').split('?')[0].split('/').pop();
</script>

<style scoped>

</style>
