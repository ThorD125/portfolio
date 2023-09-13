<template>
    <TileGrid>
        <Tile bg-color="red" url="https://example.com">firsttile</Tile>
        <Tile :bg-image="TestImage" url="example.com">secondtile</Tile>
        <Tile bg-color="purple" url="example.com">3</Tile>
        <Tile bg-color="pink" url="example.com">fourht</Tile>
        <Tile>six</Tile>
        <Tile :bg-image="TestImage" url="example.com">eleven</Tile>
    </TileGrid>
    <TableGrid :headers="tableheaders">
        <TRow><TCol>hackypi</TCol><TCol><a href="https://shop.sb-components.co.uk/products/hackypi-compact-diy-usb-hacking-tool">hackypi-compact-diy-usb-hacking-tool</a></TCol></TRow>
        <TRow><TCol>Music punch bag</TCol><TCol><a href="https://www.amazon.com/ONEPUNCH-Machine-Electronic-Punching-Exercise/dp/B0BYF2QV1L">B0BYF2QV1L</a></TCol></TRow>
        <TRow><TCol>Victrix pro controller</TCol><TCol><a href="https://pdp.com/products/ps5-ps4-pc-victrix-pro-bfg-wireless-controller-las-almas-le">ps5-ps4-pc-victrix-pro-bfg-wireless-controller-las-almas-le</a></TCol></TRow>
        <TRow><TCol>Flipper zero</TCol><TCol><a href="https://lab401.com/products/flipper-zero?variant=42927883485414">flipper-zero</a></TCol></TRow>
        <TRow><TCol>Usb c dock</TCol><TCol><a href="https://www.startech.com/en-be/universal-laptop-docking-stations/dk30ch2depue">dk30ch2depue</a></TCol></TRow>
        <TRow><TCol>Deskboard</TCol><TCol><a href="https://deskboardbuddy.com/pages/deskboard-buddy?utm_content=111271053987&gadid=461911847402">deskboard-buddy</a></TCol></TRow>
    </TableGrid>
</template>

<script setup lang="ts">

import TestImage from "@/assets/images/test.jpg";
const tableheaders = ["Item", "Link"];

</script>

<style scoped>
</style>
