<template>
    <TileGrid>
        <Tile bg-color="red" url="https://example.com">firsttile</Tile>
        <Tile :bg-image="TestImage" url="example.com">secondtile</Tile>
        <Tile bg-color="purple" url="example.com">3</Tile>
        <Tile bg-color="pink" url="example.com">fourht</Tile>
        <Tile>six</Tile>
        <Tile :bg-image="TestImage" url="example.com">eleven</Tile>
    </TileGrid>
    <Spacer />
    <Spacer />
    <Spacer />
    <TileGrid>
        <Tile bg-color="#1e90ff">colors</Tile>
        <Tile bg-color="red">colors</Tile>
        <Tile bg-color="#8a2be2">colors</Tile>
        <Tile bg-color="#ff00ff">colors</Tile>
        <Tile bg-color="#ff0080">colors</Tile>
        <Tile bg-color="#00bfff">colors</Tile>
        <Tile bg-color="#008b8b">colors</Tile>
        <Tile bg-color="#1c1c1c">colors</Tile>
        <Tile bg-color="#4b0082">colors</Tile>
        <Tile bg-color="#ff1493">colors</Tile>
        <Tile bg-color="#00ced1">colors</Tile>
    </TileGrid>


</template>

<script setup lang="ts">

import TestImage from "@/assets/images/test.jpg";
const tableheaders = ["Item", "Link"];

</script>

<style scoped>
</style>
