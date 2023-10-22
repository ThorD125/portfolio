<template>
    <div class="block w-full flex justify-center mt-5" @click="changeColor">
        <div class="rounded-full w-10 h-10 flex justify-center align-center" 
        :style="props.color.toString() == currentcolor.toString() ? 'border-width:0.25rem; border-color:'+color: 'border-width:0rem'"

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
        selected: boolean;
    }
    const props = withDefaults(defineProps<IProps>(), {
        color: '#ff00ff',
        selected: false,
    });


    var currentcolor = localStorage.currentColor;

    const changeColor = () => {
        localStorage.currentColor = props.color;
        currentcolor = props.color;
    }

</script>

<style scoped>

/* .circled:before {
    position: absolute;
    content: "";
    display: block;
    background-color: black;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
}
.circled:after {
    position: absolute;
    content: "";
    display: block;
    background-color: color;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
} */

</style>
