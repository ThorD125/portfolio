<template>
        <div class="w-full h-full flex content-around items-center">
            <div class="md:ml-5 pl-2 w-full">
                <qrcode-vue :value="url" style="width: 100%; height: auto;" level="H" />
            </div>
        </div>

</template>

<script setup lang="ts">

import QrcodeVue from 'qrcode.vue'

const url = 'https://blog.thor-demeestere.be/cv';


</script>

<style scoped>
</style>
