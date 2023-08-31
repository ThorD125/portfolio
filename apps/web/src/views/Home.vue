<template>

    <div class="navbar flex flex-wrap h-full flex-col p-5">
        <NavTab tab="Javascript" @actualsettab="actualsettab" />
        <NavTab tab="CV" @actualsettab="actualsettab" :default="true" />
        <NavTab tab="Python" @actualsettab="actualsettab" />
        <NavTab tab="Bash" @actualsettab="actualsettab" />
    </div>
    <div class="content h-full w-full p-5">
        <TabContent tab="cv" :currentTab="currentTab"> <Cv /> </TabContent>
        <TabContent tab="Javascript" :currentTab="currentTab">Javascript</TabContent>
        <TabContent tab="Python" :currentTab="currentTab">Python</TabContent>
        <TabContent tab="Bash" :currentTab="currentTab">Bash</TabContent>
    </div>
</template>

<script lang="ts" setup>

    import { ref, onMounted, watch } from 'vue';



    let currentTab = ref("nodefault");

    onMounted(() => {
      watch(currentTab, (newValue) => {
        localStorage.setItem("currentTab", newValue);
      });
    });

    const actualsettab = (element: string) => {
        currentTab.value = element;
    }


</script>

<style scoped></style>
