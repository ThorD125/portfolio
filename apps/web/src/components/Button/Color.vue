<template>
    <div class="block w-full flex justify-center mt-5">
        <div class="circled w-8 h-8 m-auto rounded-[5rem] relative" :style="'background-color:'+color+';'"></div>
    </div>
</template>

<!-- :style="'color: '+color+';'" -->

<script lang="ts" setup>


interface IProps {
        color: string;
    }
    const props = withDefaults(defineProps<IProps>(), {
        color: '#ff00ff',
    });



</script>

<style scoped>

.circled:before {
    content: "";
    display: block;
    background-color: black;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
    position: absolute;
}
.circled::after {
    position: absolute;
    content: "";
    display: block;
    background-color: purple;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
}

/* .circled:after {
    content: "";
    padding: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5em;
    border: 0.25em solid;
    border-radius: 50%;
    transition: padding 250ms;
    background-color: white;
} */

</style>
