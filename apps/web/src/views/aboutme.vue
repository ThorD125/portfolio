<template>
<div class="flex h-full w-full">
    <div class="h-fit my-auto md:m-auto w-[90vw] md:w-auto">        
        <h1 class="m-0 my-1">&lt;About me /&gt;</h1>
        <p class="flex align-center hover:cursor-pointer hover:font-bold">Naam Thor Demeestere </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold"><span>School</span><ImageIcon src="school"/> Howest </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold"><span>Status</span><ImageIcon src="student"/> student </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold"><span>Birthdate</span><ImageIcon src="birthday"/> 5 mei 2003 </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openPhone"><span>Phone</span><ImageIcon src="phone"/> </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openEmail"><span>Email</span><ImageIcon src="email"/> </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openLinkedIn"><span>Linked</span><ImageIcon src="linkedin"/> </p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openGithub"><span>Github</span><ImageIcon src="github"/> </p>
    </div>
</div>
   
</template>

<script setup lang="ts">

const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/thor-demeestere/", "_blank");
}

const openGithub = () => {
    window.open("https://github.com/ThorD125?tab=repositories", "_blank");
}
const openEmail = () => {
    window.open("mailto:thor.demeestere@telenet.be", "_blank");
}
const openPhone = () => {
    window.open("tel:+32489714463", "_blank");
}

</script>

<style scoped>
    span {
        font-weight: 500;
        color: var(--accentcolor);
    }
</style>
