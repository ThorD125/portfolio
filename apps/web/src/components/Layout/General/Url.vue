
<template>
    <div>
        <a :href="props.href" class="underline hover:text-accent decoration-black decoration-solid underline-offset-4 decoration-3 hover:font-bold">{{ urlText }}</a>
    </div>
</template>

<script setup lang="ts">
    

    interface IProps {
        href: string;
        title?: string;
    }

    const props = withDefaults(defineProps<IProps>(), {
    });

    let urlText = '';
    if (props.title) {
        urlText = props.title;
    } else {
        urlText = props.href.replace(/https?:\/\//, '').split('?')[0].split('/').pop();
    }
</script>

<style scoped>

</style>
