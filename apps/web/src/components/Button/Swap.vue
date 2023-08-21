<template>
    <button @click="goto">
        {{ props.title }}
    </button>
</template>
<script lang="ts" setup>


interface IProps {
        title: string;
        href: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        title: 'No title provided',
        href: 'No href provided',
    });
    const emit = defineEmits(['close']);



import { useRouter } from 'vue-router';
const router = useRouter();


function goto() {
    router.push({ name: props.href })
}

</script>

<style scoped></style>
