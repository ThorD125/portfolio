<template>
<table class="table-fixed">
    <thead>
        <tr>

            <th v-for="head in headers">{{ head }}</th>

        </tr>
    </thead>
    <tbody>

      <slot></slot>

    </tbody>
      
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
