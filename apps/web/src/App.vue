<template>
    <div class="w-screen h-screen px-5">
        <div v-show="isSmallScreen" class="h-[10vh] flex items-center">
            <IconButton bg-color="bg-transparent" bg-color-hover="bg-transparent" shadow="shadow-none">
                <Bars3Icon class="h-7 w-7 font-bold text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    aria-hidden="true" v-if="!menu" @click="clickMenu" />
                <XMarkIcon class="h-7 w-7 font-bold text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    aria-hidden="true" v-else @click="clickMenu" />
            </IconButton>
        </div>
        <div v-show="menu || !isSmallScreen" @click="clickMenu"
            class="flex md:block justify-center md:justify-auto items-center md:items-auto text-center bg-black l-0 r-0 b-0 t-0 w-[90vw] md:w-full h-[85vh] md:h-[5vh] md:flex md:justify-end md:h-[5vh] md:max-h-fit md:max-h-[10%]">
            <div class="navbar md:flex">
            <!-- 
            <Spacer></Spacer>
            <div class="w-full">
                <Color color="#1e90ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
                <Color color="#8a2be2" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
                <Color color="#ff00ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor" :selected="true"></Color>
                <Color color="red" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            </div> 
        -->

            <TabNav to="/">About me</TabNav>
            <TabNav to="/CV">CV</TabNav>
            <TabNav to="/blog">Blog</TabNav>
            <TabNav to="/projects">Projects</TabNav>
            <!-- <TabNav to="/console">Console</TabNav> -->
        </div>

        </div>
        <div v-show="!menu"
            class="md:px-20 xl:px-40 w-full block md:flex block md:flex-wrap overflow-hidden h-[85vh] md:h-[90vh]">
            <div class="content w-full h-full" :class="$route.fullPath == '/' ? '' : 'pr-2 md:mr-5 overflow-y-scroll'">
                <RouterView :key="$route.fullPath" />
            </div>
        </div>

        <RichtClickMenu></RichtClickMenu>

        <footer class="w-full mt-auto bottom-0 flex justify-center items-center text-center h-[5vh]">© Thor Demeestere · Powered
            by vue</footer>

    </div>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/solid';

import IconButton from '@/components/Button/Icon.vue';
import { ref, computed } from 'vue';



const menu = ref(false);

// Define a reactive ref for the screen width
const screenWidth = ref(window.innerWidth);

// Update screenWidth when the window is resized
window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});

// Define a computed property to check if the screen width is less than or equal to 760
const isSmallScreen = computed(() => screenWidth.value <= 760);

const clickMenu = () => {
    if (isSmallScreen.value) {
        menu.value = !menu.value;
    } 
}
</script>

<style>
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
}

::-webkit-scrollbar-track {
    background: #eee;
}

::-webkit-scrollbar-track-piece {
    background: #ccc;
}

::-webkit-scrollbar-button {
    display: none;
}
</style>
