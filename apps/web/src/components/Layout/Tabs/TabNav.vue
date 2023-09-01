<template>
    <div>
        <button class="w-full h-fit" :class="tab == currentTab ? 'font-semibold': ''" @click="emit('actualsettab', props.tab)">
        {{ props.tab }}  
        </button>
    </div>
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
})


</script>

<style scoped></style>
