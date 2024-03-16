<template>
    <button
        type="button"
        class="inline-flex items-center text-sm font-medium"
        :class="[
            `${props.bgColor} ${props.textColor} ${props.border} ${props.bgColorHover} ${props.shadow}`,
            props.disabled ? 'cursor-not-allowed opacity-50' : '',
        ]"
        :disabled="disabled"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
    interface IProps {
        bgColor?: string;
        textColor?: string;
        border?: string;
        disabled?: boolean;
        bgColorHover?: string;
        shadow?: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        bgColor: 'bg-black',
        textColor: 'text-white',
        bgColorHover: 'hover:bg-white',
        border: 'border border-transparent',
        disabled: false,
        shadow: 'shadow-sm',
    });
</script>

<style scoped></style>
