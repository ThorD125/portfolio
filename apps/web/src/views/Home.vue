<template>
    <div class="navbar flex justify-end w-full h-min max-h-[10%]">
        <a href="#/">Home</a> |
        <a href="#/non-existent-path">Broken Link</a>
        <!-- <TabNav tab="Javascript" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="About me" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="CV" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="Python" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="Bash" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="Projects" :currentTab="currentTab" @actualsettab="actualsettab" :default="true" /> -->
        <!-- <TabNav tab="Blog" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="test" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- 
        <Spacer></Spacer>
            <div class="w-full">
            <Color color="#1e90ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            <Color color="#8a2be2" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            <Color color="#ff00ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor" :selected="true"></Color>
            <Color color="red" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
        </div> -->
    </div>
    <div class="content pr-5 w-full h-full max-h-[90%] overflow-y-scroll">
        <component :is="currentView" />
    <!-- 
        
        <TabContent tab="test" :currentTab="currentTab"> <Test /> </TabContent>
        <TabContent tab="CV" :currentTab="currentTab"> <Cv /> </TabContent>
        <TabContent tab="About me" :currentTab="currentTab"> <Aboutme /> </TabContent>
        <TabContent tab="Javascript" :currentTab="currentTab">Javascript</TabContent>
        <TabContent tab="Python" :currentTab="currentTab">Python</TabContent>
        <TabContent tab="Bash" :currentTab="currentTab">Bash</TabContent>
        <TabContent tab="Profiel" :currentTab="currentTab"> <Contact /> </TabContent>
        <TabContent tab="Blog" :currentTab="currentTab"> <Blog /> </TabContent>
        <TabContent tab="Projects" :currentTab="currentTab"> <Projects /> </TabContent>
    -->
    </div> 
</template>

<script lang="ts" setup>


import { ref, computed } from 'vue'

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const routes = {
  '/about': About
}
import About from '@/views/aboutme.vue'
import NotFound from '@/views/404.vue'

// import { ref } from 'vue';


// const currentTab = ref('notabset');

// const actualsettab = (e: string) => {
//     currentTab.value = e;
// }

// const currentColor = ref(localStorage.currentColor);

// if (!currentColor.value || currentColor.value == 'undefined') {
//     currentColor.value = '#1e90ff';
// }

// const changecoloros = () => {
//     localStorage.currentColor = currentColor.value;
//     document.documentElement.style.setProperty("--accentcolor", currentColor.value);
// }


// changecoloros();
// const actualsetcurrentcolor = (e: string) => {
//     currentColor.value = e;
//     changecoloros();
// }

</script>

<style scoped></style>
