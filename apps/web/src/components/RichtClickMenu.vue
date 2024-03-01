<template>
    <div :style="{ top: `${contextMenuY}px`, left: `${contextMenuX}px` }" v-show="showContextMenu" class="fixed">
        <div class="border-white border-[2px] rounded p-2 bg-black flex text-center align-middle">
            <p>you found an EasterEgg!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const showContextMenu = ref(false);

    const contextMenuY = ref(0);
    const contextMenuX = ref(0);

    const getMousePosition = (e: MouseEvent) => {
        contextMenuX.value = e.clientX;
        contextMenuY.value = e.clientY;
    };

    document.addEventListener(
        'contextmenu',
        function (e) {
            getMousePosition(e);
            showContextMenu.value = !showContextMenu.value;
            e.preventDefault();
        },
        false
    );

    document.addEventListener('click', function (e) {
        showContextMenu.value = false;
    });
</script>

<style scoped></style>
