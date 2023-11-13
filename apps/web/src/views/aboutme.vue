<template>
<div class="flex">
    <div class="h-fit m-auto p-5">        
        <h1 class="m-0">&lt;About me\&gt;</h1>
        <p>&lt;<span>School</span> Howest\&gt;</p>
        <p>&lt;<span>Status</span> student\&gt;</p>
        <p>&lt;<span>Location</span> Menen, België\&gt;</p>
        <p>&lt;<span>Birthdate</span> 5 mei 2003\&gt;</p>
        <p>&lt;<span>Phone</span> +32 489 71 44 633\&gt;</p>
        <p>&lt;<span>Email</span> thor.demeestere@telenet.be\&gt;</p>
        <p class="flex align-center hover:cursor-pointer" @click="openLinkedIn">&lt;<span>Linked</span>&nbsp;<ImageIcon src="linkedin" class="w-5 h-5" />&nbsp;\&gt;</p>
        <p>&lt;<span>Github</span> https://github.com/ThorD125?tab=repositories \&gt;</p>
    </div>
</div>
   
</template>

<script setup lang="ts">

const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/thor-demeestere/", "_blank");
}

</script>

<style scoped>
    span {
        font-weight: 500;
        color: var(--accentcolor);
    }
</style>
