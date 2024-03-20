<template>
        <div class="w-full h-full flex content-center items-center">
            <div class="md:ml-5 pl-2 w-full flex content-center items-center">
                <qrcode-vue :value="url" class="ml-auto mr-auto" style="width: 100%; height: auto; max-height: 70vh; max-width: 70vh;" level="H" />
            </div>
        </div>

</template>

<script setup lang="ts">

import QrcodeVue from 'qrcode.vue'

const url = 'https://blog.thor-demeestere.be/cv';


</script>

<style scoped>
</style>
