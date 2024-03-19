<template>
    <button @click="generatePDF">make PDF</button>
    <div id="pdf">
        <div class="p-4">
            <cv></cv>
        </div>
    </div>
</template>

<script setup lang="ts">
    import cv from '@/views/cv.vue';
    import html2pdf from 'html2pdf.js';

    function generatePDF() {
        const doc = document.querySelector('#pdf');
        html2pdf(doc, {
            margin: 10,
            filename: 'cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        });
    }
</script>

<style scoped></style>
