<template>
    <teleport :to="'body'">
        <Transition>
            <div v-if="show" class="absolute w-screen h-screen top-0 left-0 z-[500] bg-[rgba(0,0,0,0.2);]"></div>
        </Transition>
        <Transition name="slide-fade">
            <div
                v-if="show"
                class="absolute w-screen h-screen top-0 left-0 z-[500] drop-shadow-2xl"
                @click="emit('close')"
            >
                <div
                    class="w-full md:w-1/2 h-screen bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-200"
                    :class="props.left ? 'mr-auto' : 'ml-auto'"
                    @click.stop
                >
                    <div
                        class="px-5 py-5 max-h-28 border-b bg-gray-50 border-gray-200 dark:bg-dark-700 dark:border-dark-200 flex items-center justify-between"
                        :class="props.left ? 'flex-row-reverse' : ''"
                    >
                        <h2
                            class="text-xl font-medium leading-7 text-gray-900 dark:text-white tracking-tight !overflow-visible truncate flex items-center relative"
                        >
                            <slot name="pageTitle"></slot>
                        </h2>
                        <IconButton bg-color="bg-transparent" bg-color-hover="bg-transparent" shadow="shadow-none">
                            <XMarkIcon
                                class="h-7 w-7 font-bold dark:text-white text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                aria-hidden="true"
                                @click="emit('close')"
                            />
                        </IconButton>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </teleport>
</template>

<script setup lang="ts">
    import { XMarkIcon } from '@heroicons/vue/24/solid';

    import IconButton from '@/components/IconButton.vue';

    interface IProps {
        title?: string;
        left?: boolean;
        buttonLabel?: string;
        show: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        title: 'No title provided',
        left: false,
        buttonLabel: 'Details',
        show: false,
    });
    const emit = defineEmits(['close']);
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 0.2s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.2s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(500px);
        opacity: 0;
    }
</style>
