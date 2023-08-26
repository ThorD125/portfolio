<template>
    <div>
        <button class="w-full h-fit" @click="emit('settab')">
        <slot></slot>    
        </button>
    </div>
</template>

<script lang="ts" setup>
interface IProps {
}
const props = withDefaults(defineProps<IProps>(), {
});

const emit = defineEmits(['settab']);

</script>

<style scoped></style>
