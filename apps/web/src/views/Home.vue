<template>

    <div class="navbar flex flex-wrap h-full flex-col p-5">
        <NavTab tab="testa" @actualsettab="actualsettab" :default="true" />
        <NavTab tab="testb" @actualsettab="actualsettab" />
        <NavTab tab="testc" @actualsettab="actualsettab" />
    </div>
    {{ currentTab }}
    <div class="content h-full w-full p-5">
        <TabContent tab="testa" :currentTab="currentTab"/>
        <TabContent tab="testb" :currentTab="currentTab"/>
        <TabContent tab="testc" :currentTab="currentTab"/>
    </div>
</template>

<script lang="ts" setup>

    import NavTab from '@/components/Layout/Tabs/NavTab.vue';

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
