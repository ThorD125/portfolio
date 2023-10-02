<template>
<table class="table-auto">
    <thead>
    <tr>

        <th v-for="head in headers">{{ head }}</th>

    </tr>
  </thead>
    <slot></slot>

</table>
</template>

<script setup lang="ts">
    

interface IProps {
    headers?: string[];
    }

    const props = withDefaults(defineProps<IProps>(), {
    });
</script>

<style scoped>

</style>
