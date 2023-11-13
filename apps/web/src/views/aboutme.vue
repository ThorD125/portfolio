<template>
<div class="flex h-full">
    <div class="h-fit m-auto p-5">        
        <h1 class="m-0 my-1">&lt;About me /&gt;</h1>
        <p class="flex align-center hover:cursor-pointer hover:font-bold">&lt;<span>School</span><ImageIcon src="school"/> Howest /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold">&lt;<span>Status</span><ImageIcon src="student"/> student /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold">&lt;<span>Birthdate</span><ImageIcon src="birthday"/> 5 mei 2003 /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openPhone">&lt;<span>Phone</span><ImageIcon src="phone"/> /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openEmail">&lt;<span>Email</span><ImageIcon src="email"/> /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openLinkedIn">&lt;<span>Linked</span><ImageIcon src="linkedin"/> /&gt;</p>
        <p class="flex align-center hover:cursor-pointer hover:font-bold" @click="openGithub">&lt;<span>Github</span><ImageIcon src="github"/> /&gt;</p>
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
