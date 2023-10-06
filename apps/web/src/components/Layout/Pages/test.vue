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
    <TableGrid :headers="tableheaders">
        <TRow><TCol>hackypi</TCol><TCol><Url href="https://shop.sb-components.co.uk/products/hackypi-compact-diy-usb-hacking-tool"/></TCol></TRow>
        <TRow><TCol>Music punch bag</TCol><TCol><Url href="https://www.amazon.com/ONEPUNCH-Machine-Electronic-Punching-Exercise/dp/B0BYF2QV1L"/></TCol></TRow>
        <TRow><TCol>Victrix pro controller</TCol><TCol><Url href="https://pdp.com/products/ps5-ps4-pc-victrix-pro-bfg-wireless-controller-las-almas-le"/></TCol></TRow>
        <TRow><TCol>Usb c dock</TCol><TCol><Url href="https://www.startech.com/en-be/universal-laptop-docking-stations/dk30ch2depue"/></TCol></TRow>
        <TRow><TCol>Deskboard</TCol><TCol><Url href="https://deskboardbuddy.com/pages/deskboard-buddy?utm_content=111271053987&gadid=461911847402"/></TCol></TRow>
        https://www.tiktok.com/@covertinstruments/video/7274215696823848238
    </TableGrid>
</template>

<script setup lang="ts">

import TestImage from "@/assets/images/test.jpg";
const tableheaders = ["Item", "Link"];

</script>

<style scoped>
</style>
