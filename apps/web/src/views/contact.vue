<template>
    <table class="table-auto">
        <tr>
            
            <td class="text-2xl" v-if="!props.download">
                <h2>
                    Profiel
                </h2>
            </td>
            <td v-if="props.download" colspan="2">
                <h2>
                    &lt;Profiel /&gt;
                </h2>
            </td>
        </tr>
        <tr v-if="!props.download">
            <td class="font-bold">Naam</td>
            <td class="pl-3">Thor Demeestere</td>
        </tr>
        <tr>
            <td class="font-bold">Richting</td>
            <td class="pl-3">Student Toegepaste Informatica</td>
        </tr>
        <tr>
            <td class="font-bold">School </td>
            <td class="pl-3">Howest Brugge</td>
        </tr>
        <tr>
            <td class="font-bold">Address</td>
            <td class="pl-3">J&M Sabbestraat 125, 8930 Menen</td>
        </tr>
        <tr>
            <td class="font-bold">Email</td>
            <td class="pl-3">thor.demeestere@gmail.com</td>
        </tr>
        <tr>
            <td class="font-bold">Number</td>
            <td class="pl-3">0489 71 44 63</td>
        </tr>
        <tr>
            <td class="font-bold">Birthday</td>
            <td class="pl-3">05/05/2003</td>
        </tr>
    </table>
</template>

<script setup lang="ts">

    const props = defineProps<{
        download: boolean;
    }>();
    
</script>

<style scoped>
    td + td:before {
        content: ":";
        padding-right: 1rem;
    }
</style>
