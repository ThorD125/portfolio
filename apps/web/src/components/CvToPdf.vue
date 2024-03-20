<template>
    <button @click="generatePDF">make PDF</button>
    <!-- https://pdfcandle.com/pdf_color.aspx -->
    <div id="pdf" style="background-color: #000000 !important;">
        <div class="p-4" style="background-color: #000000 !important;">
            <h1>&lt;CV Thor Demeestere/&gt;</h1>
            <cv download="true" style="background-color: #000000 !important;">
                <contact download="true" />
            </cv>
            <div class="h-[100%] w-[100%]" style="background-color: #000000 !important;"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import contact from '@/views/contact.vue';
    import cv from '@/views/cv.vue';
    import html2pdf from 'html2pdf.js';

    function generatePDF() {
        const doc = document.querySelector('#pdf');
        html2pdf(doc, {
            margin: 0,
            filename: 'cv.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', orientation: 'portrait' },
            pagebreak: { mode: 'avoid-all' }
        });
    }
</script>

<style scoped></style>
