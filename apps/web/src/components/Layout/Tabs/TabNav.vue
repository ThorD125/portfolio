<template>
    <button class="h-fit p-1 mx-5" :class="tab == currentTab ? 'font-bold' : ''" @click="emit('actualsettab', props.tab)">
        {{ props.tab }}
    </button>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { ref } from 'vue';

    interface IProps {
        tab: string;
        currentTab: string;

        default?: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        default: false,
    });

    const emit = defineEmits(['actualsettab']);

    onMounted(() => {
        if (props.default) {
            emit('actualsettab', props.tab);
        }
    });
</script>

<style scoped></style>
