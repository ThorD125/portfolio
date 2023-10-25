<template>

    <div class="navbar flex flex-wrap h-full flex-col p-5 bg-black text-white rounded-lg">
        <!-- <TabNav tab="Javascript" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <TabNav tab="CV" :currentTab="currentTab" @actualsettab="actualsettab" :default="true" />
        <!-- <TabNav tab="Python" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <!-- <TabNav tab="Bash" :currentTab="currentTab" @actualsettab="actualsettab" /> -->
        <TabNav tab="About me" :currentTab="currentTab" @actualsettab="actualsettab" />
        <TabNav tab="test" :currentTab="currentTab" @actualsettab="actualsettab" />
        <TabNav tab="Blog" :currentTab="currentTab" @actualsettab="actualsettab" />
        <Spacer></Spacer>
        <div class="w-full">
            <Color color="#ff00ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor" :selected="true"></Color>
            <Color color="#1e90ff" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            <Color color="red" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
            <Color color="#8a2be2" :currentcolor="currentColor" @actualsetcolor="actualsetcurrentcolor"></Color>
        </div>
    </div>
    afix
    <div class="content h-full w-full p-5">
        <TabContent tab="test" :currentTab="currentTab"> <Test /> </TabContent>
        <TabContent tab="CV" :currentTab="currentTab"> <Cv /> </TabContent>
        <TabContent tab="Javascript" :currentTab="currentTab">Javascript</TabContent>
        <TabContent tab="Python" :currentTab="currentTab">Python</TabContent>
        <TabContent tab="Bash" :currentTab="currentTab">Bash</TabContent>
        <TabContent tab="Profiel" :currentTab="currentTab"> <Contact /> </TabContent>
        <TabContent tab="Blog" :currentTab="currentTab"> <Blog /> </TabContent>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';


const currentTab = ref('notabset');

const actualsettab = (e: string) => {
    currentTab.value = e;
}

const currentColor = ref(localStorage.currentColor) ?? ref('#ff00ff');

const changecoloros = () => {
    localStorage.currentColor = currentColor.value;
    document.documentElement.style.setProperty("--accentcolor", currentColor.value);
}


changecoloros();
const actualsetcurrentcolor = (e: string) => {
    currentColor.value = e;
    changecoloros();
}

</script>

<style scoped></style>
