<template>
    <TileGrid>
        <Tile bg-color="red" url="https://example.com">firsttile</Tile>
        <Tile :bg-image="TestImage" url="example.com">secondtile</Tile>
        <Tile bg-color="purple" url="example.com">3</Tile>
        <Tile bg-color="pink" url="example.com">fourht</Tile>
        <Tile>six</Tile>
        <Tile :bg-image="TestImage" url="example.com">eleven</Tile>
    </TileGrid>
</template>

<script setup lang="ts">

import TestImage from "@/assets/images/test.jpg";

</script>

<style scoped>
</style>
