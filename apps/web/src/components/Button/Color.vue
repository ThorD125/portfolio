<template>
    <div class="block w-full flex justify-center" @click="changeColor">
        <div class="rounded-full w-10 h-10 flex justify-center align-center" 
        :style="props.color == props.currentcolor  ? 'border-width:0.25rem; border-color:'+color: 'border-width:0rem'"
        >
            <div class="rounded-full m-auto w-6 h-6" 
            :style="'background-color:'+color"   
            >
</div>
        </div>
    </div>
</template>

<!-- :style="'color: '+color+';'" -->

<script lang="ts" setup>


    interface IProps {
        color: string;
        currentcolor: string;

        selected: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        color: '#ff00ff',
        selected: false,
    });

    const emit = defineEmits(['actualsetcolor']);

    const changeColor = () => {
        emit('actualsetcolor', props.color);
    }

</script>

<style scoped>

</style>
