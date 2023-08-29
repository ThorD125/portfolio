<template>

    <div class="navbar flex flex-wrap h-full flex-col p-5">
        <NavTab @settab="actualsettab('testa')">testa</NavTab>
        <NavTab @settab="actualsettab('testb')">testb</NavTab>
        <NavTab @settab="actualsettab('testc')">testc</NavTab>
    </div>
    {{ currentTab }}
    <div class="content h-full w-full p-5">
        <div v-show="currentTab == 'testa'">contenta</div>
        <div v-show="currentTab == 'testb'">contentb</div>
        <div v-show="currentTab == 'testc'">contentc</div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    import NavTab from '@/components/Layout/Tabs/NavTab.vue';

    const currentTab = ref('testa');

    const actualsettab = (e: string) => {
        currentTab.value = e;
    }


</script>

<style scoped></style>
